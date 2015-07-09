(function () {
    'use strict';

    var merge = require('lodash/object/merge');
    var find = require('lodash/collection/find');
    var ActionDirective = require('./ActionDirective');
    var ActionPositionDirective = require('./ActionPositionDirective');

    /**
     * @ngInject
     */
    module.exports = function moveToDirective () {
        return merge({}, ActionDirective, ActionPositionDirective, {
            compile: function () {
                return {
                    pre: function (scope, element, attrs, controllers) {
                        var controller = find(controllers);
                        controller.addToQueue('moveTo', scope.delay, scope.x, scope.y);
                    }
                };
            }
        });
    };
}());
