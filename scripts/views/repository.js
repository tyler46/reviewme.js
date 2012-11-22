define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var RepositoryView = Backbone.View.extend({
        tagname: 'li',

        template: _.template($('#repository-list-item').html()),
        initialize: function() {
            this.model.on('change', this.render, this);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return RepositoryView;
});
