'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

module.exports = gulp.task('browserify', function () {
	return browserify({
		entries: [config.paths.src.modules]
	})
		.transform('browserify-shim')
		.transform('browserify-ngannotate')
		.transform('uglifyify')
		.bundle()
	.on('error', function(error) {
		console.error(error);
	})
	.pipe(source(config.filenames.release.scripts))
	.pipe(gulp.dest(config.paths.dest.scripts));
});
