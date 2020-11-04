RojobaCo.Router.setData 'sandbox', (route, callback) ->
    data = {
        scheduleDays: []
        statuses: []
        reasons: []
        filters: []
        yesAndNo:  RojobaCo.StandingData.YesAndNo
    }

    data.filters.push { value: 'Scheduled', text: 'Scheduled' }
    data.filters.push { value: 'Awaiting Scheduling,Awaiting Powder,Items Sent for Stripping', text: 'Awaiting Scheduling' }
    data.filters.push { value: 'Stripping - Client Request', text: 'Stripping - Client Request' }
    data.filters.push { value: 'Stripping - QCR', text: 'Stripping - QCR' }
    data.filters.push { value: 'Awaiting Punched Mat. (ATLANTIS)', text: 'Awaiting Punched Mat. (ATLANTIS)' }
    data.filters.push { value: 'Wispeco Back Order (ATLANTIS)', text: 'Wispeco Back Order (ATLANTIS)' }
    data.filters.push { value: 'Awaiting Powder', text: 'Awaiting Powder' }
    data.filters.push { value: 'Awaiting Replacement Metal', text: 'Awaiting Replacement Metal' }
    data.filters.push { value: 'On Hold', text: 'On Hold' }

    callback data

    return

RojobaCo.Router.register 'sandbox', (route) ->
    list = []
    list.push { value: "Booth1" , text: "Booth1"}
    list.push { value: "Booth2" , text: "Booth2"}
    list.push { value: "Booth3" , text: "Booth3"}
    list.push { value: "Booth4" , text: "Booth4"}
    holder = RojobaCo.Templates["b4-select"]({caption:"Filter by", name:"filter", colLabel:"col-sm-3", colInput:"col-sm-9", items:list, placeholder:'test'})

    # myFunction = ->

    #     return
    # setTimeout myFunction, 5000
    # debugger
    $('#test').after holder
    $('#filter').dropdown()
    
    return

       
     