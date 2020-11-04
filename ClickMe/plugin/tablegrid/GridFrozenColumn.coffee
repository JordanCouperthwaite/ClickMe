class RojobaCo.GridFrozenColumn
    @TableElement: null
    @Container: null

    constructor: (@TableGrid, @Column) ->
        options = @TableGrid.Options

        @Container = $('<div>')
            .addClass 'tablegrid-frozen'
            .appendTo @TableGrid.View

        if options.hide then @Container.css 'display', 'none'

        header = $('<div>')
            .addClass 'tablegrid-frozen-header'
            .appendTo @Container

        headerbox = $('<div>')
            .addClass 'tablegrid-frozen-header-box'
            .appendTo header

        headertable = $('<table>')
            .addClass 'table'        
            .appendTo headerbox
            
        thead = $('<thead>')
            .appendTo headertable
            
        trow = $('<tr>')
            .appendTo thead

        @Column.render trow

        @Detail = $('<div>')
            .addClass 'tablegrid-frozen-detail'
            .appendTo @Container

        detailbox = $('<div>')
            .addClass 'tablegrid-frozen-detail-box'
            .appendTo @Detail
                                                                                                                                                
        @TableElement = $('<table>')
            .addClass 'table'
            .appendTo detailbox

        return

    render: (rows) ->
        $('tr.tablegrid-frozen-row', @TableElement).remove()
        $('tr.tablegrid-frozen-grouprow', @TableElement).remove()
        $('tr.tablegrid-frozen-parentrow', @TableElement).remove()

        for row in rows
            this.addRow row

        return

    addRow: (row) ->
        options = @TableGrid.Options

        elTr = row.render()
        @TableElement.append elTr       
        elTr.attr 'id', 'F_' + @Column.Name + '_' + row.Id
            
        hidden = false

        if options.rowDisabled and options.rowDisabled row.Data then hidden = true

        if row instanceof RojobaCo.GridGroupRow
            hidden = true
            elTr.addClass 'tablegrid-frozen-grouprow'            
        else if row instanceof RojobaCo.GridParentRow
            hidden = true
            elTr.empty()
            $('<td>')
                # .html '&nbsp;'
                .html row.Data.Status
                .appendTo elTr
            elTr.addClass 'tablegrid-frozen-parentrow'            
        else
            for cell in row.GridCells
                if cell.GridColumn.Name is @Column.Name
                    cell.render elTr
            
            elTr.removeClass 'tablegrid-row'
            elTr.addClass 'tablegrid-frozen-row'
                
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
