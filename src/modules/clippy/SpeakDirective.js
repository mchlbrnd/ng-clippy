(function () {
    'use strict';

    var merge = require('lodash/object/merge');
    var find = require('lodash/collection/find');
    var ActionDirective = require('./ActionDirective');
    var a = 12;

    /**
     * @ngInject
     */
    module.exports = function speakDirective () {
        return merge({}, ActionDirective, {
            scope: {
                text: '='
            },
            compile: function () {
                return {
                    pre: function (scope, element, attrs, controllers) {
                        var controller = find(controllers);
                        controller.addToQueue('speak', scope.delay, scope.text);
                    }
                };
            }
        });
    };
}());