define([
    'underscore'
    'backbone'
    'models/repository'
], (_, Backbone, Repository) ->
    Repositories = Backbone.Collection.extend({
        # Reference to this collection's model
        model: Repository

        url: ->
            # when setting page parameter as 'undefined' fetches all objects at once from server.
            'https://api.github.com/orgs/mozilla/repos?access_token=31ba2e7935e0630d95eddfd14229c51376cee7ac&per_page=100'

        comparator: (repository) ->
            repository.get('name').toLowerCase()
        
        fetchAll: ->
            @page = 1 # start from first page
            self = this
            self.fetchNew({
                success: success(collection, response) ->
                    if (response.meta.Link[0][1].rel is 'next')
                        self.page++
                        self.fetchNew({
                            data: {
                                page: self.page
                            },
                            success: success
                        })
                error: error(colection, xhr, options) ->
                    console.log 'something went wrong during fetch'
            })
            return this

        # fetch list without overwriting existing objects ( copied from fetch())
        # taken from stackoverflow.com/questions/8991484/backbone-js-cache-collections-and-refresh, thank you :)
        fetchNew: (options) ->
            options = options or {}
            collection = this
            success = options.success

            options.success = (resp, status, xhr) ->
                _(collection.parse(resp, xhr)).each((item) ->
                    # added this conditional block
                    unless collection.get(item.id)
                        collection.add(item, {silent: true})
                )
                unless options.silent
                    collection.trigger('reset', collection, options)

                success(collection, resp) if (success) 
            return (@sync || Backbone.sync).call(this, 'read', this, options)


        # change format into jsonp
        sync: (method, model, options) ->
            options.dataType = "jsonp"
            return Backbone.sync(method, model, options)


        parse: (response) ->
            response.data

    })

    return Repositories
)
