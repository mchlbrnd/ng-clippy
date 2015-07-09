'use strict';

var fs = require('fs'),
	tasks = fs.readdirSync(__dirname + '/tasks/');

tasks.forEach(function (task) {
	require('./tasks/' + task);
});
