define(['jquery', 'underscore', 'backbone', 'paper', 'hammer', 'dat-gui'], function ($, _, Backbone, paper, hammer, GUI) {

    var pathContainer;
    var copyContainer = [];
    var gui;

    
    var PathsView = Backbone.View.extend({
        el: $('#ss-main'),
        
        initialize: function () {
            _.bindAll(this, 'render');
            
            paper.install(window);
            paper.setup('ss-canvas');
            
            this.render();
        },        
        
        render: function () {
            // Using dat.gui from Google Data Arts as GUI
            gui = new dat.GUI();
            gui.add(this, 'generatePath').name('Path').onChange(this.clearStage);
            gui.add(this, 'generateCircle').name('Circle').onChange(this.clearStage);
            gui.add(this, 'generateTriangle').name('Triangle').onChange(this.clearStage);
            
            this.$el.hammer();
        },
        
        events: {

        },
        
        generatePath: function () {
            var path = new Path();
            path.strokeColor = 'black';
            path.add(new Point(30, 75)); 
            path.add(new Point(30, 25)); 
            path.add(new Point(80, 25));
            path.add(new Point(80, 75));
            path.closed = true;
        
            // Select the path, so we can see its handles:
            path.fullySelected = true;
            
            pathContainer = path;
            
            this.generateCopies(path);
        },
        
        generateCircle: function () {
            var path = new Path.Circle(new Point(100, 70), 50);            
            path.strokeColor = 'black';        
            
            pathContainer = path;
            
            this.generateCopies(path);            
        },
        
        generateTriangle: function () {
            var path  = new Path.RegularPolygon(new Point(80, 70), 3, 50);
            path.fillColor = '#E9E9FF';
            path.seleted = true;
            
            pathContainer = path;
            
            this.generateCopies(path, {smooth: false});
        },
        
        generateCopies: function (obj, options) {
            var defaults = {
                smooth: true
            };
            
            var options = $.extend({}, defaults, options);

            // Create a copy of the path and move it 100pt to the right:
            for (var i = 1; i < 11; i++) {
                var copy = obj.clone();
                copy.fullySelected = true;
                copy.position.x += 100 * i;
            
                // Smooth the segments of the copy:
                if (options.smooth){
                    copy.smooth();
                }
                
                copyContainer.push(copy);
            }   
            
            paper.view.draw();
        },
        
        clearStage: function () {
            if (pathContainer != undefined){
                pathContainer.remove();
                
                _(copyContainer).each(function (copy) {
                    copy.remove();
                });
                
                copyContainer = [];
            }
        }

    });
    
    return PathsView;
});
