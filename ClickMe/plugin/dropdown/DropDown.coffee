class RojobaCo.DropDown extends RojobaCo.BasePlugin

    constructor: (@Element, @Options) ->
        superArg = -> @Element
        super superArg

        buttonGroup = $('<div>')
            .addClass 'btn-group b4-dropdown'
            .insertAfter @Element
        
        @Button = $('<button>')
            .addClass 'btn dropdown-toggle'
            .attr 'type', 'button'
            .attr 'data-toggle', 'dropdown'
            .text 'Please select'
            .appendTo buttonGroup

        @ClearIcon = $('<i>')
            .addClass "la la-remove clear-icon"
            .hide()
            .on 'click', (e) =>
                if $('option:disabled', @Element).length > 0 and $('option:disabled', @Element).text().length > 0
                    @Button.text $('option:disabled', @Element).text()
                else
                    @Button.text 'Please select'
                    
                @Element.val ''
                @ClearIcon.hide()
                if @Options.onOptionSelect then @Options.onOptionSelect ''

                e.stopPropagation()
                return
            .appendTo buttonGroup


        if $('option:disabled', @Element).length > 0 and $('option:disabled', @Element).text().length > 0
            @Button.text $('option:disabled', @Element).text()
            
        @Menu = $('<div>')
            .addClass 'dropdown-menu'
            .appendTo buttonGroup

        @.buildMenuItems()
            
        @Element.hide()
        
        return

    # Public methods
    destroy: () ->
        @Element.removeData 'DropDown'
        return

    setOptions: (newOptions) ->
        @Options = $.extend true, {}, @Options, newOptions
        return

    setData: (data) ->
        if data and data.length > 0
            $('option', @Element).not(':disabled').remove()
            @Menu.empty()
            for item in data
                $('<option>')
                    .attr 'value', item.value
                    .text item.text
                    .appendTo @Element

            @.buildMenuItems()

        return

    setDefault: (item) ->
        @Button.text item.text
        @Element.val item.value
        return

    buildMenuItems: () ->
        itemSelect = (option) =>
            @Element.val option.val()
            if @Options.menuMode
                if $('option:disabled', @Element).length > 0 and $('option:disabled', @Element).text().length > 0
                    @Button.text $('option:disabled', @Element).text()
                else
                    @Button.text 'Please select'
            else
                @Button.text option.text()
                @ClearIcon.show()
                                
            if @Options.onOptionSelect then @Options.onOptionSelect option.val()
            return

        $('option', @Element).each (index, element) =>
            if not $(element).attr 'hidden'
                option = $(element)
                $('<a>')
                    .addClass 'dropdown-item'
                    .attr 'href', 'javascript:void(0);'
                    .text option.text()
                    .on 'click', (e) ->
                        itemSelect option
                    .appendTo @Menu
        
            return
        return
    
    clear: () ->
        @Element.val ''
        @Button.text 'Please select'
        return
