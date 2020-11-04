RojobaCo.Router.setData 'home', (route, callback) ->
    data = {
        actions: []
        filters: []
        scheduleDays: []
        statuses: []
        routes: RojobaCo.StandingData.Routes
    }

    # data.actions.push { value: '1', text: 'Export to Excel' }
    data.actions.push { value: '3', text: 'Bulk Schedule' }
    data.actions.push { value: '6', text: 'Bulk Awaiting Schedule' }
    data.actions.push { value: '7', text: 'Bulk Awaiting Dispatch' }
    data.actions.push { value: '4', text: 'Lock' }
    data.actions.push { value: '5', text: 'Unlock' }
    data.actions.push { value: '2', text: 'Bulk Archive' }

    data.filters.push { value: 'Scheduled', text: 'Scheduled' }
    data.filters.push { value: 'Delayed Jobs', text: 'Delayed Jobs' }
    data.filters.push { value: 'Awaiting Scheduling', text: 'Awaiting Scheduling' }
    data.filters.push { value: 'Items Sent for Stripping', text: 'Items Sent for Stripping' }
    data.filters.push { value: 'Awaiting Material/Powder', text: 'Awaiting Material/Powder' }

    data.statuses.push { value: 'Awaiting Scheduling', label: 'Awaiting Scheduling' }
    data.statuses.push { value: 'Delayed Jobs', label: 'Delayed Jobs' }
    data.statuses.push { value: 'QC Passed', label: 'QC Passed' }
    data.statuses.push { value: 'Items Sent for Stripping', label: 'Items Sent for Stripping' }
    data.statuses.push { value: 'Awaiting Material/Powder', label: 'Awaiting Material/Powder' }

    data.scheduleDays.push {value: moment().format(RojobaCo.Constants.DATE_STRING_FORMAT), text: 'Today' }
    data.scheduleDays.push {value: moment().add(1, 'days').format(RojobaCo.Constants.DATE_STRING_FORMAT), text: 'Tomorrow' }
    dayBeforeYesterday = moment().add(2, 'days')
    data.scheduleDays.push {value: dayBeforeYesterday.format(RojobaCo.Constants.DATE_STRING_FORMAT), text: dayBeforeYesterday.format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT) }
    threeDaysAgo = moment().add(3, 'days')
    data.scheduleDays.push {value: threeDaysAgo.format(RojobaCo.Constants.DATE_STRING_FORMAT), text: threeDaysAgo.format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT) }

    callback data
 
    return

