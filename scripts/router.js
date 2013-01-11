define([
    'jquery',
    'underscore',
    'backbone',
    'collections/repositories',
    'models/repository',
    'views/repositories',
    'views/repository_details'
], function($, _, Backbone, Repositories, Repository, RepositoryListView, RepositoryDetailsView) {
    var AppRouter = Backbone.Router.extend({

        routes: { 
            "": "list",
            "repositories/:id": "repositoryDetails"
        },

        list: function(){
            this.repositoryList = new Repositories();
            this.repositoryListView = new RepositoryListView({ model: this.repositoryList });
            this.repositoryList.fetch();
            $('#repositories').html(this.repositoryListView.render().el);
        },

        repositoryDetails: function(id) {
            this.repository = this.repositoryList.get(id);
            this.repositoryDetailsView = new RepositoryDetailsView({ model: this.repository });
            $('#repository-details').html(this.repositoryDetailsView.render().el);
        }
    });

    return AppRouter;
});


