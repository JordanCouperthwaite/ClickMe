class RojobaCo.GridColumn
    @Element: null
    
    constructor: (@TableGrid, column) ->
        @Name = column.name
        @Caption = column.caption
        @Align = column.align
        @DataType = column.dataType
        @Readonly = column.readonly
        if column.inputType then @InputType = column.inputType else @InputType = column.dataType
        @Width = column.width
        @Height = column.height
        @Render = column.render
        @GetValue = column.getValue
        @DataKey = column.dataKey
        @Freeze = column.freeze
        
        return

    destroy: () ->
        if @Element.is '[data-original-title]'
            @Element.popover 'destroy'
            
        return
    
    getInput: (value, callback) ->
        switch @InputType
            when 'select'
                return buildSelectInput(value, callback, this)
            else
                switch @DataType                    
                    when 'int'
                        return buildIntegerInput(value, callback)
                    when 'float'
                        return buildFloatInput(value, callback)
                    when 'date'
                        return buildDateInput(value, callback)
                    when 'time'
                        return buildTimeInput(value, callback)
                    when 'currency'
                        return buildCurrencyInput(value, callback, this)
                    when 'image'
                        return null
                    when 'bool'
                        return buildBooleanInput(value, callback)
                    else
                        return buildStringInput(value, callback)

        return

    render: (element) ->
        options = @TableGrid.Options

        if @Name is 'multiselect'
            @Element = $('<th>')
                .addClass 'tablegrid-column'
                .css 'width', '1px'
                .appendTo element
                
            return

        if @Name is 'action'
            @Element = $('<th>')
                .addClass 'tablegrid-column'
                .css 'width', '1px'                
                .appendTo element
                
            return
                        
        @Element = $('<th>')
            .addClass 'tablegrid-column column-header-' + @Caption.replace(' ', '').toLowerCase()
            .html '<span>' + @Caption + '</span><i class="sort-icon hidden"></i><i class="filter-icon hidden"></i>'
            .appendTo element

        if @Width then @Element.css 'width', @Width + 'px'

        if not options.filter or @DataType is 'int' or @DataType is 'float' or @DataType is 'date' or @DataType is 'currency' or @Name is 'multiselect' or @Name is 'action' then return

        filterId = @TableGrid.Element.attr('id') +  '-filter-' + @Name
        filterValueId = @TableGrid.Element.attr('id') + '-filtervalue-' + @Name

        filterDiv = $('<i>')
            .attr 'id', filterId
                .addClass 'fa fa-caret-down'
            .appendTo @Element

        @Element.on 'click', (e) =>
            $('div.tablegrid-columnfilter').each (index) ->
                if $(this).attr('id') != $(e.target).parents('div.tablegrid-columnfilter').attr('id')
                    popover = $('button', $(this)).data('bs.popover')
                    if popover and popover.tip
                        $('button', $(this)).popover 'hide'
                        # = .$tip

                return

            if !@Element.is '[data-original-title]'
                @Element.popover {
                    container: 'body'
                    title: @Caption + ' setting'
                    html: true
                    placement: 'bottom'
                    content: () =>
                        return buildFilter @TableGrid, @Element, @Name, @Caption
                }

                @Element.on 'shown.bs.popover', (e)=>
                    #popover = $(e.target).data('bs.popover').$tip
                    $('#' + filterId + '-asc').off('click').on 'click', (e) =>
                        $('i.sort-icon', @Element)
                            .removeClass 'fa-sort-alpha-up'
                            .addClass 'fa-sort-alpha-down'
                        @TableGrid.Sort[@Name] = 'ASC'
                        @TableGrid.refresh()
                        return

                    $('#' + filterId + '-desc').off('click').on 'click', (e) =>
                        $('i.sort-icon', @Element)
                            .removeClass 'fa-sort-alpha-down'
                            .addClass 'fa-sort-alpha-up'
                        @TableGrid.Sort[@Name] = 'DESC'
                        @TableGrid.refresh()
                        return

                    $('#' + filterValueId).off('keydown').on 'keydown', (e) =>
                        clearTimeout @TableGrid.searching
                        @TableGrid.searching = setTimeout (=>
                            value = $(e.target).val()
                            $('i.filter-icon', @Element)
                                .removeClass 'fa-filter'
                            delete @TableGrid.Filter[@Name]

                            if value && value.length > 0
                                $('i.filter-icon', @Element)
                                    .addClass 'fa-filter'

                                if @TableGrid.Filter[@Name] != value
                                    @TableGrid.Filter[@Name] = value

                            @TableGrid.refresh()

                            return
                        ), 300
                        return                        
                    return

                @Element.popover 'show'

            e.stopPropagation()
            return

        $(document)
            .on 'click', (e) =>
                targetDropdown = $(e.target).parents('div.tablegrid-columnfilter')
                if not ($(e.target).is(':input') and @Element.is '[aria-describedby]')
                    @Element.popover 'hide'

                return
                                
        return

    buildFilter = (tableGrid, element, name, caption) ->
        filterId = tableGrid.Element.attr('id') +  '-filter-' + name
        filterValueId = tableGrid.Element.attr('id') + '-filtervalue-' + name

        parent = $('<div>');

        menu = $('<div>')
            .appendTo parent

        $('<a>')
            .attr 'id', filterId + '-asc'
            .attr 'href', 'javascript:void(0);'
            .addClass 'dropdown-item'
            .html '<i class="fa fa-sort-alpha-down" style="margin-right: 5px;"></i>Sort ascending'
            .appendTo menu

        $('<a>')
            .attr 'id', filterId + '-desc'        
            .attr 'href', 'javascript:void(0);'
            .addClass 'dropdown-item'            
            .html '<i class="fa fa-sort-alpha-up" style="margin-right: 5px;"></i>Sort descending'
            .appendTo menu
        
        $('<div>')
            .addClass 'dropdown-divider'
            .appendTo menu

        custom = $('<div>')
            .appendTo menu

        container = $('<div>')
            .addClass 'tablegrid-columnfilter-container'
            .appendTo custom

        $('<span>')
            .text 'Filter: '
            .appendTo container
        
        input = $('<input>')
            .attr 'type', 'text'
            .attr 'id', filterValueId
            .attr 'placeholder', 'Search ' + caption
            .appendTo container
        
        return parent.html()

    buildIntegerInput = (value, callback) ->
        group = $('<div>')

        input = $('<input>')
            .attr 'type', 'text'
            .attr 'value', value
            .on 'click', (e) ->
                e.stopPropagation()
                return
            .on 'change', (e) ->
                callback input.autoNumeric 'get'
                return
            .on 'keydown', (e) ->
                callback input.autoNumeric 'get'
                return
            .appendTo group

        input.autoNumeric 'init', { aSep:'', mDec:0 }

        return group

    buildFloatInput = (value, callback) ->
        group = $('<div>')

        input = $('<input>')
            .attr 'type', 'text'
            .attr 'value', value
            .on 'click', (e) ->
                e.stopPropagation()
                return
            .on 'change', (e) ->
                callback input.autoNumeric 'get'
                return
            .on 'keydown', (e) ->
                callback input.autoNumeric 'get'
                return
            .appendTo group

        input.autoNumeric 'init', { aSep:'' }

        return group

    buildBooleanInput = (value, callback) ->
        group = $('<div>')
        boolValue = false
        if $.isNumeric value
            boolValue = value is 1
        else
            boolValue = value is 'true' or value is true
            
        input = $('<input>')
            .attr 'type', 'checkbox'
            .prop 'checked', boolValue
            .on 'click', (e) ->
                e.stopPropagation()
                return
            .on 'change', (e) ->
                callback input.is(':checked')
                return
            .on 'keydown', (e) ->
                callback input.is(':checked')
                return
            .appendTo group

        return group

    buildStringInput = (value, callback) ->
        group = $('<div>')

        $('<input>')
            .attr 'type', 'text'
            .attr 'value', value
            .on 'click', (e) ->
                e.stopPropagation()
                return
            .on 'change', (e) ->
                callback $(e.target).val()
                return
            .on 'keydown', (e) ->
                callback $(e.target).val()
                return
            .appendTo group

        return group

    buildSelectInput = (value, callback, self) ->
        group = $('<div>')

        input = $('<select>')
            .on 'click', (e) ->
                e.stopPropagation()
                return
            .on 'change', (e) ->
                callback $(e.target).val()
                return
            .on 'keydown', (e) ->
                callback $(e.target).val()
                return
            .appendTo group


        input.append '<option value="" disabled selected hidden>Please select option</option>'
        if self.TableGrid.Options.selectData
            for item in self.TableGrid.Options.selectData[self.DataKey]
                input.append '<option value="' + item.value + '">' + item.label + '</option>'

        input.val value

        return group

    buildDateInput = (value, callback) ->
        group = $('<div>')
            .addClass 'input-group'

        input = $('<input>')
            .attr 'type', 'text'
            .attr 'value', value
            .on 'click', (e) ->
                e.stopPropagation()
                return
            .appendTo group

        $('<span>')
            .addClass 'input-group-addon'
            .html '<span class="glyphicon glyphicon-calendar"></span>'
            .appendTo group

        input.datetimepicker { format: 'YYYY-MM-DD', ignoreReadonly: true, allowInputToggle: true }
        input.on 'dp.change', (e) ->
            callback $(e.target).val()
            return

        return group

    buildTimeInput = (value, callback) ->
        group = $('<div>')
            .addClass 'input-group'

        input = $('<input>')
            .attr 'type', 'text'
            .attr 'value', value
            .on 'click', (e) ->
                e.stopPropagation()
                return
            .appendTo group

        $('<span>')
            .addClass 'input-group-addon'
            .html '<span class="glyphicon glyphicon-calendar"></span>'
            .appendTo group

        input.datetimepicker { format: 'HH:mm', ignoreReadonly: true, allowInputToggle: true }
        input.on 'dp.change', (e) ->
            callback $(e.target).val()
            return

        return group

    buildCurrencyInput = (value, callback, items) ->
        amount = 0
        currency = ''
        if items.length > 0
            currency = items[0].value

        parts = value.split(' ')
        if parts.length > 1
            amount = parseFloat parts[0]
            currency = parts[1]

        group = $('<div>')
            .addClass 'input-group'

        btnGroup = $('<div>')
            .addClass 'input-group-btn'
            .appendTo group

        $('<button>')
            .attr 'type', 'button'
            .attr 'data-toggle', 'dropdown'
            .attr 'aria-haspopup', 'true'
            .attr 'aria-expanded', 'false'
            .addClass 'btn btn-default dropdown-toggle'
            .html '<span>GBP</span>&nbsp;<span class="caret"></span>'
            .appendTo btnGroup

        ul = $('<ul>')
            .addClass 'dropdown-menu'
            .appendTo btnGroup

        for item in items
            $('<li>')
                .html '<a href="javascript:void(0);">' + item.value + '</a>'
                .appendTo ul

        input = $('<input>')
            .attr 'type', 'text'
            .attr 'value', amount
            .on 'click', (e) ->
                e.stopPropagation()
                return
            .on 'change', (e) ->
                callback input.autoNumeric('get') + ' ' + $('span', $('button', group)).first().text()
                return
            .on 'keydown', (e) ->
                callback input.autoNumeric('get') + ' ' + $('span', $('button', group)).first().text()
                return
            .appendTo group

        $('span', $('button', group)).first().text currency

        $('<span>')
            .addClass 'input-group-addon'
            .text '.00'
            .appendTo group

        input.autoNumeric 'init', { aSep: ','}

        $('a', ul).on 'click', (e) ->
            $('span', $('button', group)).first().text $(e.target).text()
            callback input.autoNumeric('get') + ' ' + $(e.target).text()
            return

        return group

    buildColumnFilter = (tableGrid, caption, name, dataType) ->
        if dataType == 'number'
            return buildNumberFilter tableGrid.Options, caption, name
        else if dataType == 'date'
            return buildDateFilter tableGrid.Options, caption, name
        else if dataType == 'bool'
            return buildBoolFilter tableGrid.Options, caption, name
        else if dataType == 'set'
            return buildSetFilter tableGrid.Options, caption, name
        else
            return buildTextFilter tableGrid.Options, caption, name

    bindColumnFilter = (popover, tableGrid, name, dataType) ->
        if dataType == 'number'
            bindNumberFilter tableGrid, name
        else if dataType == 'date'
            bindDateFilter tableGrid, name
        else if dataType == 'bool'
            bindBoolFilter tableGrid, name
        else if dataType == 'set'
            bindSetFilter popover, tableGrid, name
        else
            bindTextFilter tableGrid, name

        return

    buildTextFilter = (options, caption, name) ->
        container = $('<div>')
        $('<span>')
            .text 'Filter: '
            .appendTo container
        
        input = $('<input>')
            .attr 'type', 'text'
            .attr 'id', name + 'Filter'
            .attr 'placeholder', 'Search ' + caption
            .appendTo container

        if options.postData.Filter.hasOwnProperty(name)
            input.attr 'value', options.postData.Filter[name]

        return container[0].outerHTML

    buildNumberFilter = (options, caption, name) ->
        container = $('<div>')
        $('<span>')
            .text 'number filter not available'
            .appendTo container
        return container[0].outerHTML

    buildDateFilter = (options, caption, name) ->
        container = $('<div>')
        $('<span>')
            .text 'date filter not available'
            .appendTo container
        return container[0].outerHTML

    buildBoolFilter = (options, caption, name) ->
        container = $('<div>')
        if options.postData.Filter.hasOwnProperty(name)
            if options.postData.Filter[name] == true
                addCheckbox container, 'Yes', 'SelectYes_' + name, true
                addCheckbox container, 'No', 'SelectNo_' + name, false
            else if options.postData.Filter[name] == false
                addCheckbox container, 'Yes', 'SelectYes_' + name, false
                addCheckbox container, 'No', 'SelectNo_' + name, true
            else
                addCheckbox container, 'Yes', 'SelectYes_' + name, true
                addCheckbox container, 'No', 'SelectNo_' + name, true
        else
            addCheckbox container, 'Yes', 'SelectYes_' + name, true
            addCheckbox container, 'No', 'SelectNo_' + name, true

        return container[0].outerHTML

    buildSetFilter = (options, caption, name) ->
        container = $('<div>')
        addCheckbox container, 'Select All', 'SelectAll_' + name, '', true
        addDivider container
        
        for set in options.Sets
            if set.Name == name
                foundSet = set
                break

        if foundSet
            itemContainer = $('<div>')
                .css 'height', '200px'
                .css 'overflow-x', 'auto'
                .appendTo container
            for item in foundSet.Items
                addCheckbox itemContainer, item.Text, name + '_' + item.Value, 'tablegrid-filter-checkbox', item.Selected

        return container[0].outerHTML

    bindTextFilter = (tableGrid, name) ->
        $('#' + name + 'Filter')
            .focus()
            .on 'keydown', (e) ->
                clearTimeout tableGrid.searching
                tableGrid.searching = setTimeout (->
                    value = $(e.target).val()
                    if tableGrid.Options.postData.Filter[name] != value
                        tableGrid.Options.postData.Filter[name] = value
                        tableGrid.update()
                    return
                ), 300
                return
        return

    bindNumberFilter = (tableGrid, name) ->
        return

    bindDateFilter = (tableGrid, name) ->
        return

    bindBoolFilter = (tableGrid, name) ->
        triggerFilter = (tableGrid, name) ->
            selectYes = $('#SelectYes_' + name).is ':checked'
            selectNo = $('#SelectNo_' + name).is ':checked'
            
            if (selectYes && !selectNo)
                tableGrid.Options.postData.Filter[name] = true
            else if (selectNo && !selectYes)
                tableGrid.Options.postData.Filter[name] = false
            else
                tableGrid.Options.postData.Filter[name] = null

            tableGrid.update()

        $('#SelectYes_' + name).on 'change', ()->
            triggerFilter tableGrid, name
        
        $('#SelectNo_' + name).on 'change', ()=>
            triggerFilter tableGrid, name

        return

    bindSetFilter = (popover, tableGrid, name) ->
        for set in tableGrid.Options.Sets
            if set.Name == name
                foundSet = set
                break

        if foundSet
            $('.tablegrid-filter-checkbox', popover)
                .on 'change', (e) ->
                    for item in foundSet.Items
                        if name + '_' + item.Value == $(e.target).attr 'id'
                            item.Selected = $(e.target).is ':checked'
                            break

                    clearTimeout tableGrid.searching
                    tableGrid.searching = setTimeout (-> 
                        value = ''
                        for item in foundSet.Items
                            if item.Selected 
                                if value.length > 0 then value += ','
                                value += item.Value

                        tableGrid.Options.postData.Filter[name] = value
                        tableGrid.update()
                    ), 300
                    return
        return

    addCheckbox = (container, caption, name, cssClass, checked) ->
        item = $('<div>')
            .css 'margin-right', '10px'
            .css 'white-space', 'nowrap'
            .appendTo container

        box = $('<input>')
            .attr 'type', 'checkbox'
            .attr 'id', name
            .attr 'name', name
            .attr 'class', cssClass
            .appendTo item

        if checked then box.attr 'checked', 'true'

        $('<label>')
            .attr 'for', name
            .css 'cursor', 'pointer'
            .text caption
            .appendTo item

        return

    addDivider = (container) ->
        item = $('<div>')
            .css 'margin-bottom', '5px'
            .css 'border-bottom', '1px solid #ddd'
            .appendTo container

        return
