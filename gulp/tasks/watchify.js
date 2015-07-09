'use strict';

var gulp = require('gulp');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var browserifyShim = require('browserify-shim');
var reload = require('browser-sync').reload;

module.exports = gulp.task('watchify', function () {
	var bundler = browserify({
		cache: {}, packageCache: {}, fullPaths: true,
		debug: true,
		entries: [config.paths.src.modules]
	});

	var bundle = function () {
		return bundler
			.bundle()
			.on('error', function (error) {
				console.error(error);
			})
			.pipe(source(config.filenames.build.scripts))
			.pipe(gulp.dest(config.paths.dest.scripts))
			.pipe(reload({stream:true}));
	};

	bundler = watchify(bundler)
		.transform(browserifyShim)
		.on('update', bundle);

	return bundle();
});
