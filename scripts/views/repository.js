define([
    'jquery',
    'underscore',
    'mustache',
    'backbone'
], function($, _, Mustache, Backbone) {
    var RepositoryView = Backbone.View.extend({
        tagname: 'li',

        template: $('#repository-list-item').html(),
        initialize: function() {
            this.model.on('change', this.render, this);
        },

        render: function() {
            var markup = Mustache.to_html(this.template, this.model.toJSON());
            this.$el.html(markup);
            return this;
        }
    });

    return RepositoryView;
});
