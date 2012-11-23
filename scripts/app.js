// Require.js allows us to configure shortcut alias
require.config({
    baseUrl: "./scripts",
    // the shim config allows us to configure dependencies for 
    // scripts that to do not call define() to register a module.
    // Underscore and Backbone are not compatible with AMD.
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'mustache': {
            exports: 'mustache'
        }
    },

    paths: {
        underscore: "lib/underscore",
        jquery: "lib/jquery-1.8.1.min",
        mustache: "lib/mustache",
        backbone: "lib/backbone",
    },
});

require([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, AppRouter) {
    return $(document).ready(function() {
        // Initialize routing and start Backbone.history()
        var router;
        router = new AppRouter();
        return Backbone.history.start();
    });
});

