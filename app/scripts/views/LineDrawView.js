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
            path.add(pt);
        },
        
        events: {
            'touch': 'eventIsDown',
            'drag': 'eventIsDrag',
            'release': 'eventIsUp'
        },
        
        eventIsDown: function (evt) {
            this.draw();
            evt.preventDefault();
        },
        
        eventIsDrag: function (evt) {            
            var point = new Point(evt.gesture.center.pageX, evt.gesture.center.pageY);
            
            this.render(point);
            evt.preventDefault();
        },

        eventIsUp: function () {
            path.smooth();
        }        

    });
    
    return DrawView;
});
