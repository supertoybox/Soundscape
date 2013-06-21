define(['jquery', 'underscore', 'backbone', 'paper', 'hammer'], function ($, _, Backbone, paper, hammer) {

    var self;
    
    var CircleImageView = Backbone.View.extend({
        el: $('#ss-main'),
        
        initialize: function () {
            self = this;
            
            _.bindAll(this, 'render');
            
            paper.install(window);
            paper.setup('ss-canvas');
            
            this.createImageFromFile();
        },        
        
        render: function (image) {
            var raster = new Raster(image);
            
            raster.size = new Size(20, 15);
            raster.visible = false;

            var gridSize = 12;

            var spacing = 1.0;

            for (var y = 0; y < raster.height; y++) {
                for(var x = 0; x < raster.width; x++) {
                    // Get the color of the pixel:
                    var color = raster.getPixel(x, y);
                                    
                    var path = new Path.Circle({
                        center: new Point(x * gridSize, y * gridSize),
                        radius: (gridSize / 2 / spacing)
                    });
                    
                    // Set the fill color of the path to the color
                    // of the pixel:
                    path.fillColor = color;
                }
            }
            
            // Move the active layer to the center of the view:
            project.activeLayer.position = view.center;
            project.activeLayer.fitBounds(view.bounds, true);
            paper.view.draw();
            
            paper.view.onFrame = this.onFrame;
            this.$el.hammer();            
        },
        
        onFrame: function () {
            for (var i = 0; i < project.activeLayer.children.length; i++) {
                var item = project.activeLayer.children[i];
                item.fillColor.hue += 1;
                
//                item.position.x += item.bounds.width / 5;
//        
//                if (item.bounds.left > 224) {
//                    item.position.x = -(item.bounds.width);
//                }
            }
        },
        
        events: {

        },
        
        createImageFromFile: function () {
            var image = document.createElement('img');
            image.onload = function () {
                self.render(image);
            };
            
            image.src = 'images/bg.jpg';
        }


    });
    
    return CircleImageView;
});
