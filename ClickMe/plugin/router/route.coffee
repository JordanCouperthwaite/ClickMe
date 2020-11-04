RojobaCo.Router = {
    Routes:{}
    Data: {}
}

RojobaCo.Router.setData = (action, callback) ->
    RojobaCo.Router.Data[action] = callback
    return

RojobaCo.Router.register = (action, controller) ->
    RojobaCo.Router.Routes[action] = controller
    return

RojobaCo.Router.start = (options) ->
    $(window).on 'hashchange', () ->
        hash = window.location.hash
        parts = hash.slice(1).split '/'
        action = parts[0]

        id = null
        if parts.length > 1 then id = parts[1]

        if action is '' then action = '/'
        if action is '/' and options.view then action = options.view

        route = { action: action, id: id, data: null }
        
        if options.onLoad
            if RojobaCo.Router.Data[action]
                RojobaCo.Router.Data[action] route, (data) ->
                    route.data = data
                    options.onLoad route
                    RojobaCo.Router.Routes[action] route                    
                    return
                
            else
                options.onLoad route
                RojobaCo.Router.Routes[action] route
        else
            RojobaCo.Router.Routes[action] route
        
        return 

    $(window).trigger('hashchange')
    return
