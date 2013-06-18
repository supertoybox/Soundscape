require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        underscore: '../components/underscore/underscore',
        backbone: '../components/backbone/backbone',
        paper: '../components/paperjs/lib/paper',
        hammer: '../components/hammerjs/dist/jquery.hammer',
        'dat-gui': 'vendor/dat.gui',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        underscore: {
            exports: '_'
        },        
        backbone: {
            deps:['underscore'],
            exports: 'Backbone'
        },
        paper: {
            exports: 'paper'
        },
        hammer: {
            deps:['jquery'],
            exports: 'jQuery.hammer'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap'], function (App, $) {
    'use strict';
    
    $(function (){
        App.initialize();
    });
});