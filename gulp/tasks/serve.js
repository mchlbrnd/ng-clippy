'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = gulp.task('serve', function () {
    return browserSync.init({
		timestamps: false,
        server: {
            baseDir: [EXAMPLE_FOLDER, BUILD_FOLDER, './node_modules']
        },
        files: config.paths.src.livereload,
        port: config.ports.serverPort,
        ui: {
            port: config.ports.livereloadPort
        }
    });
});
