$.fn.searchselect = (options, params) ->
    args = []
    value = null
    methodCalled = false
    Array.prototype.push.apply args, arguments

    elements = this.each ->
        $this = $(@)
        select = $this.data 'SearchSelect'
        if typeof options is 'string' and select and select[options]
            args.shift()
            value = select[options].apply select, args
            methodCalled = true
        else if not select and typeof options isnt 'string' and not params
            options = $.extend true, {}, $.fn.searchselect.defaults, options
            select = new RojobaCo.SearchSelect $this, options
            $this.data 'SearchSelect', select
            methodCalled = false

        return

    return if methodCalled then value else elements

$.fn.searchselect.defaults = {
    source: null
    id: 'select'
    title: 'Please select'
    inputType: 'text'
    requestType: 'GET'
    selected: ''
    items: null
    searchable: true
    searchPlaceholder: 'Search'
    onItemSelect: null
    onItemMap: (item) ->        
        return { value: item.Name, label: item.Name }
    onGetData: null
    autoLoad: false
    onEditLoad: null
    onSelectedItemClear: null
    itemArraySelect: null
    filterItems: null
}
