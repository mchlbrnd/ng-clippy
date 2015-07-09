(function () {
    'use strict';

    module.exports = {
        scope: {
            delay: '='
        },
        restrict: 'E',
        require: [
            '?^clippy',
            '?^merlin',
            '?^rover',
            '?^links',
            '?^genie',
            '?^genius',
            '?^fl',
            '?^peedy',
            '?^rocky'
        ]
    };
}());