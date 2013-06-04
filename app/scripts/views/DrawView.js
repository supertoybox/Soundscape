define(['jquery', 'underscore', 'backbone', 'paper', 'hammer'], function ($, _, Backbone, paper, hammer) {

    var path;    
    
    var DrawView = Backbone.View.extend({
        el: $('#ss-main'),
        
        initialize: function () {
            _.bindAll(this, 'draw', 'render');
            
            paper.install(window);
            paper.setup('ss-canvas');
            
            this.draw();
        },        
        
        draw: function (){
            path = new Path();
            path.strokeColor = 'black';
            //path.add(event.point);
            
            this.$el.hammer();                    
        },
        
        render: function (pt) {
            console.log(pt);
            path.add(pt);

//            var tool = new Tool();
            
            
//            tool.onMouseDown = function (event) {
//                console.log(event);
//                path = new Path();
//                path.strokeColor = 'black';
//                path.add(event.point);
//            }
            
//            tool.onMouseDrag = function (event) {
//                path.add(event.point);
//            }
            
            
        },
        
        events: {
            'touchstart': 'eventIsDown',
            'drag': 'eventIsDrag'
        },
        
        eventIsDown: function (evt) {
            this.draw();
            evt.preventDefault();
        },
        
        eventIsDrag: function (evt) {            
            var point = new Point(evt.gesture.center.pageX, evt.gesture.center.pageY);
            
            this.render(point);
            evt.preventDefault();
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
