class RojobaCo.TableGrid extends RojobaCo.BasePlugin
    constructor: (@Element, @Options) ->
        superArg = -> @Element
        super superArg
        
        @Container = $('<div>')
            .addClass 'tablegrid'
            .insertAfter @Element

        if @Options.width and @Options.width > 0
            @Container.css 'width', @Options.width + 'px'
            
        @Overlay = $('<div>')
            .addClass 'tablegrid-overlay'
            .appendTo @Container

        @Loading = $('<div>')
            .addClass 'tablegrid-loading'
            .text @Options.loadingText
            .appendTo @Container

        @View = $('<div>')
            .addClass 'tablegrid-view'
            .appendTo @Container

        @Data = { page: 1, records: 0, total: 0, rows: [] }
        @Loaded = false
        @Edited = false
        @PrevId = null
        @NextId = null
        @PageNo = 1
        @PageSize = @Options.initialPageSize
        @Sort = {}
        @Filter = {}

        if @Options.rowActions.length > 0
            readOnlyAttr = @Element.attr 'data-readonly'

        if @Options.xDimension.length > 0 and @Options.yDimension.length > 0
            @Grid = new RojobaCo.Pivot this
        else
            @Grid = new RojobaCo.Grid this
            
        #@Grid.render @Data           
        this.hideLoading()

        @Container.on 'resize', () =>
            @Grid.adjustSize()
            return

        $(window).on 'resize', () =>
            @Grid.adjustSize()
            return

    hide: () ->
        @Element.next('div').hide()
        return

    show: () ->
        @Element.next('div').show()
        return

    showLoading: ->
        @Overlay.show()
        @Loading.show()
        return

    hideLoading: ->
        @Overlay.hide()
        @Loading.hide()
        return

    loadData: (data) ->
        if not data or not data.rows
            data = { page: 1, records: 0, total: 0, rows: [] }
        
        if data.rows.length > 0
            @Element.val data.rows.length
        else 
            @Element.val ''

        @PrevId = data.prevId
        @NextId = data.nextId
        @PageNo = data.page
        @Data = data

        @Grid.render data
        this.hideLoading()
        
        if @Options.afterDataLoad
            @Options.afterDataLoad data.rows
        
        return       

    setOptions: (newOptions) ->
        @Options = $.extend true, {}, @Options, newOptions
        return

    getOption: (option) ->
        return @Options[option]

    getData: () ->
        return @Data.rows

    getSelectedIds: () ->
        items = []
        
        for gridRow in @Grid.Rows
            if gridRow instanceof RojobaCo.GridRow and gridRow.Selected then items.push gridRow.Id

        return items

    getRemovedIds: () ->
        return @Grid.RemovedIds

    getCell: (rowIndex, columnIndex) ->
        result = ''
        if rowIndex < @Grid.Rows.length
            gridRow = @Grid.Rows[rowIndex]
            if columnIndex < gridRow.GridCells.length
                gridCell = gridRow.GridCells[columnIndex]
                result = gridCell.Value
                
        return result

    updateCell: (rowIndex, columnIndex, value) ->
        if rowIndex < @Grid.Rows.length
            gridRow = @Grid.Rows[rowIndex]
            if columnIndex < gridRow.GridCells.length
                gridCell = gridRow.GridCells[columnIndex]                
                gridCell.Element.text value
                gridCell.Value = value
                gridRow.Data[gridCell.GridColumn.Name] = value

                @Grid.updateCell gridCell, value
                                
                if @Options.afterCellEdit                
                   @Options.afterCellEdit gridCell.GridRow.Id, gridCell.Element, gridCell.GridColumn.Name, gridCell.Value, gridCell.RowIndex, gridCell.ColumnIndex
                                
        return

    getRow: (rowId) ->
        result = null
        for row in @Data.rows
            if row[@Options.idColumn].toString() == rowId.toString()
                result = row
                break

        return result

    addRow: (row) ->
        if not row[@Options.idColumn] then row[@Options.idColumn] = 'tmp-id-' + $.now()

        @Grid.addRow row
        return

    updateRow: (row) ->
        @Grid.updateRow row
        return

    removeRow: (id) ->
        @Grid.removeRow id
        return

    update: () ->
        if @Grid
            @Grid.render @Data

        return
        
    sort: (columnNames) ->
        @Data.rows.sort (a, b) ->
            for columnName in columnNames
                aValue = a[columnName]
                bValue = b[columnName]
                val = 0
                if isNaN(aValue)
                    val = aValue.localeCompare bValue
                else
                    val = parseFloat(aValue) - parseFloat(bValue)

                if val isnt 0
                    return val

        this.update()

        return

    filter: (filter) ->
        @PrevId = null                
        @NextId = null
        @PageNo = 1
        @Filter = filter
        this.refresh()

        return

    adjustSize: ->
        @Grid.adjustSize()
        
        return
        
    reset: ->
        @PrevId = null                
        @NextId = null
        @PageNo = 1
        @PageSize = 10

        if @Grid
            @Grid.reset()
                    
        return
        
    refresh: ->
        if @Options.onGetData
            this.showLoading()    
            @Options.onGetData @PrevId, @NextId, @PageNo, @PageSize, @Sort, @Filter

        return

    trigger: (optionName, param)->
        if @Options[optionName]
            args = []
            Array.prototype.push.apply args, arguments
            args.shift()
            @Options[optionName].apply @Options, args

        return

    clearFilter: () ->
        @PrevId = null                
        @NextId = null
        @PageNo = 1
        @Filter = {}
        @Sort = {}
        $('i.filter-icon', @View).remove()
        $('i.sort-icon', @View).remove()
        this.refresh()

        return

    clear: () ->
        ids = []

        for gridRow in @Grid.Rows
            ids.push gridRow.Id

        for id, i in ids
            @Data.rows.splice 0, 1
            @Grid.Rows.splice 0, 1
                
            $('tr#' + id, @View).remove()
            $('tr#A_' + id, @View).remove()
            $('tr#C_' + id, @View).remove()

        if @Options.edit
            this.update()
        
        if @Data.rows.length > 0 then @Element.val @Data.rows.length else @Element.val ''

        return

    clearSelection: () ->
        $('.tablegrid-checkbox_all').prop 'checked', false
        for gridRow in @Grid.Rows
            gridRow.Selected = false
            $('#tablegrid-checkbox_' + gridRow.Id).prop 'checked', false

        return
