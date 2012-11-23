define([
    'jquery',
    'underscore',
    'mustache',
    'backbone',
], function($, _, Mustache, Backbone) {
    var RepositoryDetails = Backbone.View.extend({

        template: $('#repository-item-view').html(),

        render: function (eventName) {
            var markup = Mustache.to_html(this.template, this.model.toJSON());
            $(this.el).html(markup);
            return this;
        }
    });
    
    return RepositoryDetails;
});
