class RojobaCo.GridActionColumn
    @TableElement: null
    @Container: null

    constructor: (@TableGrid) ->
        options = @TableGrid.Options

        @Container = $('<div>')
            .addClass 'tablegrid-action'
            .appendTo @TableGrid.View

        if options.hide then @Container.css 'display', 'none'

        header = $('<div>')
            .addClass 'tablegrid-action-header'
            .appendTo @Container

        headerbox = $('<div>')
            .addClass 'tablegrid-action-header-box'
            .appendTo header

        headertable = $('<table>')
            .addClass 'table'        
            .appendTo headerbox
            
        thead = $('<thead>')
            .appendTo headertable
            
        trow = $('<tr>')
            .appendTo thead

        $('<th>')
            .addClass 'tablegrid-column action-header'
            .css 'w class="nav-item"idth', '1px'
            .html '<span>Actions</span>'
            .appendTo trow

        detail = $('<div>')
            .addClass 'tablegrid-action-detail'
            .appendTo @Container

        detailbox = $('<div>')
            .addClass 'tablegrid-action-detail-box'
            .appendTo detail
                                                                                                                                                
        @TableElement = $('<table>')
            .addClass 'table'
            .appendTo detailbox

        return

    render: (rows) ->
        $('tr.tablegrid-action-row', @TableElement).remove()
        $('tr.tablegrid-action-grouprow', @TableElement).remove()        
        $('tr.tablegrid-action-parentrow', @TableElement).remove()        

        for row in rows
            this.addRow row

        return

    addRow: (row) ->
        options = @TableGrid.Options

        tr = $('<tr>')
            .attr 'id', 'A_' + row.Id
            .appendTo @TableElement
        
        td = $('<td>')
            .appendTo tr

        hidden = false

        if options.rowDisabled and options.rowDisabled row.Data then hidden = true

        if row instanceof RojobaCo.GridGroupRow
            hidden = true
            tr.addClass 'tablegrid-action-grouprow'
        else if row instanceof RojobaCo.GridParentRow
            if options.hideParent
                tr.addClass 'tablegrid-action-parentrow hidden'
            else
                tr.addClass 'tablegrid-action-parentrow'
            tr.attr 'id', 'A_' + row.Data[options.parentColumn]
        else
            parentClass = ''
            if options.parentColumn
                parentClass = ' ' + row.Data[options.parentColumn]
            
            tr.addClass 'tablegrid-action-row' + parentClass
            if options.parentColumn && not options.expandParentColumns
                tr.hide()
            

                
        actionClick = (e) =>
            id = $(e.target).closest('tr').attr('id')
            options = @TableGrid.Options
            iconClass = ''
            if e.target.tagName is 'A' or e.target.tagName is 'BUTTON'
                iconClass = $('i', $(e.target)).attr 'class'
            else
                iconClass = $(e.target).attr 'class'

            for action in options.rowActions
                if iconClass.indexOf(action.icon) isnt -1
                    rowId = id.substring 2, id.length
                    action.onClick rowId
                    if options.afterRowAction
                        options.afterRowAction rowId, action.name
                        
                    break

            e.stopPropagation()
            return

        if options.rowActions.length > 0 and hidden isnt true
            buttons = $('<div>')
                .addClass 'tablegrid-action-buttons btn-group'
                .attr 'role', 'group'
                .appendTo td

            for action in options.rowActions
                hidden = false
                if action.hidden
                    hidden = action.hidden row.Data
                
                disabled = false
                if action.disabled
                    disabled = action.disabled row.Data

                if hidden isnt true
                    button = $('<a>')
                        .attr 'href', 'javascript:void(0);'
                        .attr 'title', action.title
                        .appendTo buttons

                    if action.caption and action.caption.length > 0
                        button
                            .html '<i class="fa fa-' + action.icon + '"></i>&nbsp;' + action.caption
                    else
                        button
                            .addClass 'btn btn-default btn-secondary'
                            .html '<i class="fa fa-' + action.icon + '"></i>'

                    if action.cssClass and action.cssClass.length > 0
                        button.addClass action.cssClass
                        
                    if disabled is true
                        button.addClass 'disabled'
                    else
                        button.on 'click', actionClick

        else
            td.html '&nbsp;'

        return

    updateRow: (row) ->
        options = @TableGrid.Options
        rowId = row[options.idColumn]

        afterTr = $('tr#A_' + rowId, @TableElement).prev()        
        $('tr#A_' + rowId, @TableElement).remove()

        tr = $('<tr>')
            .attr 'id', 'A_' + rowId
            .addClass 'tablegrid-action-row'

        if afterTr.length is 0
            tr.prependTo @TableElement
        else
            tr.insertAfter afterTr

        td = $('<td>')
            .appendTo tr

        hidden = false

        if options.rowDisabled and options.rowDisabled row then hidden = true

        actionClick = (e) =>
            id = $(e.target).closest('tr').attr('id')
            options = @TableGrid.Options
            iconClass = ''
            if e.target.tagName is 'A' or e.target.tagName is 'BUTTON'
                iconClass = $('i', $(e.target)).attr 'class'
            else
                iconClass = $(e.target).attr 'class'

            for action in options.rowActions
                if iconClass.indexOf(action.icon) isnt -1
                    rowId = id.substring 2, id.length
                    action.onClick rowId
                    if options.afterRowAction
                        options.afterRowAction rowId, action.name
                        
                    break

            e.stopPropagation()
            return
            
        if options.rowActions.length > 0 and hidden isnt true
            buttons = $('<div>')
                .addClass 'tablegrid-action-buttons btn-group'
                .attr 'role', 'group'
                .css 'float', 'left'
                .appendTo td

            for action in options.rowActions
                hidden = false
                if action.hidden
                    hidden = action.hidden row

                disabled = false
                if action.disabled
                    disabled = action.disabled row

                if hidden isnt true
                    button = $('<a>')
                        .attr 'href', 'javascript:void(0);'
                        .attr 'title', action.title
                        .appendTo buttons

                    if action.caption and action.caption.length > 0
                        button
                            .html '<i class="fa fa-' + action.icon + '"></i>&nbsp;' + action.caption
                    else
                        button
                            .addClass 'btn btn-default btn-secondary'
                            .html '<i class="fa fa-' + action.icon + '"></i>'

                    if action.cssClass and action.cssClass.length > 0
                        button.addClass action.cssClass

                    if disabled is true
                        button.addClass 'disabled'
                    else
                        button.on 'click', actionClick

        else
            td.html '&nbsp;'

        return
