define([
    'jquery'
    'underscore'
    'mustache'
    'backbone'
], ($, _, Mustache, Backbone) ->
    RepositoryView = Backbone.View.extend({
        tagname: 'li'

        template: $('#repository-list-item').html()
        initialize: ->
           @model.on('change', @render, this)

        render: ->
            markup = Mustache.to_html(@template, @model.toJSON())
            this.$el.html(markup)
            return this
    })

    return RepositoryView
)
