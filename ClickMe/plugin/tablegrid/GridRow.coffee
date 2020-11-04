class RojobaCo.GridRow
    constructor: (@Grid, @Data, @Options) ->
        @Id = @Data[@Options.idColumn]
        @Selected = false
        @GridCells = []
        @ColourRow = @Data.ColourRow
        @GridCells.push new RojobaCo.GridCell column, this for column in @Grid.ColumnHeader.GridColumns

    render: () ->
        parentClass = ''
        if @Options.parentColumn and @Data[@Options.parentColumn]
            parentClass = ' ' + @Data[@Options.parentColumn]
        
        if @ColourRow
            @Element = $('<tr>')
                .attr 'id', @Id
                .addClass 'tablegrid-row text-nowrap' + parentClass + ' colour-row'
        else
            @Element = $('<tr>')
                .attr 'id', @Id
                .addClass 'tablegrid-row text-nowrap' + parentClass

        if @Options.rowAttr
            attr = @Options.rowAttr @Data
            for own key, value of attr
                if key == 'class'
                    @Element.addClass value
                else
                    @Element.attr key, value

        if @Options.rowDisabled and @Options.rowDisabled @Data then @Element.addClass 'tablegrid-disable-row'

        if @Options.parentColumn and not @Options.expandParentColumns 
            @Element.hide()
            
        return @Element
