define(['jquery', 'underscore', 'backbone', 'paper'], function ($, _, Backbone, paper) {

    var DrawView = Backbone.View.extend({
        el: $('#ss-main'),
        
        initialize: function () {
            _.bindAll(this, 'render');
            
            paper.install(window);
            paper.setup('ss-canvas');
            
            this.render();
        },        
        
        render: function () {
            var tool = new Tool();
            var path;
            
            tool.onMouseDown = function (event) {
                console.log(event);
                path = new Path();
                path.strokeColor = 'black';
                path.add(event.point);
            }
            
            tool.onMouseDrag = function (event) {
                path.add(event.point);
            }
        },
        
        events: {
            'click': 'mouseIsDown',
        },
        
        mouseIsDown: function (evt) {
            console.log(evt);
        }        

    });
    
    return DrawView;
});


//        // Get a reference to the canvas object
//        var canvas = document.getElementById('ss-canvas');
//        // Create an empty project and a view for the canvas:
//        paper.setup(canvas);
//        // Create a Paper.js Path to draw a line into it:
//        var path = new paper.Path();
//        // Give the stroke a color
//        path.strokeColor = 'black';
//        var start = new paper.Point(100, 100);
//        // Move to start and draw a line from there
//        path.moveTo(start);
//        // Note that the plus operator on Point objects does not work
//        // in JavaScript. Instead, we need to call the add() function:
//        path.lineTo(start.add([ 200, -50 ]));
//        // Draw the view now:
//        paper.view.draw();
        
//        paper.view.onFrame = function (evt) {
//            path.rotate(3);
//        }
