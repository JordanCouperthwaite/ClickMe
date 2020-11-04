class RojobaCo.SearchSelect extends RojobaCo.BasePlugin

    constructor: (@Element, @Options, @Url) ->
        superArg = -> @Element
        super superArg
        title = @Options.title
        selected = @Options.title
        @items = {}

        @SelectComponent = $('<div>')
            .addClass 'dropdown searchselect'
            .insertAfter @Element

        @Button = $('<button>')
            .addClass 'btn dropdown-toggle'
            .attr 'type', 'button'
            .attr 'data-toggle', 'dropdown'
            .appendTo @SelectComponent

        if @Options.selected.id and @Options.selected.id.trim().length > 0 and @Options.selected.id.trim() isnt '00000000-0000-0000-0000-000000000000' then @Element.val @Options.selected.id.trim()

        if @Options.selected.text and @Options.selected.text.toString().trim() != ''
            @ButtonText = $('<span>')
                .text @Options.selected.text.toString().trim()
                .addClass 'float-left'
                .appendTo @Button
            
            @ButtonRemoveTextIcon = $('<i>')
                .addClass "fas fa-times-circle clearinput-icon"
                .show()
                .appendTo @Button
        else
            @ButtonText = $('<span>')
                .text title
                .addClass 'float-left'
                .appendTo @Button
        
            @ButtonRemoveTextIcon = $('<i>')
                .addClass "fas fa-times-circle clearinput-icon"
                .hide()
                .appendTo @Button
        
        @DropdownMenu = $('<div>')
            .addClass 'dropdown-menu'
            .appendTo @SelectComponent

        @SearchControl = $('<div>')
            .addClass 'search-control'
            .appendTo @DropdownMenu

        @SearchControlInput = $('<input>')
            .addClass 'form-control'
            .appendTo @SearchControl

        @InnerDropdownMenu = $('<div>')
            .addClass 'inner show'
            .appendTo @DropdownMenu

        @ListContainer = $('<ul>')
            .addClass 'dropdown-menu inner show'
            .appendTo @InnerDropdownMenu

        @Element
            .appendTo @InnerDropdownMenu

        @Button
            .on 'click', () =>
                filteredItems = []
                if @Options.items and !@Button.parent('.searchselect').hasClass('show')
                    if @SearchControlInput.val().length > 2
                        for item in @Options.items
                            mappedItem = @Options.onItemMap(item)
                            if mappedItem.label.search(@SearchControlInput.val()) > -1
                                filteredItems.push item
                        
                        if @Options.onGetData
                            @items = @Options.onGetData filteredItems
                            createListItems(@items)
                        else
                            @items = filteredItems
                            createListItems(@items)
                    else
                        if @Options.onGetData
                            @items = @Options.onGetData @Options.items
                            createListItems(@items)
                        else
                            @items = @Options.items
                            createListItems(@items)
                    

                else if !@Button.parent('.searchselect').hasClass('show')
                    url = @Options.source
                    if @SearchControlInput.val().length > 2
                        url += '&query=' + @SearchControlInput.val()
                    $.ajax
                        type: 'GET'
                        url: url
                        dataType: 'json'
                        error: (jqXHR, textStatus, errorThrown) =>
                            $(@ListContainer).empty()
                            $('<span>')
                                .text 'An error was thrown when attempting to access the server'
                                .addClass 'text'
                                .appendTo @ListContainer
                    .done (data) =>
                        if @Options.onGetData
                            @items = @Options.onGetData data
                            createListItems(@items)
                        else
                            @items = data
                            createListItems(@items)
                        return
                return

        #Performs ajax call after 3 characters have been inputted
        searching = 0;
        $(@SearchControlInput).on 'keydown', (e) =>
            clearTimeout searching
            searching = setTimeout ( =>
                value = $(e.target).val()
                if value.length > 0
                    if @Options.items and @Button.parent('.searchselect').hasClass('show')
                        filteredItems = []
                        for item in @Options.items
                            mappedItem = @Options.onItemMap(item)
                            if mappedItem.label.toLowerCase().search(@SearchControlInput.val().toLowerCase()) > -1
                                filteredItems.push item
                        
                        if @Options.onGetData
                            @items = @Options.onGetData filteredItems
                            createListItems(@items)
                        else
                            @items = filteredItems
                            createListItems(@items)
                        # else
                        #     if @Options.onGetData
                        #         @items = @Options.onGetData @Options.items
                        #         createListItems(@items)
                        #     else
                        #         @items = @Options.items
                        #         createListItems(@items)
                    else
                        $(@SearchControlInput).addClass('loading')
                        $.ajax
                            type: 'GET'
                            url: @Options.source + '&query=' + @SearchControlInput.val()
                            dataType: 'json'
                            error: (jqXHR, textStatus, errorThrown) =>
                                $(@ListContainer).empty()
                                $('<span>')
                                    .text 'An error was thrown when attempting to access the server' 
                                    .addClass 'text'
                                    .appendTo @ListContainer
                                
                                $(@SearchControlInput).removeClass('loading')
                                return
                        .done (data) =>
                            items = data
                            createListItems(items)
                            $(@SearchControlInput).removeClass('loading')
                            return
                        
                else if value.length == 0
                    $.ajax
                        type: 'GET'
                        url: @Options.source
                        dataType: 'json'
                    .done (data) =>
                        items = data
                        createListItems(items)
                        return
                return
            ), 300

            return

        #Changes text back to default, hides the icon
        $(@ButtonRemoveTextIcon).on 'click', (e) =>
            @ButtonText.text title
            @Element.val ''
            @ButtonRemoveTextIcon.hide()
            if @Options.onSelectedItemClear
                @Options.onSelectedItemClear()
            e.stopPropagation()
            return

        #Creates the items for the "UL".
        createListItems = (items)=>
            $(@ListContainer).empty()
            if items.length is 0
                @ListItem = $('<li>')
                    .appendTo @ListContainer

                @Item = $('<a>')
                    .appendTo @ListItem

                $('<span>')
                    .text 'No results matched' + '"' + @SearchControlInput.val() + '"'
                    .addClass 'text'
                    .appendTo @Item
            else
                for item in items
                    mappedItem = @Options.onItemMap(item)
                    @ListItem = $('<li>')
                        .attr 'data-value', mappedItem.value
                        .text mappedItem.label 
                        .addClass 'dropdown-item'
                        .appendTo @ListContainer
                    
                #Adds on click event to the dropdown items
                $('.dropdown-item', @ListContainer).on 'click', (evt)=>
                    id = $(evt.currentTarget).data('value')
                    text = $(evt.currentTarget).text()
                    @Element.val(id)
                    @ButtonRemoveTextIcon.show()
                    @ButtonText.text(text)
                    $('.dropdown-item').removeClass 'active'
                    $(evt.currentTarget).addClass 'active'
                    #Returns the item selected if "onItemSelect"
                    if @Options.onItemSelect != null
                        @Options.onItemSelect @.getSelectedData()
                        
                    return
        return

    # Public methods
    destroy: () ->
        @Element.appendTo @SelectComponent.parent()
        @SelectComponent.remove()
        @Element.removeData 'SearchSelect'
        return

    setOptions: (newOptions) ->
        if newOptions.onItemSelect
            @Options.onItemSelect = newOptions.onItemSelect
        if newOptions.getCount
            @Options.getCount = newOptions.getCount
        if newOptions.source
            @Options.source = newOptions.source
            @.Source = newOptions.source
        if newOptions.onGetData
            @Options.onGetData = newOptions.onGetData
        if newOptions.onSelectedItemClear
            @Options.onSelectedItemClear = newOptions.onSelectedItemClear
        return

     getSelectedData: () ->
        for item in @items
            @Options.onItemMap(item).value
            if @Options.onItemMap(item).value is @Element.val() then return item
        return null
        
    setValue: (value, label) ->
        if value == ''
            @ButtonText.text @Options.title
            @Element.val value
        else
            @ButtonText.text label
            @Element.val value
        if @items.length is 0 then @items.push { id: value, text: label }
        return null
        
    typeIsArray = (value) ->
        value and
            typeof value is 'object' and
            value instanceof Array and
            typeof value.length is 'number' and
            typeof value.splice is 'function' and
            not ( value.propertyIsEnumerable 'length' )

    typeIsString = (value) ->
        value and
            typeof value is 'string' and
            value instanceof String

    typeIsFunction = (value) ->
        value and
            typeof value is 'function'
