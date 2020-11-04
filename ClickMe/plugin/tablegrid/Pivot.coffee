class RojobaCo.Pivot
    @Detail: null
    @Box: null    
    @TableElement: null
    @CellSelected: null
    @CellEdited: null

    KEY_CODES = {
        TAB: 9
        ENTER: 13
        ESCAPE: 27
        ARROW_LEFT: 37
        ARROW_UP: 38
        ARROW_RIGHT: 39
        ARROW_DOWN: 40
        F2: 113
    }

    constructor: (@TableGrid) ->
        options = @TableGrid.Options

        @ColumnHeader = new RojobaCo.PivotColumnHeader @TableGrid
                
        @Rows = []

        if options.edit
            $(document)
                .on 'click', (e) =>
                    if $(e.target).is('a') and $(e.target).parents('ul.dropdown-menu').length > 0 then return

                    if @TableGrid.Edited
                        if options.onEdit then options.onEdit()
                        @TableGrid.Edited = false

                    this.clearEditing()
                    return
                .on 'keydown', (e) =>
                    if @CellSelected
                        if e.shiftKey
                            switch e.keyCode
                                when KEY_CODES.TAB
                                    e.preventDefault()
                                    this.moveLeft()
                                else 
                                    return
                        else
                            switch e.keyCode
                                when KEY_CODES.ARROW_LEFT
                                    e.preventDefault()
                                    this.moveLeft()
                                when KEY_CODES.ARROW_UP
                                    e.preventDefault()
                                    this.moveUp()
                                when KEY_CODES.ARROW_RIGHT, KEY_CODES.TAB
                                    e.preventDefault()
                                    this.moveRight()
                                when KEY_CODES.ARROW_DOWN
                                    e.preventDefault()
                                    this.moveDown()
                                when KEY_CODES.F2
                                    e.preventDefault()
                                    this.editCell @CellSelected
                                else 
                                    return
                    else if @CellEdited
                        if e.shiftKey
                            switch e.keyCode
                                when KEY_CODES.TAB
                                    e.preventDefault()
                                    this.moveLeft()
                                    
                                else 
                                    return
                        else
                            switch e.keyCode
                                when KEY_CODES.ENTER
                                    e.preventDefault()
                                    this.selectCell @CellEdited
                                when KEY_CODES.TAB
                                    e.preventDefault()
                                    this.moveRight()
                                    
                                else 
                                    return

                    return
        return

    destroy: () ->
        column.destroy() for column in @ColumnHeader.GridColumns
        return

    render: (data) ->
        options = @TableGrid.Options
        if @Detail then @Detail.remove()

        @ColumnHeader.render data

        pivotData = {}
        for row in data.rows
            key = ''
            for x in options.xDimension
                key += row[x]

            if not pivotData[key] then pivotData[key] = {}

            pivotData[key][options.idColumn] = key
            for x in options.xDimension
                pivotData[key][x] = row[x]

            for y in options.yDimension
                for agg in options.aggregates
                    pivotData[key][row[y] + '_' + agg.member] = row[agg.member]


        @Rows = []
        @Rows.push new RojobaCo.GridRow this, row, @TableGrid.Options for key, row of pivotData
            
        @Detail = $('<div>')
            .addClass 'tablegrid-detail'
            .scroll (e) =>
                if @CellSelected
                    el = @CellSelected.Element[0]
                    divSelect = $('div.tablegrid-cell-select')
                    if divSelect.length > 0
                        divSelect.css 'left', el.offsetLeft

                $('.tablegrid-header', @TableGrid.View).scrollLeft $(e.target).scrollLeft()
                return
            .appendTo @TableGrid.View

        @Box = $('<div>')
            .addClass 'tablegrid-detail-box'
            .appendTo @Detail
            
        if options.height then @Detail.css 'height', options.height + 'px'
            
        if options.hide then @Detail.css 'display', 'none'

        @TableElement = $('<table>')
            .addClass 'table table-hover'
            .appendTo @Box
        
        @TableElement.addClass @TableGrid.Element.attr 'class'

        if @Rows.length > 0
            firstRow = new RojobaCo.GridFirstRow this, options
            firstRow.render @TableElement
        
        for row in @Rows
            elTr = row.render()
            @TableElement.append elTr
            gridCell.render elTr for gridCell in row.GridCells

        this.adjustSize()
        
        return

    onCellSelect: (cell) ->
        this.selectCell cell
        return

    onCellEdit: (cell) ->
        this.editCell cell
        return

    clearEditing: () ->
        options = @TableGrid.Options        
        $('div.tablegrid-cell-select').remove()
        $('div.tablegrid-cell-edit').remove()

        if @CellEdited
            if @CellEdited.HasValueChanged
                if options.afterCellEdit
                   options.afterCellEdit @CellEdited.GridRow.Id, @CellEdited.Element, @CellEdited.GridColumn.Name, @CellEdited.Value, @CellEdited.RowIndex, @CellEdited.ColumnIndex

            @CellEdited.HasValueChanged = false
        
        @CellSelected = null
        @CellEdited = null
        return

    selectCell: (cell) ->
        self = this
        self.clearEditing()
        @CellSelected = cell
        el = cell.Element[0]

        actionsWidth = 0
        options = @TableGrid.Options
        if options.rowActions.length > 0
            lastColumn = $('td', cell.Element.parent()).last()
            actionsWidth = lastColumn[0].offsetWidth
       
        scrollValue = (@Detail[0].offsetWidth - actionsWidth) - (el.offsetLeft + el.offsetWidth)

        if scrollValue < 0
            @Detail[0].scrollLeft = Math.abs(scrollValue) + actionsWidth + @Detail[0].scrollLeft
        else if @Detail[0].scrollLeft > 0
            @Detail[0].scrollLeft = el.offsetLeft

        $('<div>')
            .addClass 'tablegrid-cell-select'
            .css 'top', el.offsetTop
            .css 'left', el.offsetLeft
            .css 'width', el.offsetWidth
            .css 'height', el.offsetHeight
            .on 'click', (e) ->
                self.editCell cell
                e.stopPropagation()
                return
            .on 'dblclick', (e) ->  
                self.editCell cell
                e.stopPropagation()
                return
            .appendTo @Detail

        if options.editOnSelect
            self.editCell cell

        return

    editCell: (cell) ->
        options = @TableGrid.Options
        if not cell.GridColumn.Readonly
            this.clearEditing()
            @CellEdited = cell
            el = cell.Element[0]

            inputContainer = $('<div>')
                .addClass 'tablegrid-cell-edit'
                .css 'top', el.offsetTop
                .css 'left', el.offsetLeft
                .css 'width', el.offsetWidth
                .css 'height', el.offsetHeight
                .appendTo @Detail

            input = cell.GridColumn.getInput cell.Value, (value) =>
                canEdit = !options.beforeCellEdit

                if options.beforeCellEdit
                    canEdit = options.beforeCellEdit @CellEdited.GridRow.Id, @CellEdited.Element, @CellEdited.GridColumn.Name, @CellEdited.Value, value, @CellEdited.RowIndex, @CellEdited.ColumnIndex

                if canEdit
                    el.innerText = value
                    cell.Value = value
                    cell.HasValueChanged = true                
                    cell.GridRow.Data[cell.GridColumn.Name] = value

                    valueSet = false
                    for row in @TableGrid.Data.rows
                        if valueSet then break
                            
                        key = ''
                        for x in options.xDimension
                            key += row[x]

                        if key is cell.GridRow.Data[options.idColumn]
                            nameParts = cell.GridColumn.Name.split '_'
                            for y in options.yDimension
                                if row[y].toString() is nameParts[0]
                                    row[nameParts[1]] = value
                                    valueSet = true
                                    break

                    for column, index in @ColumnHeader.GridColumns
                        if column.Readonly and column.GetValue
                            cellValue = column.GetValue cell.GridRow.Data
                            readOnlyCell = cell.GridRow.GridCells[index]
                            cell.GridRow.Data[column.Name] = cellValue
                            readOnlyCell.Element.html cellValue

                    @TableGrid.Edited = true
                    
                return

            input.css 'height', el.offsetHeight
                .appendTo inputContainer

            $(':input', input)
                .css 'height', el.offsetHeight
                .focus()

        return

    updateCell: (cell, value) ->
        options = @TableGrid.Options        
        valueSet = false
        
        for row in @TableGrid.Data.rows
            if valueSet then break

            key = ''
            for x in options.xDimension
                key += row[x]

            if key is cell.GridRow.Data[options.idColumn]
                nameParts = cell.GridColumn.Name.split '_'
                for y in options.yDimension
                    if row[y].toString() is nameParts[0]
                        row[nameParts[1]] = value
                        valueSet = true
                        break
        
        return

    moveLeft: () ->
        if @CellEdited
            if @CellEdited.ColumnIndex is 1 then return

            row = @Rows[@CellEdited.RowIndex]
            cell = row.GridCells[@CellEdited.ColumnIndex - 1]
            this.editCell cell
        
        else if @CellSelected
            if @CellSelected.ColumnIndex is 1 then return

            row = @Rows[@CellSelected.RowIndex]
            cell = row.GridCells[@CellSelected.ColumnIndex - 1]
            this.selectCell cell

        return

    moveUp: () ->
        if @CellSelected.RowIndex is 0 then return

        row = @Rows[@CellSelected.RowIndex - 1]
        cell = row.GridCells[@CellSelected.ColumnIndex]
        this.selectCell cell

        return

    moveRight: () ->
        options = @TableGrid.Options
        skipColumns = 1
        if options.rowActions.length > 0
            skipColumns = 2

        if @CellEdited
            if @CellEdited.ColumnIndex is @ColumnHeader.GridColumns.length - skipColumns then return

            row = @Rows[@CellEdited.RowIndex]
            cell = row.GridCells[@CellEdited.ColumnIndex + 1]
            this.editCell cell

        else if @CellSelected
            if @CellSelected.ColumnIndex is @ColumnHeader.GridColumns.length - skipColumns then return

            row = @Rows[@CellSelected.RowIndex]
            cell = row.GridCells[@CellSelected.ColumnIndex + 1]
            this.selectCell cell

        return

    moveDown: (cell, view) ->
        if @CellSelected.RowIndex is @Rows.length - 1 then return

        row = @Rows[@CellSelected.RowIndex + 1]
        cell = row.GridCells[@CellSelected.ColumnIndex]
        this.selectCell cell

        return

    adjustSize: () ->
        $('tr.tablegrid-row, tr.tablegrid-grouprow, tr.tablegrid-multiselect-row, tr.tablegrid-multiselect-grouprow, tr.tablegrid-action-row, tr.tablegrid-action-grouprow', @TableGrid.View).css 'height', ''
        $('div.tablegrid-multiselect-header th, div.tablegrid-action-header th', @TableGrid.View).css 'height', ''
        
        setHeaderHeight = () =>
            headerHeight = $('div.tablegrid-header', @TableGrid.View).height() - 1
            $('div.tablegrid-multiselect-header th, div.tablegrid-action-header th', @TableGrid.View).css 'height', headerHeight + 'px'
            return
        
        setHeaderWidth = (indx, td) =>
            $('div.tablegrid-header th.tablegrid-column', @TableGrid.View).eq(indx).css 'width', $(td).outerWidth() + 'px'
            return

        setRowHeight = (indx, tr) =>
            rowHeight = $(tr).height()

            if @MultiSelectColumn
                tempHeight = $('tr.tablegrid-multiselect-row', @TableGrid.View).eq(indx).height()
                if tempHeight > rowHeight
                    rowHeight = tempHeight

            if @ActionColumn
                tempHeight = $('tr.tablegrid-action-row', @TableGrid.View).eq(indx).height()
                if tempHeight > rowHeight
                    rowHeight = tempHeight

            if @MultiSelectColumn
                $('tr.tablegrid-multiselect-row, tr.tablegrid-multiselect-grouprow', @TableGrid.View).eq(indx).css 'height', rowHeight + 'px'
                
            if @ActionColumn
                $('tr.tablegrid-action-row, tr.tablegrid-action-grouprow', @TableGrid.View).eq(indx).css 'height', rowHeight + 'px'
                
            $(tr).css 'height', rowHeight + 'px'

            return

        setTimeout () =>            
            $('tr.tablegrid-row, tr.tablegrid-grouprow', @TableGrid.View).each (indx, tr) ->
                setRowHeight indx, tr
                return

            totalWidth = 0
            for column in @ColumnHeader.GridColumns
                column.NewWidth = 0
                totalWidth += parseInt column.Width

            #what about options.width?
            if totalWidth > 0 and totalWidth < @TableElement.parent().outerWidth()
                availableWidth = @TableElement.parent().outerWidth()

                for column in @ColumnHeader.GridColumns
                    column.NewWidth = parseInt((column.Width / totalWidth) * availableWidth)

                totalWidth = @TableElement.parent().outerWidth()
                
            for column, index in @ColumnHeader.GridColumns
                td = $('td', $('tr.tablegrid-firstrow', @TableGrid.View)).eq(index)
                if column.NewWidth and column.NewWidth > 0
                    td.css 'width', column.NewWidth + 'px'
                else
                    td.css 'width', column.Width + 'px'

            if totalWidth > 0
                @TableElement.css 'width', totalWidth + 'px'

            $('.tablegrid-header-firstrow', $('thead', @ColumnHeader.TableElement)).remove()
            headerFirstRow = $('tr.tablegrid-firstrow', @TableGrid.View).clone()
            headerFirstRow.attr 'id', 'tmp-id-' + $.now()
            headerFirstRow.removeClass 'tablegrid-firstrow'
            headerFirstRow.addClass 'tablegrid-header-firstrow'
            $('thead', @ColumnHeader.TableElement).prepend(headerFirstRow)
            ###
            $('tr.tablegrid-firstrow td', @TableGrid.View).each (indx, td) ->
                setHeaderWidth indx, td
                return
            ###
            @ColumnHeader.TableElement.css 'width', @TableElement.outerWidth() + 'px'

            setHeaderHeight()
            
            return
        , 1

        return
