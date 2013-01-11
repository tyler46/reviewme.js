define([
    'underscore',
    'backbone',
    'models/repository'
], function(_, Backbone, Repository) {
    var Repositories = Backbone.Collection.extend({
        // Reference to this collection's model
        model: Repository,

        url: function() {
            // when setting page parameter as 'undefined' fetches all objects at once from server.
            return 'https://api.github.com/orgs/mozilla/repos?access_token=31ba2e7935e0630d95eddfd14229c51376cee7ac&page=undefined&per_page=100'
        },

        comparator: function(repository) {
            return - new Date(repository.get('updated_at')).getTime();
        },

        // change format into jsonp
        sync: function(method, model, options) {
            options.dataType = "jsonp";
            return Backbone.sync(method, model, options);
        },

        parse: function(response) {
            return response.data;
        }
    });

    return Repositories;
});
