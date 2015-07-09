'use strict';

var gulp = require('gulp');

module.exports = gulp.task('watch', function () {
	gulp.watch(config.paths.src.index, ['index']);
  	//gulp.watch(config.paths.src.templates, ['templates']);
  	//gulp.watch(config.paths.src.stylesGlob, ['styles']);
});