RojobaCo.Router.register 'home', (route)->
    processData = (response) ->
        deferred = $.Deferred()
                           
        data = {
            prevId: null
            nextId: null
            records: response.Jobs.length
            total: 1
            rows: response.Jobs
        }
        $('#productiongrid').tablegrid 'loadData', data

        deferred.resolve()
        return deferred.promise()


    selectedStatusFilter = ""
    jobToPhase = null
    $('#productiongrid').tablegrid {

        idColumn: 'JobNumber'
        multiselect: {
            hidden: (item) ->
                return item.IsLocked
        }
        footer: false
        filter: false
        edit: true
        editOnSelect: true
        parentColumn: 'JobParent'
        selectData: {
            statuses: route.data.statuses
            routes: route.data.routes
        }
        onGetData: (prevId, nextId, pageNo, pageSize, sort, filter) ->
            $('#refreshtimer').data 'lastrefresh', (new Date).getTime()
            $('#productiongrid').tablegrid 'showLoading'
            RojobaCo.BusinessCentral.getOrders(selectedStatusFilter, (response) ->
                promise = processData(response)
                promise.then () ->
                    $('.tablegrid-frozen-parentrow').on 'click', (e) ->
                        if not $(this).hasClass 'dropdown-statuselect'
                            $(this).addClass 'dropdown-statuselect'
                            statusDropdownOptions = ''
                            currentStatus = $(e.target).text()
                            for status in route.data.statuses
                                if currentStatus is status.label
                                    statusDropdownOptions += '<option selected value="'+  status.label + '">' + status.label + '</option>'
                                else
                                    statusDropdownOptions += '<option value="'+  status.label + '">' + status.label + '</option>'

                            $(e.target).addClass 'hidden'

                            dropdownSelect = $('<select>')
                                .addClass 'status-dropdown'
                                .focusout () ->
                                    $(e.target)
                                        .removeClass 'hidden'
                                    $('.dropdown-statuselect').removeClass 'dropdown-statuselect'
                                    $(this).remove()
                                    return
                                .on 'change', (evt) ->
                                    $('#productiongrid').tablegrid 'showLoading'
                                    rows = $('#productiongrid').tablegrid 'getData'
                                    jobParent = $(this).parent().attr('id').replace 'F_Status_tmp-id-', ''

                                    updatedRows = []
                                    for row in rows
                                        if row.JobParent is jobParent
                                            updatedRows.push row
                                            row.Status = this.value
                                    
                                    RojobaCo.ScheduledJob.update updatedRows, () ->
                                        $('#productiongrid').tablegrid 'refresh'
                                        return

                                    $('.dropdown-statuselect').removeClass 'dropdown-statuselect'
                                    $(e.target)
                                        .text this.value
                                        .removeClass 'hidden'
                                    return
                                .html statusDropdownOptions
                                .appendTo this

                        return
                    return
                return
            )
            return
        columnModel: [
            {
                caption: 'Job #'
                name: 'JobParent'
                width: 220
                readonly: true
                render: (item) ->
                    if item.JobCardNumber
                        jobNumber = parseInt item.JobCardNumber.substring 3
                    lineNumber = item.LineNumber.toString()
                    lineNumber = lineNumber.substring 0, lineNumber.length - 4
                    jobNumber = jobNumber + '-' + lineNumber
                    parts = item.JobNumber.split '-'
                    if parts.length > 2
                        for part,i in parts 
                            if i >= 2
                                jobNumber += '-' + parts[i]
                    
                    return jobNumber
            }
            { caption: 'Colour Code', name: 'ColourCode', width: 130, readonly: true }
            { caption: 'Colour Name', name: 'ColourName', width: 200, readonly: true } 
            {
                caption: 'Prod. Date'
                name: 'DueDate'
                width: 130
                readonly: true
                render: (item) ->
                    return moment(item.DueDate).format RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT
            }
            { caption: 'Customer', name: 'Customer', width: 150, readonly: true }
            { caption: 'Purchase Reference', name: 'ExternalDocumentNumber', width: 140, readonly: true }
            { caption: 'Job Line Item', name: 'ItemName', width: 200, readonly: true }
            { caption: 'Ext to be coated', name: 'ExtToBeCoated', dataType: 'int', width: 100, readonly: true }
            { 
                caption: 'Total m2'
                name: 'TotalM2'
                dataType: 'float'
                width: 100
                readonly: true
            }
            { caption: '# Flight Bars', name: 'NumberOfFlightBars', dataType: 'int', width: 100, readonly: true }
            
            {
                caption: 'Material Received Date'
                name: 'MaterialReceiveDate'
                width: 130
                dataType: 'date'
                render: (item) ->
                    if item.MaterialReceiveDate
                        return moment(item.MaterialReceiveDate).format RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT
                        
                    return ''
            }
            {
                caption: 'Delivery Date'
                name: 'DeliveryDate'
                width: 130
                readonly: true
                render: (item) ->
                    if item.DeliveryDate
                        return moment(item.DeliveryDate).format RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT
                        
                    return ''
            }
            {
                caption: 'Delivery Time'
                name: 'DeliveryTime'
                width: 100
                dataType: 'time'
            }
            { caption: 'Qty On Purchase', name: 'QuantityOnPurchaseOrder', width: 200, readonly: true }
            { caption: 'Qty on Sales', name: 'QuantityOnSalesOrder', width: 200, readonly: true }
            { caption: 'Qty on Component Line', name: 'QuantityOnComponentLines', width: 200, readonly: true }
            { caption: 'Status', name: 'Status', width: 150, freeze: true, readonly: true }
        ]
        afterCellEdit: (rowId, element, name, value, rowIndex, columnIndex)->
            row = $('#productiongrid').tablegrid 'getRow', rowId
            $('#productiongrid').tablegrid 'showLoading'
            RojobaCo.ScheduledJob.update row, () ->
                $('#productiongrid').tablegrid 'refresh'
                return
            return
        rowAttr: (item) ->
            styles = ''
            if item.Status is 'Scheduled'
                styles += ' job-scheduled'

            if item.PhaseReason
                styles += ' job-phased'

            if styles.length > 0
                return { 'class': styles.trim() }

            return
        rowActions: [
            {
                icon: 'pencil'
                title: 'Phase'
                caption: 'Phase'
                cssClass: 'phase'
                hidden: (item) ->
                    return item.IsLocked or item.Status is "QC Passed" or item.Status is "QA"
                onClick: (id) ->
                    window.location = '#phase/' + id
                    return
            }
            {
                icon: 'edit'
                title: 'Edit'
                caption: 'Edit'
                cssClass: 'Edit'
                hidden: (item) -> 
                    return item.IsLocked 
                onClick: (id) ->
                    window.location = '#updatejob/' + id
                    return
            }
            {
                icon: 'book'
                title: 'Archive'
                caption: 'Archive'
                cssClass: 'archive'
                hidden: (item) ->
                    return item.IsLocked or item.Status is "QC Passed" or item.Status is "QA"
                onClick: (id) ->
                    row = $('#productiongrid').tablegrid 'getRow', id
                    if !row.JobCardNumber
                        answer = confirm 'Are you sure you want to archive all Line Items of ' + id + '?'
                        if answer
                            $('#productiongrid').tablegrid 'showLoading'
                            dataRows = $('#productiongrid').tablegrid 'getData'
                            archivedJobs = []
                            for dataRow in dataRows
                                if dataRow
                                    if dataRow.JobParent and dataRow.JobParent is id
                                        dataRow.IsArchived = true
                                        archivedJobs.push dataRow
                                        
                            RojobaCo.ScheduledJob.update archivedJobs, () ->
                                $('#productiongrid').tablegrid 'refresh'
                                return

                    else
                        answer = confirm 'Are you sure you want to archive Job# ' + row.JobCardNumber + '?'
                        if answer
                            row.IsArchived = true
                            RojobaCo.ScheduledJob.update row, () ->
                                $('#productiongrid').tablegrid 'refresh'
                                return
                        
                    return
            }
        ]
    }

    $('#ScheduleDay').datetimepicker({ 
        format: 'DD MMMM YYYY', 
        ignoreReadonly: true, 
        allowInputToggle: true,
        date: new Date()
    })

    $('#action').dropdown 'setOptions', {
        menuMode: true
        onOptionSelect: (value) ->
            if value is '2'
                rowIds = $('#productiongrid').tablegrid 'getSelectedIds'
                if rowIds.length is 0
                    alert 'Please select one or more jobs to archive.'
                else
                    answer = confirm 'Are you sure you want to archive the selected jobs?'
                    if answer
                        $('#productiongrid').tablegrid 'showLoading'
                        rows = []
                        for rowId in rowIds
                            row = $('#productiongrid').tablegrid 'getRow', rowId
                            row.IsArchived = true
                            rows.push row

                        RojobaCo.ScheduledJob.update rows, () ->
                            $('#productiongrid').tablegrid 'refresh'
                            return
                        
            else if value is '3'
                rowIds = $('#productiongrid').tablegrid 'getSelectedIds'
                if rowIds.length is 0
                    alert 'Please select one or more jobs to schedule.'
                else
                    $('#ScheduleDayModalTitle').text 'Select Schedule Day'
                    $('#ScheduleDay').dropdown 'clear'
                    $('#ScheduleDayModal').modal 'show'

            else if value is '4'
                rowIds = $('#productiongrid').tablegrid 'getSelectedIds'
                if rowIds.length is 0
                    alert 'Please select one or more jobs to lock.'
                else
                    answer = confirm 'Are you sure you want to lock the selected jobs?'
                    if answer
                        $('#productiongrid').tablegrid 'showLoading'
                        rows = []
                        for rowId in rowIds
                            row = $('#productiongrid').tablegrid 'getRow', rowId
                            row.IsLocked = true
                            rows.push row
                            
                        RojobaCo.ScheduledJob.update rows, () ->
                            $('#productiongrid').tablegrid 'refresh'
                            return

            else if value is '5'
                rowIds = $('#productiongrid').tablegrid 'getSelectedIds'
                if rowIds.length is 0
                    alert 'Please select one or more jobs to unlock.'
                else
                    answer = confirm 'Are you sure you want to unlock the selected jobs?'
                    if answer
                        $('#productiongrid').tablegrid 'showLoading'
                        rows = []
                        for rowId in rowIds
                            row = $('#productiongrid').tablegrid 'getRow', rowId
                            row.IsLocked = false
                            rows.push row
                            
                        RojobaCo.ScheduledJob.update rows, () ->
                            $('#productiongrid').tablegrid 'refresh'
                            return
            else if value is '6'
                rowIds = $('#productiongrid').tablegrid 'getSelectedIds'
                if rowIds.length is 0
                    alert 'Please select one or more jobs to set as "Awaiting Scheduling".'
                else
                    answer = confirm 'Are you sure you want to set the selected jobs as "Awaiting Scheduling"?'
                    if answer
                        $('#productiongrid').tablegrid 'showLoading'
                        rows = []
                        for rowId in rowIds
                            row = $('#productiongrid').tablegrid 'getRow', rowId
                            row.Status = 'Awaiting Scheduling'
                            rows.push row
                            
                        RojobaCo.ScheduledJob.update rows, () ->
                            $('#productiongrid').tablegrid 'refresh'
                            return
            else if value is '7'
                rowIds = $('#productiongrid').tablegrid 'getSelectedIds'
                if rowIds.length is 0
                    alert 'Please select one or more jobs to set as "Awaiting Dispatch".'
                else
                    answer = confirm 'Are you sure you want to set the selected jobs as "Awaiting Dispatch"?'
                    if answer
                        $('#productiongrid').tablegrid 'showLoading'
                        rows = []
                        for rowId in rowIds
                            row = $('#productiongrid').tablegrid 'getRow', rowId
                            row.Status = 'Awaiting Dispatch'
                            rows.push row
                            
                        RojobaCo.ScheduledJob.update rows, () ->
                            $('#productiongrid').tablegrid 'refresh'
                            return
            return
    }

    $('#filter').dropdown 'setOptions', {
        onOptionSelect: (value) ->
            selectedStatusFilter = value
            $('#productiongrid').tablegrid 'refresh'
            return
    }

    $('#syncjobs').on 'click', () ->
        $('#productiongrid').tablegrid 'showLoading'
       
        uri = RojobaCo.Constants.API_URI + 'api/orders'
        $.ajax
            type: 'POST'
            url: uri
            beforeSend: (xhr) ->
                xhr.setRequestHeader 'Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY
                return
            success: () ->
                $('#productiongrid').tablegrid 'refresh'
                return
        return

    $('#ScheduleDayForm').validate
        rules:
            ScheduleDay:
                required: true
        messages:
            ScheduleDay:
                required: 'Please select a day to schedule'
        submitHandler: (form) ->
            $('#productiongrid').tablegrid 'showLoading'
            rowIds = $('#productiongrid').tablegrid 'getSelectedIds'
            data = {}
            data.JobParents = []
            for rowId in rowIds
                row = $('#productiongrid').tablegrid 'getRow', rowId
                if !data.JobParents.includes(row.JobParent)
                    data.JobParents.push row.JobParent


            data.ScheduleDate = moment($('#ScheduleDay').val()).format RojobaCo.Constants.DATE_STRING_FORMAT
            $('#ScheduleDayModal').modal 'hide'

            uri = RojobaCo.Constants.API_URI + 'api/schedulejob'
            $.ajax
                type: 'POST'
                url: uri
                data: JSON.stringify(data)
                beforeSend: (xhr) ->
                    xhr.setRequestHeader 'Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY
                    return
                success: () ->
                    alert "Jobs Scheduled Successfully!"
                    $('#productiongrid').tablegrid 'refresh'
                    return
                error: (data) ->
                    alert data.responseText
                    $('#productiongrid').tablegrid 'refresh'
                    return
            return
                
            return false

    
    
    
    return

