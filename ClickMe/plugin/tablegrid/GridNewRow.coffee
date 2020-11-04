class RojobaCo.GridNewRow
    constructor: (@Grid, @Options) ->
        @Id = 'tmp-id-' + $.now()
        blankRow = {}
        for column in @Grid.ColumnHeader.GridColumns
            switch column.DataType
                when 'int', 'currency'
                    blankRow[column.Name] = '0'
                else
                    blankRow[column.Name] = ''

        @GridCells = []
        @GridCells.push new RojobaCo.GridCell column, blankRow for column in @Grid.ColumnHeader.GridColumns

    render: (element) ->
        tr = $('<tr>')
            .attr 'id', @Id
            .addClass 'tablegrid-newrow'
            .appendTo element

        gridCell.render tr for gridCell in @GridCells

        return