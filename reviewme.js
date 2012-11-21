$(function($) {
    RepositoryView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#repository-tmpl').html()),
        initialize: function() {
            this.model.on('change', this.render, this);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    Repository = Backbone.Model.extend({});
    Repositories = Backbone.Collection.extend({
        model: Repository,
        url:'https://api.github.com/orgs/mozilla/repos?access_token=31ba2e7935e0630d95eddfd14229c51376cee7ac',

        sync: function(method, model, options) {
            options.dataType = "jsonp";
            return Backbone.sync(method, model, options);
        },

        parse: function(response) {
            return response.data;
        }

    });

    window.repositories = new Repositories();

    RepositoriesView = Backbone.View.extend({
        el: '#repositories',
        initialize: function() {
            window.repositories.on('add', this.addOne, this);
            window.repositories.on('reset', this.addAll, this);
            window.repositories.on('all', this.render, this);
            window.repositories.fetch();
        },

        render: function() {
	    console.log('all')
            $('#repositories').show();
        },

        addOne: function(repository) {
	    console.log('add')
            var view = new RepositoryView({ model: repository });
            $('#repositories').append(view.render().el);
        },

        addAll: function() {
	    console.log('reset');
            $('#repositories-list').empty();
            window.repositories.each(this.addOne, this);
        }

    });

    window.repositories_view = new RepositoriesView();
});
