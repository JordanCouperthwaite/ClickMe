#  MODAL positioning
reposition = () ->
    modal = $(this)
    dialog = modal.find '.modal-dialog'
    modal.css 'display', 'block'

    # Dividing by two centers the modal exactly, but dividing by three 
    # or four works better for larger screens.
    dialog.css 'margin-top', Math.max(0, ($(window).height() - dialog.height()) / 2)
    return

setDefaults = ->
    # AJAX
    $.ajaxSetup {
        async: true
        cache: true
        dataType: 'json'
        contentType: 'application/json'
    }

    # Reposition when the window is resized
    $(window).on 'resize', () ->
        $('.modal:visible').each reposition
        return
    
    $('a.toggle-menu').on 'click', (e)->
        $('div.app-sidebar-expanded').toggleClass 'hidden'
        return

    #FORM validation
    jQuery.validator.setDefaults {
        focusInvalid: false
        ignore: []
        highlight: (element) ->
            $(element).addClass 'errorField'            
            $(element).closest('.form-group').addClass('has-error')
            tabId = $(element).closest('.tab-pane').attr('id')
            link = $('a[data-target="#' + tabId + '"]')
            if link.has('i').length is 0
                link.append('<i class="fa fa-exclamation-circle" style="padding-left: 10px; color: #a94442;" title="There are errors on this tab"></i>')

            return
        unhighlight: (element) ->
            $(element).removeClass 'errorField'            
            $(element).closest('.form-group').removeClass('has-error')

            $('span#' + $(element).attr('aria-describedby')).remove()
            $(element).removeAttr('aria-describedby')

            elTab = $(element).closest('.tab-pane')
            if elTab.has('div.has-error').length is 0
                tabId = elTab.attr('id')
                link = $('a[data-target="#' + tabId + '"]')
                $('i', link).remove()

            return
        errorElement: 'span'
        errorClass: 'error'
        errorPlacement: (error, element) ->
            if $(element).hasClass("az-datepicker")
                error.insertAfter element.parent().parent()
            else if $(element).hasClass 'b4-select'
                error.insertAfter element.next()
            else if $(element).hasClass 'b4-timepicker'
                error.insertAfter element.parent()
            else
                error.insertAfter element
                
            return
    }
    
    #Partial Views
    Handlebars.registerPartial 'phasejob': RojobaCo.Templates["phasejob"]
    Handlebars.registerPartial 'qc-reject-input': RojobaCo.Templates["qc-reject-input"]
    
    return

bindViewDefaults = () ->
    $('div.app-sidebar-expanded').addClass 'hidden'
            
    $('input').keydown (e) ->
        if e.keyCode == 13 then $(this).closest('form').submit()

    $('form:first *:input[type!=hidden]:first').focus()

    # MODAL initialize
    $('.modal').modal { show: false }
    
    # Reposition when a modal is shown
    $('.modal').on 'show.bs.modal', reposition

    # MODAL auto-submit
    $('button[type="submit"]').on 'click', (e) ->
        if $(this).parent().hasClass 'modal-footer' then $('form', $(this).parent().prev()).submit()

        #if $(this).parent().hasClass 'form-footer' then $(this).closest('form').submit()

        return

    $('span.glyphicon-calendar').each () ->
        parent = $(this).parent()
        parent.css 'cursor', 'pointer'
            .css 'border-left', '0'
            .on 'click', () ->
                $(this).siblings('input').data('DateTimePicker').show()
                return
        return

    # PERCENTAGE
    $('.b4-percentage').autoNumeric 'init', { vMax: '100' }

    # NUMBER
    $('.b4-number').autoNumeric 'init', { aSep:'', mDec:0, vMin:'0', lZero:'keep' }

    # DECIMAL
    $('.b4-decimal').autoNumeric 'init'

    # CURRENCY
    $('.b4-currency').autoNumeric 'init', { aSep: ','}
    $('.b4-currency').each (indx) ->
        hiddenCurrency = $(this).prev()
        inputGroup = $(this).prev().prev()

        hiddenCurrency.on 'change', (e) ->
            $('span', $('button', inputGroup)).first().text $(e.target).val()
            return

        $('a', inputGroup).on 'click', (e) ->
            hiddenCurrency.val($(e.target).text()).trigger('change')
            return
        return

    # MONEY
    $('.b4-money').autoNumeric 'init', { aSep: ','}
    
    # DATETIME PICKER
    $('.b4-datetimepicker').datetimepicker { format: 'DD MMMM YYYY HH:mm', sideBySide: true, ignoreReadonly: true, allowInputToggle: true }

    # DATE PICKER
    $('.b4-datepicker').datetimepicker { format: 'DD MMMM YYYY', ignoreReadonly: true, allowInputToggle: true }

    # TIME PICKER
    $('.b4-timepicker').datetimepicker { format: 'HH:mm', ignoreReadonly: true, allowInputToggle: true }

    # MULTI-SELECT
    $('.az-multiselect').multiselect {
        includeSelectAllOption: true
        onInitialized: (select, container) ->
            container.css 'width', '100%'
            $('button', container)
                .addClass 'form-control'
                .css 'text-align', 'left'
            return
    }

    # DROP DOWN
    $('.b4-select').dropdown()

    # POPOVER
    $('[data-toggle="popover"]').popover {
        container: 'body'
        html: true
        placement: 'bottom'
    }

    # FACTORY SELECT
    $('#factory-location').searchselect {
        source: 'https://bcapi.alu.bwg.co.za/api/factories'
        itemArraySelect: (items) ->
            selectedArray = items.Factories
            return selectedArray
        onItemSelect: (item) ->
            $('#productiongrid').tablegrid 'refresh'
            $('#schedulegrid').tablegrid 'refresh'
    }
    return

$(document).ready ->
    setDefaults()

    RojobaCo.StandingData.load () ->
        RojobaCo.Router.start {
            view: 'home',
            onLoad: (route) ->
                $('div.app-content').html RojobaCo.Templates[route.action] route.data
                bindViewDefaults()
                return
        }
        return
    return

$(window).on 'load', ->
   
    return
