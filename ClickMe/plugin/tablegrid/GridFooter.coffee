class RojobaCo.GridFooter
    constructor: (@TableGrid) ->
        @Pager = null
        @LastPage = 1

    reset: () ->
        $('.tablegrid-footer-page', @TableGrid.View).remove()
        @LastPage = 1
        
        return
    render: (element) ->
        options = @TableGrid.Options
        if !options.footer then return

        footer = $('<div>')
            .addClass 'tablegrid-footer clearfix'
            .appendTo element

        if options.hide then footer.css 'display', 'none'

        buttons = $('<div>')
            .addClass 'tablegrid-footer-buttons float-left btn-group'
            .attr 'role', 'group'
            .appendTo footer

        $('<a>')
            .attr 'href', 'javascript:void(0);'
            .attr 'title', 'Refresh all records'
            .addClass 'btn btn-default btn-secondary'
            .html '<i class="fa fa-sync"></i>'
            .on 'click', (e)=>
                @TableGrid.refresh()
                e.stopPropagation()
                return
            .appendTo buttons

        $('<a>')
            .attr 'href', 'javascript:void(0);'
            .attr 'title', 'Clear all filters'
            .addClass 'btn btn-default btn-secondary'
            .html '<i class="fa fa-filter"></i>'
            .on 'click', (e)=>
                @TableGrid.clearFilter()
                e.stopPropagation()
                return
            .appendTo buttons

        if options.footerActions.length > 0
            moreMenuId = 'moreMenuLink_' + @TableGrid.Element.attr('id')
            more =  $('<a>')
            .attr 'id', moreMenuId
            .attr 'href', 'javascript:void(0)'
            .attr 'data-toggle', 'dropdown'
            .addClass 'btn btn-secondary dropdown-toggle'
            .text 'More actions'
            .appendTo buttons

            ul = $('<div>')
                .addClass 'dropdown-menu'
                .attr 'aria-labelledby', moreMenuId
                .appendTo more

            for action in options.footerActions
                $('<a>')
                    .attr 'href', 'javascript:void(0)'
                    .attr 'title', action.title
                    .addClass 'dropdown-item'
                    .html '<i class="fa fa-' + action.icon + '" style="margin-right: 5px;"></i>' + action.caption
                    .on 'click', action.onClick
                    .appendTo ul
                    
        pagerNav = $('<nav>')
            .addClass 'tablegrid-footer-pager float-right'
            .appendTo footer

        pageSize = $('<div>')
            .addClass 'tablegrid-footer-pagesize float-left'
            .appendTo pagerNav
            
        $('<select>')
            .addClass 'form-control'
            .html '<option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option>'
            .on 'change', (e) =>
                @TableGrid.reset()
                @TableGrid.PageSize = parseInt $(e.currentTarget).val()
                @TableGrid.refresh()                
                return
            .appendTo pageSize
            
        @Pager  = $('<ul>')
            .addClass 'pagination'
            .appendTo pagerNav
            
        $('<li>')
            .addClass 'page-item disabled tablegrid-footer-previous'
            .html '<a class="page-link" href="javascript:void(0);">Previous</a>'
            .on 'click', (e)=>
                if not $(e.currentTarget).hasClass('disabled')                
                    prevPage = $('li[data-page="' + (@TableGrid.PageNo - 1) + '"]')
                    prevPage.trigger 'click'
                return
            .appendTo @Pager
            
        $('<li>')
            .addClass 'page-item tablegrid-footer-next'
            .html '<a class="page-link" href="javascript:void(0);">Next</a>'
            .on 'click', (e)=>
                if not $(e.currentTarget).hasClass('disabled')
                    nextPage = $('li[data-page="' + (@TableGrid.PageNo + 1) + '"]')
                    nextPage.trigger 'click'
                return
            .appendTo @Pager

        $('select', pageSize).val options.initialPageSize
        return

    update: () ->
        if not @TableGrid.Options.footer then return
        
        if @LastPage is 1
            $('li.tablegrid-footer-page', @Pager).remove()
            $('<li>')
                .addClass 'page-item active tablegrid-footer-page'
                .attr 'data-prevId', @TableGrid.PrevId
                .attr 'data-page', 1
                .attr 'data-nextId', @TableGrid.NextId
                .html '<a class="page-link" href="javascript:void(0);">1</a>'
                .on 'click', (e)=>
                    $('li.tablegrid-footer-page', @Pager).removeClass 'active'
                    $(e.currentTarget).addClass 'active'
                    @TableGrid.PrevId = null
                    @TableGrid.PageNo = parseInt $(e.currentTarget).attr('data-page')
                    @TableGrid.NextId = null
                    @TableGrid.refresh()
                    return
                .insertBefore $('li.tablegrid-footer-next', @Pager)

        if @TableGrid.NextId and @LastPage is @TableGrid.PageNo
            @LastPage = @TableGrid.PageNo + 1
            $('<li>')
                .addClass 'page-item tablegrid-footer-page'
                .attr 'data-prevId', @TableGrid.PrevId
                .attr 'data-page', @LastPage
                .attr 'data-nextId', @TableGrid.NextId
                .html '<a class="page-link" href="javascript:void(0);">' + @LastPage + '</a>'
                .on 'click', (e)=>
                    $('li.tablegrid-footer-page', @Pager).removeClass 'active'
                    $(e.currentTarget).addClass 'active'
                    @TableGrid.PrevId = $(e.currentTarget).attr 'data-prevId'
                    @TableGrid.PageNo = parseInt $(e.currentTarget).attr('data-page')
                    @TableGrid.NextId = $(e.currentTarget).attr 'data-nextId'
                    @TableGrid.refresh()
                    return
                .insertBefore $('li.tablegrid-footer-next', @Pager)

        if @TableGrid.PageNo is 1
            $('li.tablegrid-footer-previous', @Pager).addClass 'disabled'
        else
            $('li.tablegrid-footer-previous', @Pager).removeClass 'disabled'

        if @TableGrid.NextId
            $('li.tablegrid-footer-next', @Pager).removeClass 'disabled'
        else
            $('li.tablegrid-footer-next', @Pager).addClass 'disabled'

        return
