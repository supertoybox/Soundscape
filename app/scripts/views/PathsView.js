define(['jquery', 'underscore', 'backbone', 'paper', 'hammer'], function ($, _, Backbone, paper, hammer) {

    var path;    
    
    var PathsView = Backbone.View.extend({
        el: $('#ss-main'),
        
        initialize: function () {
            _.bindAll(this, 'render');
            
            paper.install(window);
            paper.setup('ss-canvas');
            
            this.render();
        },        
        
        render: function () {
        var path = new Path();
        path.strokeColor = 'black';
        path.add(new Point(30, 75)); 
        path.add(new Point(30, 25)); 
        path.add(new Point(80, 25));
        path.add(new Point(80, 75));
        path.closed = true;
        
        // Select the path, so we can see its handles:
        path.fullySelected = true;
        
        // Create a copy of the path and move it 100pt to the right:
        var copy = path.clone();
        copy.fullySelected = true;
        copy.position.x += 100;
        
        // Smooth the segments of the copy:
        copy.smooth();
            
            this.$el.hammer();
        },
        
        events: {

        }

    });
    
    return PathsView;
});
