class RojobaCo.GridParentRow
    constructor: (@Grid, @Data, @Options) ->
        @Id = 'tmp-id-' + @Data[@Options.parentColumn]
        @HasStock = @Data.HasStock
        @IsLocked = @Data.IsLocked
        @ForcedParentValues = @Data.ForcedParentValues
        return

    render: () ->
        parentValue = @Data[@Options.parentColumn].replace ' ', ''
            
        if @Options.hideParent
            tr = $('<tr>')
                .attr 'id', @Id
                .addClass 'tablegrid-parentrow text-nowrap hidden'
        else
            if @HasStock 
                tr = $('<tr>')
                    .attr 'id', @Id
                    .addClass 'tablegrid-parentrow text-nowrap'
            else
                tr = $('<tr>')
                    .attr 'id', @Id
                    .addClass 'tablegrid-parentrow text-nowrap no-stock'


        parentColumnIndex = 0
        if @Grid.MultiSelectColumn
            parentColumnIndex = 1
            $('<td>')
                .appendTo tr

        td = $('<td>')
            .html () -> 
                if parentValue.includes 'Colour-Change'
                    return '<span>Colour Change</span>'
                else if parentValue.includes 'Break'
                    return '<span>Break</span>'  
                else 
                    return '<span>' + parentValue + '</span>'
                return
            .appendTo tr

        #  td = $('<td>')
        #     .html '<span>' + parentValue + '</span>'
        #     .appendTo tr
            
        if @Options.expandParentColumns
            $('<i>')
                .addClass 'tablegrid-parentrow-toggle'
                .prependTo td
        else if not @Options.hideChildren
            $('<i>')
                .addClass 'tablegrid-parentrow-toggle la la-caret-right'
                .attr 'data-job', @Id
                .on 'click', (e) =>
                    job = $(e.target).data 'job'
                    $('[data-job=' + job + ']').toggleClass 'la-caret-down'
                    $('[data-job=' + job + ']').toggleClass 'la-caret-right'
                    $('.' + parentValue, @Grid.View).toggle()
                    return
                .prependTo td
        if @IsLocked

            tr.addClass 'row-locked'
            $('<i>')
                .addClass 'la la-lock'
                .prependTo td
        for column, i in @Grid.ColumnHeader.GridColumns
            if i > parentColumnIndex
                totalValue = ''
                isNumber = false
                if column.DataType is 'int' or column.DataType is 'float'
                    totalValue = 0
                
                now = moment()
                if column.DataType == 'Duration'
                    now.set {
                        hour: 0
                        minute: 0
                        second: 0
                    }
                    totalValue = '00:00:00'

                for row in @Grid.Rows
                    if row instanceof RojobaCo.GridRow
                        if row.Data[@Options.parentColumn] is parentValue
                            if column.Render
                                if column.Name is 'ExtToBeCoated'
                                    value = row.Data[column.Name]
                                else
                                    value = column.Render @Data
                            else
                                value = row.Data[column.Name]

                            if column.Name is 'Status'
                                if value is 'QC Passed'
                                    tr.addClass('jobparent-qcpassed')
                                else if value is 'QA'
                                    tr.addClass('jobparent-qa')
                                else if value is 'Completed'
                                    tr.addClass('jobparent-completed')
                                else if value is 'Awaiting Dispatch'
                                    tr.addClass('jobparent-awaitingdispatch')
                                else if value is 'Scheduled'
                                    tr.addClass('jobparent-scheduled')
                                else if value is 'Colour Change'
                                    tr.addClass('jobparent-colourchange')
                                else if value is 'Break'
                                    tr.addClass('jobparent-break')

                            if value
                                if column.DataType is 'int'
                                    isNumber = true
                                    totalValue += parseInt value
                                else if column.DataType is 'float'
                                    isNumber = true
                                    totalValue += parseFloat value
                                else if column.DataType is 'StartTime'
                                    if totalValue is '' then totalValue = value
                                else if column.DataType is 'PowderUsage'
                                    if not totalValue
                                        totalValue = value
                                else if column.DataType is 'Duration'
                                    if row.Data.DurationOfJob isnt 0
                                        hours = parseInt(row.Data.DurationOfJob * 24)
                                        minutes = parseInt(((row.Data.DurationOfJob * 24) - hours) * 60)
                                        seconds = parseInt((((row.Data.DurationOfJob * 24) * 60) - minutes) * 60)

                                        currentRowDuration = ('00'+ hours).slice(-2) + ':' + ('00'+ minutes).slice(-2) + ':' + ('00'+ seconds).slice(-2)

                                        timeParts = now.format('HH:mm:ss').split ':'
                                        currentRowDurationParts = currentRowDuration.split ':' 

                                        now.set {
                                            hour: parseInt(timeParts[0]) + parseInt(currentRowDurationParts[0])
                                            minute: parseInt(timeParts[1]) + parseInt(currentRowDurationParts[1])
                                            second: parseInt(timeParts[2]) + parseInt(currentRowDurationParts[2])
                                        }

                                        totalValue = now.format 'HH:mm:ss'
                                else
                                    if totalValue.indexOf(value) is -1
                                        if totalValue.length > 0
                                            totalValue += ', '
                                        
                                        totalValue += value


                if isNumber and column.Name != 'ExtToBeCoated'
                    $('<td>')
                        .html totalValue.toFixed(2)
                        .appendTo tr
                else if column.Name is 'QuantityOnPurchaseOrder' or column.Name is 'QuantityOnSalesOrder' or column.Name is 'QuantityOnComponentLines'
                    if totalValue.length == 0
                        $('<td>')
                            .html 0
                            .css 'text-align', 'center'
                            .appendTo tr
                    else
                        $('<td>')
                            .html totalValue
                            .css 'text-align', 'center'
                            .appendTo tr
                else if column.Name is 'BCInventory'
                    bcInventory = @ForcedParentValues.BCInventory
                    $('<td>')
                        .html bcInventory
                        .appendTo tr
                else if column.Name is 'Difference'
                    Difference = @ForcedParentValues.Difference
                    $('<td>')
                        .html Difference
                        .appendTo tr
                else if column.Name is 'DifferencePercentage'
                    DifferencePercentage = @ForcedParentValues.DifferencePercentage
                    $('<td>')
                        .html DifferencePercentage
                        .appendTo tr
                else
                    $('<td>')
                        .html totalValue
                        .appendTo tr
                        
        if @Grid.ActionColumn
            $('<td>')
                .appendTo tr
            
        return tr
