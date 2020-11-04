class RojobaCo.GridColumnHeader
    @Element: null
    @TableElement: null    
    
    constructor: (@TableGrid) ->
        @GridColumns = []
        options = @TableGrid.Options

        #multiselect column
        if options.multiselect
            @GridColumns.push new RojobaCo.GridColumn @TableGrid, { name: 'multiselect', caption: '' }

        if options.columnModel and options.columnModel.length > 0
            for column in options.columnModel
                @GridColumns.push new RojobaCo.GridColumn @TableGrid, column

        #action column
        if options.rowActions.length > 0
            @GridColumns.push new RojobaCo.GridColumn @TableGrid, { name: 'action', caption: 'Actions' }

    add = (gridColumns, tableGrid, column) ->
        existingColumn = null
        for gridColumn in gridColumns
            if (gridColumn.Name == column.Name)
                existingColumn = gridColumn
                break;

        if existingColumn
            existingColumn.Caption = column.Caption
            existingColumn.Align = column.Align
            existingColumn.DataType = column.DataType
        else
            gridColumns.push new RojobaCo.GridColumn tableGrid, column

        return

    render: (element) ->
        options = @TableGrid.Options
                
        @Element = $('<div>')
            .addClass 'tablegrid-header'
            .appendTo element

        box = $('<div>')
            .addClass 'tablegrid-header-box'
            .appendTo @Element

        @TableElement = $('<table>')
            .addClass 'table'        
            .appendTo box
            
        thead = $('<thead>')
            .appendTo @TableElement
            
        trow = $('<tr>')
            .appendTo thead
            
        column.render trow for column in @GridColumns

        return

