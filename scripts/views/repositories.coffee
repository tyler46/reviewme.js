define([
    'jquery'
    'underscore'
    'backbone'
    'views/repository'
], ($, _, Backbone, RepositoryView) ->
    RepositoryListView = Backbone.View.extend({
        tagname: 'ul'
        initialize: ->
            @model.bind('reset', @render, this)

        render: (eventName) ->
            $(@el).html("")
            _.each(@model.models, (repository) ->
                $(@el).append(new RepositoryView({model:repository}).render().el)
            , this)
            return this
        
    })

    return RepositoryListView
)
