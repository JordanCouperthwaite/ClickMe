class RojobaCo.GridMultiSelectColumn
    @TableElement: null
    @Container: null

    constructor: (@TableGrid) ->
        options = @TableGrid.Options
        @Container = $('<div>')
            .addClass 'tablegrid-multiselect'
            .appendTo @TableGrid.View

        if options.hide then @Container.css 'display', 'none'

        header = $('<div>')
            .addClass 'tablegrid-multiselect-header'
            .appendTo @Container
            
        headerbox = $('<div>')
            .addClass 'tablegrid-multiselect-header-box'
            .appendTo header

        headertable = $('<table>')
            .addClass 'table'        
            .appendTo headerbox
            
        thead = $('<thead>')
            .appendTo headertable
            
        trow = $('<tr>')
            .appendTo thead

        th = $('<th>')
            .addClass 'tablegrid-column'
            .css 'width', '1px'
            .appendTo trow

        $('<input>')
            .attr 'type', 'checkbox'
            .addClass 'tablegrid-checkbox_all'
            .css 'margin', '0'
            .on 'change', (e) =>
                for row, i in @TableGrid.Grid.Rows
                    isChecked = $(e.currentTarget).is(':checked')
                    if $('#tablegrid-checkbox_' + row.Id).length > 0
                        row.Selected = isChecked
                        $('#tablegrid-checkbox_' + row.Id).prop 'checked', isChecked
                return
            .appendTo th

        detail = $('<div>')
            .addClass 'tablegrid-multiselect-detail'
            .appendTo @Container

        detailbox = $('<div>')
            .addClass 'tablegrid-multiselect-detail-box'
            .appendTo detail

        @TableElement = $('<table>')
            .addClass 'table'
            .appendTo detailbox

        return

    render: (rows) ->
        $('tr.tablegrid-multiselect-row', @TableElement).remove()
        $('tr.tablegrid-multiselect-grouprow', @TableElement).remove()        
        $('tr.tablegrid-multiselect-parentrow', @TableElement).remove()        

        options = @TableGrid.Options

        for row in rows
            tr = $('<tr>')
                .attr 'id', 'C_' + row.Id
                .appendTo @TableElement

            td = $('<td>')
                .appendTo tr

            hidden = false

            if row instanceof RojobaCo.GridRow
                if options.multiselect.hidden and options.multiselect.hidden row.Data then hidden = true
                
            if options.rowDisabled and options.rowDisabled row.Data then hidden = true

            if row instanceof RojobaCo.GridGroupRow
                hidden = true
                tr.addClass 'tablegrid-multiselect-grouprow'
            else if row instanceof RojobaCo.GridParentRow
                if options.showChildrenMultiSelect
                    tr.addClass 'tablegrid-multiselect-parentrow hidden'
                else
                    tr.addClass 'tablegrid-multiselect-parentrow'
            else
                parentClass = ''
                if options.parentColumn
                    parentClass = ' ' + row.Data[options.parentColumn]
                
                tr.addClass 'tablegrid-multiselect-row' + parentClass
                if options.parentColumn and not options.showChildrenMultiSelect
                    tr.hide()
                
            if hidden
                td.html '&nbsp;'
            else
                $('<input>')
                    .attr 'type', 'checkbox'
                    .attr 'id', 'tablegrid-checkbox_' + row.Id
                    .attr 'value', row.Id
                    .css 'margin', '0'
                    .on 'change', this.select
                .appendTo td

        return

    addRow: (row) ->
        options = @TableGrid.Options
        rowId = row[options.idColumn]

        tr = $('<tr>')
            .attr 'id', 'C_' + rowId
            .addClass 'tablegrid-multiselect-row'
            .appendTo @TableElement

        td = $('<td>')
            .appendTo tr

        hidden = false
        if options.multiselect.hidden
            hidden = options.multiselect.hidden row

        if options.rowDisabled and options.rowDisabled row then hidden = true

        if hidden
            td.html '&nbsp;'
        else
            $('<input>')
                .attr 'type', 'checkbox'
                .attr 'id', 'tablegrid-checkbox_' + rowId
                .attr 'value', rowId
                .css 'margin', '0'
                .on 'change', this.select
            .appendTo td

        return

    updateRow: (row) ->
        options = @TableGrid.Options
        rowId = row[options.idColumn]

        afterTr = $('tr#C_' + rowId, @TableElement).prev()
        $('tr#C_' + rowId, @TableElement).remove()

        tr = $('<tr>')
            .attr 'id', 'C_' + rowId
            .addClass 'tablegrid-multiselect-row'            

        if afterTr.length is 0
            tr.prependTo @TableElement
        else
            tr.insertAfter afterTr

        td = $('<td>')
            .appendTo tr

        hidden = false
        if options.multiselect.hidden
            hidden = options.multiselect.hidden row

        if options.rowDisabled and options.rowDisabled row then hidden = true

        if hidden isnt true
            $('<input>')
                .attr 'type', 'checkbox'
                .attr 'id', 'tablegrid-checkbox_' + rowId
                .attr 'value', rowId
                .css 'margin', '0'
                .on 'change', this.select
            .appendTo td

        return

    select : (e) =>
        options = @TableGrid.Options
        selectedId = $(e.target).val()

        allChecked = true
        for row in @TableGrid.Grid.Rows
            if row.Id.toString() is selectedId
                row.Selected = $(e.target).is(':checked')
                if row instanceof RojobaCo.GridParentRow
                    parentValue = row.Data[options.parentColumn]
                    $('.' + parentValue, @TableElement).each (index, element) =>
                        rowId = $(element).attr('id').substring(2)
                        $('#tablegrid-checkbox_' + rowId).prop 'checked', row.Selected
                        for childRow in @TableGrid.Grid.Rows
                            if childRow.Id.toString() is rowId
                                childRow.Selected = row.Selected
                                break

                        return

            if not row instanceof RojobaCo.GridParentRow
                row.Element.removeClass 'tablegrid-row-selected'
                if row.Selected
                    row.Element.addClass 'tablegrid-row-selected'
                else
                    allChecked = false

        $('#tablegrid-checkbox_all').prop 'checked', allChecked
        return
