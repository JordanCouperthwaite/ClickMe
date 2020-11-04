class RojobaCo.GridEmptyRow
    constructor: (@Grid, @Options) ->
        @Id = 'tmp-id-' + $.now()

    render: (element) ->
        tr = $('<tr>')
            .attr 'id', @Id
            .addClass 'tablegrid-emptyrow'
            .appendTo element

        $('<td>')
            .attr 'colspan', @Grid.ColumnHeader.GridColumns.length
            .text 'There are no records to display'
            .appendTo tr

        return