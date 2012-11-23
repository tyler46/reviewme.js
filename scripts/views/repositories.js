define([
    'jquery',
    'underscore',
    'backbone',
    'views/repository'
], function($, _, Backbone, RepositoryView) {
    var RepositoryListView = Backbone.View.extend({
        tagname: 'ul',

        initialize: function() {
            this.model.bind('reset', this.render, this);
        },

        render: function(eventName) {
            _.each(this.model.models, function(repository){
                $(this.el).append(new RepositoryView({model:repository}).render().el);
            }, this);
            return this;
        }
    });

    return RepositoryListView;
});
