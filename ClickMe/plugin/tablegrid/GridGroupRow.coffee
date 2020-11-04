class RojobaCo.GridGroupRow
    constructor: (@Grid, @Data, @Options) ->
        @Id = 'tmp-id-' + $.now()

    render: () ->
        tr = $('<tr>')
            .attr 'id', @Id
            .addClass 'tablegrid-grouprow'
        $('<td>')
            .attr 'colspan', @Grid.ColumnHeader.GridColumns.length
            .text @Data
            .appendTo tr

        return tr
