class RojobaCo.ScheduledJob
    constructor: ->
        #super()
        @Title = null
        @JobCardNumber = null
        @LineNumber = null
        @JobNumber = null
        @JobParent = null
        @Customer = null
        @PurchaseReference = null
        @MaterialReceiveDate = null
        @OrderDate = null
        @CollectionTime = null
        @OrderType = null
        @DueDate = null
        @DeliveryDate = null
        @DeliveryTime = null
        @ExtToBeCoated = null
        @ItemName = null
        @ItemM2 = null
        @TotalM2 = null
        @NumberOfFlightBars = null
        @Route = null
        @ColourCode = null
        @ColourName = null
        @Status = null
        @StartOfJob = null
        @DurationOfJob = null
        @IsLocked = false
        @IsArchived = false
        @IsColourChange = false
        @IsBreak = false
        @IsManualJC = false
        @Sequence = null
        @Position = null
        @PhaseReason = null
        @RejectReason = null
        @OtherReason = null
        @IsDirty = true
        @NewExtToBeCoated = null
        @NewNumberOfFlightBars = null
        @SyncStamp = null
        @DeliveryCollection = null
        @QuantityOnPurchaseOrder = null
        @QuantityOnSalesOrder = null
        @QuantityOnComponentLines = null
        @ExternalDocumentNumber = null
        @Inventory = null
        @HasStock = null
        @TotalLineExtrusions = null
        @PowderUsage = null
        @DyeNumber = null

        return
        
    @fetchJobsByParentId: (jobParentIds, callback) ->
        jobParents = ""
        if Array.isArray(jobParentIds)
            for jobParentId in jobParentIds
                jobParents += jobParentId + ','
        else
            jobParents = jobParentIds
      
        uri = RojobaCo.Constants.API_URI + 'api/schedulejob?JobParents=' + jobParents
        $.ajax
            type: 'GET'
            url: uri
            beforeSend: (xhr) ->
                xhr.setRequestHeader 'Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY
                return
            success: (response) ->
                console.log 'Updated Successfully!'
                if callback then callback(response)
                return
        return

    @update: (jobsToUpdate, callback) ->
        data = []
        if not Array.isArray(jobsToUpdate)
            data.push jobsToUpdate
        else
            data = jobsToUpdate

        uri = RojobaCo.Constants.API_URI + 'api/schedule'
        $.ajax
            type: 'POST'
            url: uri
            data: JSON.stringify(data)
            beforeSend: (xhr) ->
                xhr.setRequestHeader 'Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY
                return
            success: (data) ->
                if not data.Success
                    alert data.ErrorMessage
                else
                    console.log 'Updated Successfully!'
                    

                if callback then callback(data)
                return
        return

    @updateManualJobCards: (manualJobCards, callback) ->
        uri = RojobaCo.Constants.API_URI + 'api/manualjobcard'
        $.ajax
            type: 'POST'
            url: uri
            data: JSON.stringify(manualJobCards)
            beforeSend: (xhr) ->
                xhr.setRequestHeader 'Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY
                return
            success: (data) ->
                if not data.Success
                    alert data.ErrorMessage
                    
                else
                    console.log 'Updated Successfully!'
                    alert 'Updated Successfully.'

                if callback then callback(data)
                return
        return

    @allocateManualJobCard: (manualJobCard, jobCard, callback) ->
        uri = RojobaCo.Constants.API_URI + 'api/manualjobcard?manualjobcard=' + manualJobCard + '&jobcard=' + jobCard
        $.ajax
            type: 'POST'
            url: uri
            beforeSend: (xhr) ->
                xhr.setRequestHeader 'Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY
                return
            success: (data) ->
                if not data.Success
                    alert data.ErrorMessage
                else
                    console.log 'Allocated Successfully!'
                    alert 'Allocated Successfully.'

                if callback then callback(data)
                return
        return

    @scheduleJobs: (data, callback) ->
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
                if callback then callback(data)
                return
            error: (data) ->
                alert data.responseText
                return
        return
        
    @getJobsScheduledForDate: (date, factoryId, callback) ->
        uri = RojobaCo.Constants.API_URI + 'api/schedulejobheader?date=' + date + '&factoryID=' + factoryId
        $.ajax
            type: 'GET'
            url: uri
            beforeSend: (xhr) ->
                xhr.setRequestHeader 'Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY
                return
            success: (data) ->
                if callback then callback(data)
                return
        return
    
    @scheduleJobMethod: (date, factoryId, method, callback) ->
        uri = RojobaCo.Constants.API_URI + 'api/schedulejob?date=' + date + '&factoryID=' + factoryId + '&method=' + method
        $.ajax
            type: 'GET'
            url: uri
            beforeSend: (xhr) ->
                xhr.setRequestHeader 'Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY
                return
            success: (data) ->
                if callback then callback(data)
                return

        return

    @createManualJobCard: (data, callback) ->
        uri = RojobaCo.Constants.API_URI + 'api/manualjobcard'
        $.ajax
            type: 'POST'
            url: uri
            data: JSON.stringify(data)
            beforeSend: (xhr) ->
                xhr.setRequestHeader 'Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY
                return
            success: (data) ->
                if callback then callback(data)
                return
        return

    @updatePosition: (jobs, callback) ->
        updateRequest = indexedDB.open RojobaCo.Constants.BWA_DB, 1
         
        updateRequest.onsuccess = (e) ->
            db = e.target.result
            tx = db.transaction RojobaCo.Constants.SCHEDULED_JOB_STORE, 'readwrite'
            store = tx.objectStore RojobaCo.Constants.SCHEDULED_JOB_STORE

            if jobs.length > 0
                i = 0
                updateJob = (i) ->
                    job = jobs[i]

                    fetchRequest = store.get job.JobNumber
                    fetchRequest.onsuccess = (e) ->
                        if e.target.result
                            store.put job
                        else
                            store.add job

                        i++
                        if i < jobs.length
                            updateJob i
                            
                        return

                    return

                updateJob i

            tx.oncomplete = () ->
                db.close()
                if callback then callback()
                return
                
            return
        
        return

    @delete: (jobToDelete, callback) ->
        deleteRequest = indexedDB.open RojobaCo.Constants.BWA_DB, 1        
         
        deleteRequest.onsuccess = (e) ->
            db = e.target.result
            tx = db.transaction RojobaCo.Constants.SCHEDULED_JOB_STORE, 'readwrite'
            store = tx.objectStore RojobaCo.Constants.SCHEDULED_JOB_STORE
            
            store.delete jobToDelete.JobNumber

            tx.oncomplete = () ->
                db.close()
                if callback then callback()
                return
                
            return
        return

   
    @updateJobsStatus: (jobNumbers, jobStatus) ->
        updateRequest = indexedDB.open RojobaCo.Constants.BWA_DB, 1        
        updateRequest.onsuccess = (e) ->
            db = e.target.result
            tx = db.transaction RojobaCo.Constants.SCHEDULED_JOB_STORE, 'readwrite'
            store = tx.objectStore RojobaCo.Constants.SCHEDULED_JOB_STORE
            for jobNumber in jobNumbers
                fetchRequest = store.get jobNumber
                fetchRequest.onsuccess = (e) ->
                    job = e.target.result
                    if job
                        job.Status = jobStatus
                        job.IsDirty = true
                        
                        store.put job
                    return

            tx.oncomplete = () ->
                db.close()
                return

            
            return
        return
        
    @createConsumptionBatch: (powderBatchRequest, callback) ->
        uri = RojobaCo.Constants.API_URI + 'api/powder'
        $.ajax
            type: 'POST'
            data: JSON.stringify(powderBatchRequest)
            url: uri
            beforeSend: (xhr) ->
                xhr.setRequestHeader 'Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY
                return
            success: (data) ->
                alert 'Batch Consumption posted Succesfully.'
                if callback then callback(data)
                return
        return 
    

    @getNextPhaseNo: (jobToCalculate, callback) ->
        fetchRequest = indexedDB.open RojobaCo.Constants.BWA_DB, 1
         
        fetchRequest.onsuccess = (e) ->
            db = e.target.result
            tx = db.transaction RojobaCo.Constants.SCHEDULED_JOB_STORE, 'readwrite'
            store = tx.objectStore RojobaCo.Constants.SCHEDULED_JOB_STORE

            all = store.getAll()

            phaseNo = 0
            all.onsuccess = (e) ->
                jobs = e.target.result
                for job in jobs
                    if job.JobCardNumber is jobToCalculate.JobCardNumber and job.LineNumber is jobToCalculate.LineNumber
                        phaseNo++

                callback(phaseNo + 1)

                tx.oncomplete = () ->
                    db.close()
                    return
                return
            return
        return

    @fetchAll: (callback) ->
        fetchRequest = indexedDB.open RojobaCo.Constants.BWA_DB, 1
         
        fetchRequest.onsuccess = (e) ->
            db = e.target.result
            tx = db.transaction RojobaCo.Constants.SCHEDULED_JOB_STORE, 'readwrite'
            store = tx.objectStore RojobaCo.Constants.SCHEDULED_JOB_STORE

            all = store.getAll()

            all.onsuccess = (e) ->
                jobs = e.target.result
                if callback then callback jobs
                
                tx.oncomplete = () ->
                    db.close()
                    return
                return
            return
        return
        
    @fetchByJob: (jobCardNumber, callback) ->
        filteredJobs = []
        fetchRequest = indexedDB.open RojobaCo.Constants.BWA_DB, 1
         
        fetchRequest.onsuccess = (e) ->
            db = e.target.result
            tx = db.transaction RojobaCo.Constants.SCHEDULED_JOB_STORE, 'readwrite'
            store = tx.objectStore RojobaCo.Constants.SCHEDULED_JOB_STORE

            all = store.getAll()

            all.onsuccess = (e) ->
                jobs = e.target.result
                if jobCardNumber && jobs
                    for job in jobs
                        if job.JobCardNumber is jobCardNumber and not job.IsArchived
                            filteredJobs.push job                            

                callback(filteredJobs)
                
                tx.oncomplete = () ->
                    db.close()
                    return
                return
            return
        return

    @fetchByJobNumber: (jobNumber, callback) ->
        filteredJobs = []
        fetchRequest = indexedDB.open RojobaCo.Constants.BWA_DB, 1
         
        fetchRequest.onsuccess = (e) ->
            db = e.target.result
            tx = db.transaction RojobaCo.Constants.SCHEDULED_JOB_STORE, 'readwrite'
            store = tx.objectStore RojobaCo.Constants.SCHEDULED_JOB_STORE

            getRequest = store.get jobNumber
            getRequest.onsuccess = (e) ->
                callback e.target.result
                return
                
            tx.oncomplete = () ->
                db.close()
                return

            return
        return
    
    @fetchByJobParent: (jobParent, callback) ->
        filteredJobs = []
        fetchRequest = indexedDB.open RojobaCo.Constants.BWA_DB, 1
         
        fetchRequest.onsuccess = (e) ->
            db = e.target.result
            tx = db.transaction RojobaCo.Constants.SCHEDULED_JOB_STORE, 'readwrite'
            store = tx.objectStore RojobaCo.Constants.SCHEDULED_JOB_STORE

            all = store.getAll()
            all.onsuccess = (e) ->
                jobs = e.target.result
                filteredJobs = []
                for job in jobs
                    if job.JobParent == jobParent
                        filteredJobs.push(job)
                        
                callback filteredJobs
                return
                
            tx.oncomplete = () ->
                db.close()
                return

            return
        return


   
    @fetchCompletedJobs: (holder, callback) ->
        uri = RojobaCo.Constants.API_URI + 'api/completedjobs'
        $.ajax
            type: 'GET'
            url: uri
            beforeSend: (xhr) ->
                xhr.setRequestHeader 'Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY
                return
            success: (data) ->
                callback(data.CompletedJobs)
                return

        return

    @postToBusinessCentral: (callback) ->
        uri = RojobaCo.Constants.API_URI + 'api/consumption'
        $.ajax
            type: 'GET'
            url: uri
            beforeSend: (xhr) ->
                xhr.setRequestHeader 'Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY
                return
            success: (data) ->
                console.log data.Message
                $('#bc-post-responsemodal-body').empty()
                for messages in data.Response
                    messageParentID = messages[0].replace(" ", "")
                    messageParent = $('<div>')
                        .text messages[0]
                        .attr 'id', messageParentID
                        .addClass 'message-parentcontainer'
                        .appendTo '#bc-post-responsemodal-body'

                    $('<i>')
                        .addClass 'la la-chevron-right pull-left'
                        .on 'click', (e) ->
                            $('[data-parentid=' + $(e.target).parent().attr('id') + ']').toggle()
                            $(e.target).toggleClass('la-chevron-right la-chevron-down')
                            return
                        .appendTo messageParent

                    for message, i in messages
                        if i != 0
                            $('<div>')
                                .text message
                                .toggle()
                                .attr 'data-parentid', messageParentID
                                .appendTo messageParent

                $('#bc-post-responsemodal').modal 'show'
                callback()
                return
            error: (data) ->
                alert 'An error has occured when attempting to post to BC.'
                return
        return
    
    @downloadJobCardPdf: (job) ->
        mainTableBody = []
        jobDetails = {}

        #Headers for the table
        mainTableBody.push([
            { text: 'Profile', fillColor: '#dbd5d5', fontSize: 8, alignment: 'left' }
            { text: 'Description', fillColor: '#dbd5d5', fontSize: 8, alignment: 'left' }
            { text: 'Length', fillColor: '#dbd5d5', fontSize: 8, alignment: 'center' }
            { text: 'Qty for full JC', fillColor: '#dbd5d5', fontSize: 8, alignment: 'center' }
            { text: 'm2', fillColor: '#dbd5d5', fontSize: 8, alignment: 'center' }
            { text: 'Qty of JC', fillColor: '#dbd5d5', fontSize: 8, alignment: 'center' }
        ])

        #Majority of the details to go in the header
        if job[0].ColourName
            jobDetails.ColourName = job[0].ColourName
        else
            jobDetails.ColourName = ""
            
        if job[0].ColourCode
            jobDetails.ColourCode = job[0].ColourCode
        else
            jobDetails.ColourCode = ""

        if job[0].Customer
            jobDetails.Customer = job[0].Customer
        else
            jobDetails.Customer = ""

        if job[0].JobParent
            jobDetails.JobParent = job[0].JobParent
        else
            jobDetails.JobParent = ""
        
        if job[0].ExternalDocumentNumber
            jobDetails.ExternalDocumentNumber = job[0].ExternalDocumentNumber
        else
            jobDetails.ExternalDocumentNumber = ""

        if jobDetails.JobParent.includes('P') or jobDetails.JobParent.includes('QC')
            jobDetails.JobHeader = 'Split Job Card ' + jobDetails.JobParent
        else
            jobDetails.JobHeader = 'Job Card ' + jobDetails.JobParent


        jobDetails.TotalJobParentExtrusions = 0
        #Values for the table
        for lineItem in job
            jobDetails.TotalJobParentExtrusions += +lineItem.ExtToBeCoated
            if not lineItem.DyeNumber
                lineItem.DyeNumber = ''
            mainTableBody.push([
                profile = { text: lineItem.DyeNumber, fontSize: 9 }
                description = { text: lineItem.ItemName, fontSize: 9 }
                length = { text: lineItem.ExtToBeCoated.toString(), alignment: 'center', fontSize: 9 }
                totalLineExtrusions = { text: lineItem.TotalLineExtrusions.toString(), alignment: 'center', fontSize: 9 }
                m2 = { text: lineItem.ItemM2.toString(), alignment: 'center', fontSize: 9 }
                qty = { text: lineItem.ExtToBeCoated.toString(), alignment: 'center', fontSize: 9 }
            ])
        
        dd = createdd(jobDetails, mainTableBody)

        #pdfMake.createPdf(dd).print()
        pdfMake.createPdf(dd).download(jobDetails.JobParent)
        return

    createdd = (jobDetails, mainTableBody) ->
        return {
            pageMargins: [30, 130, 30 , 40]
            pageOrientation: 'landscape'
            header: (currentPage, pageCount) ->
                
                if currentPage.toString() is '1'
                    return {
                        columns: [
                            {
                                width: 30
                                text: ' '
                            }
                            {
                                image: 'data:image/png;base64,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'
                                fit: [200, 100]
                            }
                            {
                                layout: 'noBorders'
                                table: {
                                    headerRows: 0
                                    widths: ['auto', '*']
                                    body: [
                                        [
                                            { text: 'Pre-Treatment Sign off: ', fontSize: 8 }
                                            { text: 'Date:____________', fontSize: 8 }
                                        ]
                                        [
                                            { text: '___________________________________________', colSpan: 2, fontSize: 10 }
                                            {} 
                                        ]
                                        [
                                            { text: 'Powder Batch:', fontSize: 8 }
                                            { text: ' ' }
                                        ]
                                        [
                                            { text: '___________________________________________', colSpan: 2, fontSize: 10 }
                                            {}
                                        ]
                                        [
                                            { text: 'Quality Controller Sign off: ', fontSize: 8 }
                                            { text: ' ' }
                                        ]
                                        [
                                            { text: '___________________________________________', colSpan: 2, fontSize: 10 }
                                            {}
                                        ]
                                    ]
                                }
                            }
                            {
                                table: {
                                    headerRows: 1
                                    widths: [ '*', '*']
                                    body: [
                                        [
                                            {
                                                text: jobDetails.JobHeader

                                                colSpan: 2
                                                fontSize: 15
                                                bold: true
                                            }
                                            {}
                                        ]
                                        [
                                            { text: 'COLOUR CODE:', fontSize: 8 }
                                            { text: jobDetails.ColourCode, fontSize: 8 }
                                        ]
                                        [
                                            { text: 'COLOUR', fontSize: 8 }
                                            { text: jobDetails.ColourName, fontSize: 8 }
                                        ]
                                        [
                                            { text: 'YOUR ORDER NO:', fontSize: 8 }
                                            { text: jobDetails.ExternalDocumentNumber, fontSize: 8 }
                                        ]
                                        [
                                            { text: 'CLIENT:', fontSize: 8 } 
                                            { text: jobDetails.Customer, fontSize: 8 }
                                        ]
                                    ]
                                }
                                layout: 'noBorders'
                            }
                        ]
                        layout: 'noBorders'
                        margin: [0, 25]
                    }
                else
                    return {
                        columns: [
                            {
                                width: 30
                                text: ' '
                            }
                            {
                                image: 'data:image/png;base64,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'
                                fit: [200, 100]
                            }
                            {
                                text: ' '
                                width: 260
                            }
                            {
                                table: {
                                    headerRows: 1
                                    widths: [ '*', '*']
                                    body: [
                                        [
                                            {text: 'Split Job Card ' + jobDetails.JobParent, colSpan: 2, fontSize: 15, bold: true}
                                            {}
                                        ]
                                        [
                                            { text: 'COLOUR CODE:', fontSize: 8 }
                                            { text: jobDetails.ColourCode, fontSize: 8 }
                                        ]
                                        [
                                            { text: 'COLOUR', fontSize: 8 }
                                            { text: jobDetails.ColourName, fontSize: 8 }
                                        ]
                                        [
                                            { text: 'YOUR ORDER NO:', fontSize: 8 }
                                            { text: jobDetails.ExternalDocumentNumber, fontSize: 8 }
                                        ]
                                        [
                                            { text: 'CLIENT:', fontSize: 8 } 
                                            { text: jobDetails.Customer, fontSize: 8 }
                                        ]
                                    ]
                                }
                                layout: 'noBorders'
                            }
                        ]
                        layout: 'noBorders'
                        margin: [0, 25]
                    }
            footer: (currentPage, pageCount) ->
                return {
                    columns: [
                        {
                            margin:[15,15,15,15]
                            text: 'Page ' + currentPage.toString() + ' of ' + pageCount
                            alignment: 'right'
                        }
                    ]
                }
            content: [
                {
                    columns: [
                        {
                            text: ' '
                        }
                    ]
                }
                {
                    table: {
                        headerRows: 1
                        widths: [ 70, '*', 45, 60, 60, 60]
                        body: mainTableBody
                    }
                    layout: {
                        hLineColor: (i, node) ->
                            '#bdb1b1'
                        vLineColor: (i, node) ->
                            '#bdb1b1'
                    }
                }
                
                {
                    columns: [
                        {
                            text: ' '
                            width: '79%'
                        }
                        {
                            margin:[0,10,0]
                            text: 'Total Qty on this Job Card: ' + jobDetails.TotalJobParentExtrusions
                            fontSize: 10
                            width: '*'
                        }
                    ]
                }
            ]
        }

    @PushPositionUpdate = (rows, callback) ->
        BWA_DB = 'bwa_db'
        SCHEDULED_JOB_STORE = 'ScheduledJob'
        openRequest = indexedDB.open(BWA_DB, 1)

        openRequest.onsuccess = (e) ->
            db = e.target.result
            tx = db.transaction(SCHEDULED_JOB_STORE, 'readwrite')
            store = tx.objectStore(SCHEDULED_JOB_STORE)
            all = store.getAll()

            all.onsuccess = (e) ->
                d = new Date();
                now = d.getTime();
                jobsToUpdate = []
                jobs = e.target.result
                rowJobNumbers = []
                for row in rows
                    rowJobNumbers.push row.JobNumber
                
                for job in jobs
                    if rowJobNumbers.includes job.JobNumber
                        job.SyncStamp = now
                        jobsToUpdate.push job
                        store.put(job)
             
                uri = RojobaCo.Constants.API_URI + 'api/schedulejobposition'
                $.ajax
                    type: 'POST'
                    url: uri
                    data: JSON.stringify(jobsToUpdate)
                    beforeSend: (xhr) ->
                        xhr.setRequestHeader 'Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY
                        return
                    success: () ->
                        alert 'Jobs positions successfully updated!'
                        return
                return
                
                
            tx.oncomplete = ->
                db.close()
                return

            return
        openRequest.onerror = (e) ->
            console.log 'worker db error!'
            console.log e
            return

        return

    sequenceJobs = (jobs, page) ->

        if page is 'home'
            multisort jobs, ['~IsLocked', 'JobParent', 'LineNumber']
            #Sequence jobs
            i = 1
            for job in jobs
                job.Sequence = i
                i++
        else if page is 'schedule'
            multisort jobs, ['~IsLocked', 'Position', 'JobParent', 'LineNumber']
            # Sequence jobs
            i = 1
            currentPosition = 1

            #Figure how to filter this to show just where Jobs.Position > 0
            for job,index in jobs
                if job.Position > 0 and job.Position 
                    if index > 0 and jobs[index - 1].JobParent != job.JobParent then ++currentPosition
                    
                    if job.Position != currentPosition
                        job.Position = currentPosition
                        job.Sequence = i
                        job.IsDirty = true
                        
                    i++
            
            #Increment by 1 so next forloop starts with its position 1 higher than current
            currentPosition++
            #Figure how to filter this to show just where Jobs.Position == 0
            for job,index in jobs
                if job.Position == 0 or !job.Position 
                    if index > 0 and jobs[index - 1].JobParent != job.JobParent then ++currentPosition

                    if job.Position != currentPosition
                        job.Position = currentPosition
                        job.Sequence = i
                        job.IsDirty = true
                        
                    i++
        else
            multisort jobs, ['~IsLocked', 'JobParent', 'LineNumber']
            #Sequence jobs
            i = 1
            for job in jobs
                job.Sequence = i
                i++


        return

    arrayMove = (arr, from, to) ->
        arr.splice to, 0, arr.splice(from, 1)[0]        
        return 
