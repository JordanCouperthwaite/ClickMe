class RojobaCo.GridCell
    @RowIndex: -1
    @ColumnIndex: -1
    @Element: null

    constructor: (@GridColumn, @GridRow) ->
        @Value = @GridRow.Data[@GridColumn.Name]
        @HasValueChanged = false        

    render: (element) ->
        options = @GridColumn.TableGrid.Options
        
        value = @GridRow.Data[@GridColumn.Name]
        if @GridColumn.Render
            value = @GridColumn.Render @GridRow.Data
            
        if @GridColumn.Name == 'multiselect' || @GridColumn.Name == 'review' || @GridColumn.Name == 'action'
            $('<td>')
                .appendTo element
        else            
            @Element = $('<td>')
                .appendTo element

            @RowIndex = element.index() - 1      # -1 to exclude FirstRow
            @ColumnIndex = @Element.index()

            if options.renderCell
                renderedValue = options.renderCell @GridRow.Data, @Element, @GridColumn.Name, @RowIndex, @ColumnIndex

                if renderedValue
                    value = renderedValue

            if options.edit
                @Element.on 'click', (e)=>
                    @GridColumn.TableGrid.Grid.onCellSelect this
                    e.stopPropagation()
                    return
                    
            if @GridColumn.DataType is 'image'
                if @GridRow.Data[@GridColumn.Name]
                    value = '<img src="' + value + '" alt="' + @GridColumn.Name + ' image" />'
            else if not @GridColumn.Render
                @Element.attr 'title', value

            if @GridColumn.DataType is 'link'
                $('<a>')
                    .attr 'href', 'javascript:void(0);'
                    .html value
                    .on 'click', (e) =>
                        if options.onLink
                            options.onLink @GridRow.Id, @Element, @GridColumn.Name, @Value, @RowIndex, @ColumnIndex
                        return
                    .appendTo @Element
        
            else
                if value
                    @Element.html value
                else
                    @Element.html '&nbsp;'
            
            if options.afterCellCreate
                options.afterCellCreate @GridRow.Id, @Element, @GridColumn.Name, @Value, @RowIndex, @ColumnIndex
                        
        return
