class RojobaCo.GridReviewColumn

    constructor: (@TableGrid) ->

    render: (data) ->
        options = @TableGrid.Options

        div = $('<div>')
            .addClass 'tablegrid-review'
            .css 'position', 'absolute'
            .css 'right', '0'
            .css 'top', '0'
            .appendTo @TableGrid.View

        if options.hide then div.css 'display', 'none'

        @Table = $('<table>')
            .addClass 'table table-bordered table-striped table-hover'
            .css 'margin', '0'
            .appendTo div

        @Table.addClass @TableGrid.Element.attr 'class'

        thead = $('<thead>')
            .appendTo @Table

        tr = $('<tr>')
            .addClass 'tablegrid-review-header'
            .appendTo thead

        th = $('<th>')
            .text 'Review'
            .appendTo tr
        
        for row in data.rows
            this.addRow row

        return

    addRow: (row) ->
        options = @TableGrid.Options
        rowId = row[options.idColumn]

        tr = $('<tr>')
            .attr 'id', 'R_' + rowId
            .addClass 'tablegrid-review-row'
            .appendTo @Table
            
        td = $('<td>')
            .appendTo tr

        buttons = $('<div>')
            .addClass 'tablegrid-review-buttons btn-group'
            .attr 'role', 'group'
            .css 'float', 'left'
            .appendTo td

        $('<button>')
            .attr 'type', 'button'
            .attr 'title', 'Review this record'
            .addClass 'btn btn-default'
            .html '<i class="fa fa-eye"></i>'
            .on 'click', (e) ->
                id = $(e.target).closest('tr').attr('id')
                options.onReviewClick id.substring 2, id.length
                return
            .appendTo buttons

        return

    updateRow: (row) ->
        options = @TableGrid.Options
        rowId = row[options.idColumn]

        afterTr = $('tr#A_' + rowId, @Table).prev()        
        $('tr#A_' + rowId, @Table).remove()

        tr = $('<tr>')
            .attr 'id', 'A_' + rowId
            .addClass 'tablegrid-action-row'

        if afterTr.length is 0
            tr.prependTo $('tbody', @Table)
        else
            tr.insertAfter afterTr

            
        td = $('<td>')
            .appendTo tr

        actionClick = (e) =>
            id = $(e.target).closest('tr').attr('id')

            iconClass = ''
            if e.target.tagName is 'BUTTON'
                iconClass = $('i', $(e.target)).attr 'class'
            else
                iconClass = $(e.target).attr 'class'

            for action in options.rowActions
                if iconClass.indexOf(action.icon) isnt -1 
                    action.onClick id.substring 2, id.length
                    break

            e.stopPropagation()
            return

        if options.rowActions.length > 0
            buttons = $('<div>')
                .addClass 'tablegrid-action-buttons btn-group'
                .attr 'role', 'group'
                .css 'float', 'left'
                .appendTo td

            for action in options.rowActions
                hidden = false
                if action.hidden
                    hidden = action.hidden row

                if hidden isnt true
                    $('<button>')
                        .attr 'type', 'button'
                        .attr 'title', action.title
                        .addClass 'btn btn-default'
                        .html '<i class="fa fa-' + action.icon + '"></i>'
                        .on 'click', actionClick
                        .appendTo buttons
        else
            td.html '&nbsp;'

        return