class RojobaCo.Grid
    @TableElement: null
    @CellSelected: null
    @CellEdited: null
    @Detail: null

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
        
        @RemovedIds = []
        @ColumnHeader = new RojobaCo.GridColumnHeader @TableGrid
        @GridFooter = new RojobaCo.GridFooter @TableGrid

        @ColumnHeader.render @TableGrid.View
        
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

        box = $('<div>')
            .addClass 'tablegrid-detail-box'
            .appendTo @Detail

        @MultiSelectColumn = null
        if options.multiselect
            @MultiSelectColumn = new RojobaCo.GridMultiSelectColumn @TableGrid, @Detail

        @ActionColumn = null
        if options.rowActions.length > 0
            @ActionColumn = new RojobaCo.GridActionColumn @TableGrid, @Detail

        @FrozenColumns = []
        for column in @ColumnHeader.GridColumns
            if column.Freeze
                @FrozenColumns.push new RojobaCo.GridFrozenColumn @TableGrid, column
        
        if options.height then @Detail.css 'height', options.height + 'px'

        if options.hide then @Detail.css 'display', 'none'

        @TableElement = $('<table>')
            .addClass 'table table-hover'
            .appendTo box
        
        @TableElement.addClass @TableGrid.Element.attr 'class'

        @GridFooter.render @TableGrid.Container

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
        $('tr.tablegrid-row', @TableElement).remove()
        $('tr.tablegrid-grouprow', @TableElement).remove()
        $('tr.tablegrid-parentrow', @TableElement).remove()
        $('tr.tablegrid-firstrow', @TableElement).remove()
        $('tr.tablegrid-emptyrow', @TableElement).remove()

        @Rows = []
        if data.rows and data.rows.length > 0
            if options.groupColumn
                grouping = {}
                for row in data.rows
                    groupValue = row[options.groupColumn]
                    if not grouping[groupValue]
                        grouping[groupValue] = []

                    grouping[groupValue].push row

                for p of grouping
                    @Rows.push new RojobaCo.GridGroupRow this, p, options
                    for row in grouping[p]
                        if row.id not in @RemovedIds
                            @Rows.push new RojobaCo.GridRow this, row, options 
            else if options.parentColumn
                prev = ''
                for row in data.rows
                    if row.id not in @RemovedIds
                        if row[options.parentColumn] and prev isnt row[options.parentColumn]
                            @Rows.push new RojobaCo.GridParentRow this, row, options
                            
                        @Rows.push new RojobaCo.GridRow this, row, options
                        prev = row[options.parentColumn]
            else
                for row in data.rows
                    if row.id not in @RemovedIds
                        @Rows.push new RojobaCo.GridRow this, row, options 

        if @MultiSelectColumn then @MultiSelectColumn.render @Rows
        if @ActionColumn then @ActionColumn.render @Rows

        for frozenColumn in @FrozenColumns
            frozenColumn.render @Rows

        if @Rows.length > 0
            firstRow = new RojobaCo.GridFirstRow this, options
            firstRow.render @TableElement
        
        if not options.edit and @Rows.length == 0
            emptyRow = new RojobaCo.GridEmptyRow this, options
            emptyRow.render @TableElement

        for row in @Rows
            elTr = row.render()
            @TableElement.append elTr
            if row.GridCells
                gridCell.render elTr for gridCell in row.GridCells

            if options.draggableRows and not (row instanceof RojobaCo.GridGroupRow or row instanceof RojobaCo.GridParentRow) and (not options.beforeRowDrag or (options.beforeRowDrag and options.beforeRowDrag(row.Data)))
                elTr.draggable
                    axis: 'y'
                    containment: 'parent'
                    helper: 'clone'
                    start: (evt, ui) =>
                        $(evt.target).addClass 'dragged-handle'
                        return
                    stop: (evt, ui) =>
                        $(evt.target).removeClass 'dragged-handle'
                        return
            
                elTr.droppable
                    accept: '.tablegrid-row'
                    #tolerance: 'touch'
                    drop: (evt, ui) =>
                        $(evt.target).before ui.draggable
                        @.adjustSize()
                        if options.afterRowDrop                
                            droppedRowId = $(evt.target).attr 'id'
                            draggedRowId = ui.draggable.attr 'id'
                            options.afterRowDrop draggedRowId, droppedRowId
                            
                        return

        if not options.edit and @Rows.length > 0
            @GridFooter.update()

        @.adjustSize()

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
        options = @TableGrid.Options
        
        self.clearEditing()
        @CellSelected = cell

        if cell.GridColumn.Freeze
            selectedFrozenColumn = null
            for frozenColumn in @FrozenColumns
                if frozenColumn.Column.Name is cell.GridColumn.Name
                    selectedFrozenColumn = frozenColumn
                    break

            if selectedFrozenColumn
                el = $('td', $('tr', selectedFrozenColumn.TableElement).eq(cell.Element.parent().index() - 1))[0]
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
                    .appendTo selectedFrozenColumn.Detail
        else
            el = cell.Element[0]

            actionsWidth = 0
            multiselectWidth = 0
            if options.rowActions.length > 0
                lastColumn = $('td', cell.Element.parent()).last()
                actionsWidth = lastColumn[0].offsetWidth

            if options.multiselect
                firstColumn = $('td', cell.Element.parent()).first()
                multiselectWidth = firstColumn[0].offsetWidth

            scrollValue = (@Detail[0].offsetWidth - actionsWidth) - (el.offsetLeft + el.offsetWidth)

            if scrollValue < 0
                @Detail[0].scrollLeft = Math.abs(scrollValue) + actionsWidth + @Detail[0].scrollLeft
            else if @Detail[0].scrollLeft > 0
                @Detail[0].scrollLeft = el.offsetLeft - multiselectWidth

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
        if not cell.GridColumn.Readonly and not (options.canEditRow and not options.canEditRow cell.GridRow.Id)
            this.clearEditing()
            @CellEdited = cell

            applyChange = (value) =>
                canEdit = !options.beforeCellEdit

                if options.beforeCellEdit
                    canEdit = options.beforeCellEdit @CellEdited.GridRow.Id, @CellEdited.Element, @CellEdited.GridColumn.Name, @CellEdited.Value, value, @CellEdited.RowIndex, @CellEdited.ColumnIndex

                if canEdit
                    cell.Value = value
                    cell.HasValueChanged = true;                    
                    if cell.GridColumn.ValueChanged
                        cell.GridColumn.ValueChanged cell.GridRow.Data, value
                    else
                        cell.GridRow.Data[cell.GridColumn.Name] = value

                    for column, index in @ColumnHeader.GridColumns
                        if column.Readonly and column.GetValue
                            cellValue = column.GetValue cell.GridRow.Data
                            readOnlyCell = cell.GridRow.GridCells[index]
                            cell.GridRow.Data[column.Name] = cellValue
                            readOnlyCell.Element.html cellValue

                    el.innerText = value
                    cell.Element[0].innerText = value
                    
                    if options.renderCell
                        renderedValue = options.renderCell @CellEdited.GridRow.Data, @CellEdited.Element, @CellEdited.GridColumn.Name, @CellEdited.RowIndex, @CellEdited.ColumnIndex

                        if renderedValue
                            el.innerText = renderedValue
                            cell.Element[0].innerText = renderedValue

                    if @CellEdited.GridColumn.Render
                        renderedValue = @CellEdited.GridColumn.Render @CellEdited.GridRow.Data
                        if renderedValue
                            el.innerText = renderedValue
                            cell.Element[0].innerText = renderedValue

                    $(el).attr 'title', el.innerText
                    cell.Element.attr 'title', el.innerText
                    
                    @TableGrid.Edited = true

                return
                
            if cell.GridColumn.Freeze 
                selectedFrozenColumn = null
                for frozenColumn in @FrozenColumns
                    if frozenColumn.Column.Name is cell.GridColumn.Name
                        selectedFrozenColumn = frozenColumn
                        break

                if selectedFrozenColumn
                    el = $('td', $('tr', selectedFrozenColumn.TableElement).eq(cell.Element.parent().index() - 1))[0]

                    inputContainer = $('<div>')
                        .addClass 'tablegrid-cell-edit'
                        .css 'top', el.offsetTop
                        .css 'left', el.offsetLeft
                        .css 'width', el.offsetWidth
                        .css 'height', el.offsetHeight
                        .appendTo selectedFrozenColumn.Detail

                    input = cell.GridColumn.getInput cell.Value, (value) =>
                        applyChange value
                        return

                    if input
                        input.css 'height', el.offsetHeight
                            .appendTo inputContainer

                        $(':input', input)
                            .css 'height', el.offsetHeight
                            .focus()
            else
                el = cell.Element[0]

                inputContainer = $('<div>')
                    .addClass 'tablegrid-cell-edit'
                    .css 'top', el.offsetTop
                    .css 'left', el.offsetLeft
                    .css 'width', el.offsetWidth
                    .css 'height', el.offsetHeight
                    .appendTo @Detail

                input = cell.GridColumn.getInput cell.Value, (value) =>
                    applyChange value
                    ###
                    if e.shiftKey
                        switch e.keyCode
                            when KEY_CODES.TAB
                                applyChange value                            
                                this.moveLeft()
                            else 
                                return
                    else
                        switch e.keyCode
                            when KEY_CODES.ENTER
                                applyChange value
                            when KEY_CODES.TAB
                                applyChange value                            
                                this.moveRight()
                            else 
                                return
                    ###
                    return

                if input
                    input.css 'height', el.offsetHeight
                        .appendTo inputContainer

                    $(':input', input)
                        .css 'height', el.offsetHeight
                        .focus()

        return

    updateCell: (cell, value) ->
        options = @TableGrid.Options        
        el = cell.Element[0]

        el.innerText = value
        cell.Value = value
        cell.HasValueChanged = true;                    
        cell.GridRow.Data[cell.GridColumn.Name] = value
        
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

    reset: () ->
        @GridFooter.reset()        
        return

    addRow: (row) ->
        options = @TableGrid.Options
        $('.tablegrid-emptyrow', @TableGrid.View).remove()

        if @Rows.length is 0
            firstRow = new RojobaCo.GridFirstRow this, options
            firstRow.render @TableElement

        gridRow = new RojobaCo.GridRow this, row, options
        elTr = gridRow.render()
        @TableElement.append elTr
        gridCell.render elTr for gridCell in gridRow.GridCells

        @Rows.push gridRow
        @TableGrid.Data.rows.push row     
        @TableGrid.Element.val @TableGrid.Data.rows.length

        if @MultiSelectColumn
            @MultiSelectColumn.addRow gridRow

        if @ActionColumn
            @ActionColumn.addRow gridRow

        this.adjustSize()
        
        return

    updateRow: (row) ->
        options = @TableGrid.Options
        rowId = row[options.idColumn].toString()

        for gridRow, i in @Rows
            if not (gridRow instanceof RojobaCo.GridParentRow)
                if gridRow.Id.toString() == rowId
                    for key, value of row
                        #@TableGrid.Data.rows[i][key] = value
                        for column, j in @ColumnHeader.GridColumns
                            if column.Name == key
                                gridRow.Data[column.Name] = value                            
                                gridRow.GridCells[j].Value = value
                                break
                    elTr = gridRow.render()

                    afterTr = $('tr#' + gridRow.Id, @TableElement).prev()
                    $('tr#' + gridRow.Id, @TableElement).remove()

                    #if afterTr.length is 0 or afterTr.hasClass('tablegrid-firstrow')
                    #    elTr.prependTo $('tbody', @TableElement)
                    #else
                    elTr.insertAfter afterTr

                    gridCell.render elTr for gridCell in gridRow.GridCells

                    if @MultiSelectColumn
                        @MultiSelectColumn.updateRow row

                    if @ActionColumn
                        @ActionColumn.updateRow row

                    break

        this.adjustSize()
        
        return

    removeRow: (id) ->
        for gridRow, i in @Rows
            if gridRow.Id.toString() == id.toString()
                @TableGrid.Data.rows.splice i, 1
                @Rows.splice i, 1
                
                $('tr#' + gridRow.Id, @TableGrid.View).remove()
                $('tr#C_' + gridRow.Id, @TableGrid.View).remove()
                $('tr#R_' + gridRow.Id, @TableGrid.View).remove()
                $('tr#A_' + gridRow.Id, @TableGrid.View).remove()
                for frozenColumn in @FrozenColumns
                    $('tr#F_' + frozenColumn.Column.Name + '_' + gridRow.Id, @TableGrid.View).remove()
                    
                @RemovedIds.push id
                break

        if @TableGrid.Data.rows.length > 0
            @TableGrid.Element.val @TableGrid.Data.rows.length 
        else
            @TableGrid.Element.val ''
            this.render @TableGrid.Data

        this.adjustSize()
                
        return
        
    adjustSize: () ->
        $('tr.tablegrid-row, tr.tablegrid-grouprow, tr.tablegrid-parentrow, tr.tablegrid-multiselect-row, tr.tablegrid-multiselect-grouprow, tr.tablegrid-multiselect-parentrow, tr.tablegrid-action-row, tr.tablegrid-action-grouprow, tr.tablegrid-action-parentrow', @TableGrid.View).css 'height', ''
        $('div.tablegrid-multiselect-header th, div.tablegrid-action-header th', @TableGrid.View).css 'height', ''
        
        setHeaderHeight = () =>
            headerHeight = $('div.tablegrid-header', @TableGrid.View).height() - 1
            $('div.tablegrid-multiselect-header th, div.tablegrid-frozen-header th, div.tablegrid-action-header th', @TableGrid.View).css 'height', headerHeight + 'px'
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
                $('tr.tablegrid-multiselect-row, tr.tablegrid-multiselect-grouprow, tr.tablegrid-multiselect-parentrow', @TableGrid.View).eq(indx).css 'height', rowHeight + 'px'
                
            if @ActionColumn
                $('tr.tablegrid-action-row, tr.tablegrid-action-grouprow, tr.tablegrid-action-parentrow', @TableGrid.View).eq(indx).css 'height', rowHeight + 'px'

            if @FrozenColumns.length > 0
                $('tr.tablegrid-frozen-row, tr.tablegrid-frozen-grouprow, tr.tablegrid-parentrow', @TableGrid.View).eq(indx).css 'height', rowHeight + 'px'
                                
            $(tr).css 'height', rowHeight + 'px'

            return

        setTimeout () =>            
            $('tr.tablegrid-row, tr.tablegrid-grouprow', @TableGrid.View).each (indx, tr) ->
                setRowHeight indx, tr
                return

            totalWidth = 0
            for column in @ColumnHeader.GridColumns
                if column.Name isnt 'multiselect' and column.Name isnt 'action'
                    column.NewWidth = 0
                    totalWidth += parseInt column.Width

            #what about options.width?
            if totalWidth > 0 and totalWidth < @TableElement.parent().outerWidth()
                availableWidth = @TableElement.parent().outerWidth()
                if @MultiSelectColumn then availableWidth -= @MultiSelectColumn.Container.outerWidth()
                if @ActionColumn then availableWidth -= @ActionColumn.Container.outerWidth()

                for column in @ColumnHeader.GridColumns
                    if column.Name isnt 'multiselect' and column.Name isnt 'action'
                        column.NewWidth = parseInt((column.Width / totalWidth) * availableWidth)
                        
                totalWidth = @TableElement.parent().outerWidth()
                
            for column, index in @ColumnHeader.GridColumns
                td = $('td', $('tr.tablegrid-firstrow', @TableGrid.View)).eq(index)
                if column.Name == 'multiselect'
                    td.css 'width', @MultiSelectColumn.Container.outerWidth() + 'px'
                else if column.Name == 'action'
                    td.css 'width', @ActionColumn.Container.outerWidth() + 'px'
                else if column.NewWidth and column.NewWidth > 0
                    td.css 'width', column.NewWidth + 'px'
                else 
                    td.css 'width', column.Width + 'px'

            if totalWidth > 0
                @TableElement.css 'width', totalWidth + 'px'

            for frozenColumn in @FrozenColumns
                for column in @ColumnHeader.GridColumns
                    if frozenColumn.Column.Name is column.Name
                        frozenColumn.Container.css 'width', column.Width + 'px'
                        frozenColumn.Container.css 'right', @ActionColumn.Container.outerWidth() + 'px'
                        break

            $('tr.tablegrid-firstrow td', @TableGrid.View).each (indx, td) ->
                setHeaderWidth indx, td
                return

            @ColumnHeader.TableElement.css 'width', @TableElement.outerWidth() + 'px'

            setHeaderHeight()
            
            return
        , 1

        return
