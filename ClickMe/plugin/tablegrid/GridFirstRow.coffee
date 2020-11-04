class RojobaCo.GridFirstRow
    constructor: (@Grid, @Options) ->
        @Id = 'tmp-id-' + $.now()

    render: (element) ->
        tr = $('<tr>')
            .attr 'id', @Id
            .addClass 'tablegrid-firstrow'
            .css 'height', 'auto'
            .appendTo element

        for column in @Grid.ColumnHeader.GridColumns
            td = $('<td>')
                .css 'height', '0px'
                .css 'padding', '0px'
                .css 'margin', '0px'
                .appendTo tr

        return
