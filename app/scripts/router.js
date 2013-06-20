define(['jquery', 'underscore', 'backbone', 'views/LineDrawView', 'views/PathsView', 'views/CircleImageView'], function ($, _, Backbone, LineDrawView, PathsView, CircleImageView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
		routes: {
            "path": "showPathsView",
            "draw": "showLineDrawView",
            "qube": "showCircleImageView",
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
        
        appRouter.on("route:showCircleImageView", function (){
            var drawView = new CircleImageView();
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