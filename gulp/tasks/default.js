'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = gulp.task('default', function () {
	if (release) {
		runSequence('browserify');
	} else {
		runSequence('watchify', 'watch', 'serve');
	}
});
