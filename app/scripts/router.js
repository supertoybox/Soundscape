define(['jquery', 'underscore', 'backbone', 'views/DrawView'], function ($, _, Backbone, DrawView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
		routes: {
            "draw": "showDrawView",
			"*actions" : "defaultRoute"
		}    
    });
    
    var initialize = function () {
        var appRouter = new AppRouter;

        appRouter.on("route:showDrawView", function (){
            var drawView = new DrawView();
        });        
        
        appRouter.on("route:defaultRoute", function (actions){
            var drawView = new DrawView();
        });
        
        Backbone.history.start();        
    }
    
    return {
        initialize: initialize
    }
});