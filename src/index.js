(function (angular) {
	'use strict';

	require('angular-load');

	var ClippyDirective = require('./modules/clippy/ClippyDirective');
	var GestureAtDirective = require('./modules/clippy/GestureAtDirective');
	var MoveToDirective = require('./modules/clippy/MoveToDirective');
	var PlayDirective = require('./modules/clippy/PlayDirective');
	var SpeakDirective = require('./modules/clippy/SpeakDirective');

	var ngClippy = angular.module('ngClippy', ['angularLoad'])
		.directive('clippy', ClippyDirective)
		.directive('rover', ClippyDirective)
		.directive('links', ClippyDirective)
		.directive('merlin', ClippyDirective)
		.directive('genie', ClippyDirective)
		.directive('genius', ClippyDirective)
		.directive('fl', ClippyDirective)
		.directive('peedy', ClippyDirective)
		.directive('rocky', ClippyDirective)
		.directive('gestureAt', GestureAtDirective)
		.directive('moveTo', MoveToDirective)
		.directive('play', PlayDirective)
		.directive('speak', SpeakDirective);

	if (module && module.exports) {
		module.exports = ngClippy.name;
	}
}(angular));
