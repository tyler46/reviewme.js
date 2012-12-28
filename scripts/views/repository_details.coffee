define([
    'jquery'
    'underscore'
    'mustache'
    'backbone'
], ($, _, Mustache, Backbone) ->
    RepositoryDetails = Backbone.View.extend({

        template: $('#repository-item-view').html()

        render: (eventName) ->
            markup = Mustache.to_html(@template, @model.toJSON())
            $(@el).html(markup)
            return this
        }
    )
    
    return RepositoryDetails
)
