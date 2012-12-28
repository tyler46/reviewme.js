define([
    'jquery'
    'underscore'
    'backbone'
    'collections/repositories'
    'models/repository'
    'views/repositories'
    'views/repository_details'
], ($, _, Backbone, Repositories, Repository, RepositoryListView, RepositoryDetailsView) ->
    AppRouter = Backbone.Router.extend({
        
        routes:
            "": "list"
            "repositories/:id": "repositoryDetails"

        list: () ->
            @repositoryList = new Repositories()
            @repositoryListView = new RepositoryListView({ model: @repositoryList })
            @repositoryList.fetchAll()
            $('#repositories').html(@repositoryListView.render().el)

        repositoryDetails: (id) ->
            @repository = @repositoryList.get(id)
            @repositoryDetailsView = new RepositoryDetailsView({ model: @repository })
            $('#repository-details').html(@repositoryDetailsView.render().el)
        
    })

    return AppRouter
)
