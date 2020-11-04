class RojobaCo.PivotColumnHeader
    @Element: null
    @TableElement: null    
    
    constructor: (@TableGrid) ->
        @GridColumns = []
        return

    render: (data) ->
        options = @TableGrid.Options
        if @Element then @Element.remove()
            
        @Element = $('<div>')
            .addClass 'tablegrid-header'
            .appendTo @TableGrid.View
            
        @TableElement = $('<table>')
            .addClass 'table'        
            .appendTo @Element
            
        thead = $('<thead>')
            .appendTo @TableElement
            
        pivotHeader = $('<tr>')
            .appendTo thead

        $('<th>')
            .attr 'colspan', options.xDimension.length
            .appendTo pivotHeader

        xColumns = []
        for row in data.rows
            for y in options.yDimension
                if row[y] not in xColumns
                    xColumns.push row[y]

        for x in xColumns
            $('<th>')
                .attr 'colspan', options.aggregates.length            
                .text x
                .appendTo pivotHeader

        header = $('<tr>')
            .appendTo thead

        for x in options.xDimension
            for column in options.columnModel
                if x is column.name
                    @GridColumns.push new RojobaCo.GridColumn @TableGrid, column
                    break

        for x in xColumns
            for agg in options.aggregates
                for column in options.columnModel
                    if agg.member is column.name
                        pivotColumn = jQuery.extend {}, column
                        pivotColumn.name = x + '_' + column.name
                        @GridColumns.push new RojobaCo.GridColumn @TableGrid, pivotColumn
                        break
            
        column.render header for column in @GridColumns

        return
