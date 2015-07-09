(function () {
    'use strict';

    var merge = require('lodash/object/merge');
    var find = require('lodash/collection/find');
    var capitalize = require('lodash/string/capitalize');
    var BaseActionDirective = require('./ActionDirective');

    /**
     * @ngInject
     */
    module.exports = function playDirective () {
        return merge({}, BaseActionDirective, {
            scope: {
                animation: '='
            },
            compile: function () {
                return {
                    pre: function (scope, element, attrs, controllers) {
                        var controller = find(controllers);
                        controller.addToQueue('play', scope.delay, capitalize(scope.animation));
                    }
                };
            }
        });
    };
}());