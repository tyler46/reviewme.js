define([
    'jquery',
    'underscore',
    'backbone',
    'collections/repositories',
    'views/repositories'
], function($, _, Backbone, Repositories, RepositoryListView) {
    var AppRouter = Backbone.Router.extend({

        routes: { 
            "": "list"
        },

        list: function(){
            this.repositoryList = new Repositories();
            this.repositoryListView = new RepositoryListView({ model: this.repositoryList });
            this.repositoryList.fetch();
            $('#repositories').html(this.repositoryListView.render().el);
        }
    });

    return AppRouter;
});


