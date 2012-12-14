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
            return 'https://api.github.com/orgs/mozilla/repos?access_token=31ba2e7935e0630d95eddfd14229c51376cee7ac&per_page=100'
        },

        comparator: function(repository) {
            return repository.get('name').toLowerCase();
        },
        fetchAll: function() {
            this.page = 1; // start from first page
            var self = this;
            self.fetchNew({
                success: function success(collection, response) {
                    if (response.meta.Link[0][1].rel == 'next') {
                        self.page++;
                        self.fetchNew({
                            data: {
                                page: self.page
                            },
                            success: success
                        });
                    }
                },
                error: function error(colection, xhr, options){
                    console.log('something went wrong during fetch');
                }
            });
            return this;
        },

        // fetch list without overwriting existing objects ( copied from fetch())
        // taken from stackoverflow.com/questions/8991484/backbone-js-cache-collections-and-refresh, thank you :)
        fetchNew: function(options) {
            options = options || {};
            var collection = this,
                success = options.success;

            options.success = function(resp, status, xhr) {
                _(collection.parse(resp, xhr)).each(function(item) {
                    // added this conditional block
                    if (!collection.get(item.id)) {
                        collection.add(item, {silent: true});
                    }
                });
                if (!options.silent) {
                    collection.trigger('reset', collection, options);
                }
                if (success) success(collection, resp);
            };
            return (this.sync || Backbone.sync).call(this, 'read', this, options);

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
