define([
    'jquery',
    'underscore',
    'backbone',
    'views/repository'
], function($, _, Backbone, RepositoryView) {
    var RepositoryListView = Backbone.View.extend({
        tagname: 'ul',
        // Number of repositories to show from the repo collection. Set it at your desire.
        limit: 20,
        initialize: function() {
            this.model.bind('reset', this.render, this);
        },

        render: function(eventName) {
            $(this.el).html("");
            _.each(this.model.first(this.limit), function(repository){
                $(this.el).append(new RepositoryView({model:repository}).render().el);
            }, this);
            return this;
        }

    });

    return RepositoryListView;
});
