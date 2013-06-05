define(['jquery', 'underscore', 'backbone', 'views/LineDrawView'], function ($, _, Backbone, LineDrawView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
		routes: {
            "draw": "showLineDrawView",
			"*actions" : "defaultRoute"
		}    
    });
    
    var initialize = function () {
        var appRouter = new AppRouter;

        appRouter.on("route:showLineDrawView", function (){
            var drawView = new LineDrawView();
        });        
        
        appRouter.on("route:defaultRoute", function (actions){
            var drawView = new LineDrawView();
        });
        
        Backbone.history.start();        
    }
    
    return {
        initialize: initialize
    }
});