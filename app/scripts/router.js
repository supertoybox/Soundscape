define(['jquery', 'underscore', 'backbone', 'views/LineDrawView', 'views/PathsView'], function ($, _, Backbone, LineDrawView, PathsView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
		routes: {
            "path": "showPathsView",
            "draw": "showLineDrawView",
			"*actions" : "defaultRoute"
		}    
    });
    
    var initialize = function () {
        var appRouter = new AppRouter;

        appRouter.on("route:showPathsView", function (){
            var pathsView = new PathsView();
        });                
        
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