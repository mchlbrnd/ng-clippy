(function () {
    'use strict';

    var capitalize = require('lodash/string/capitalize');
    var slice = require('lodash/array/slice');

    /**
     * @ngInject
     */
    module.exports = function clippyDirective ($q, $timeout, angularLoad) {
        return {
            restrict: 'E',
            /**
             * @ngInject
             */
            controller: function ClippyController ($element) {
                var self = this,
                    cur = 0,
                    queue = [];

                function startAction(i) {
                    var action = queue[i];
                    if (!action) return;

                    $timeout(function () {
                        self.agent[action.name].apply(self.agent, action.params);
                    }, action.delay)
                        .then(startAction(++cur));
                }

                self.start = function () {
                    if (!self.agent) {
                        return;
                    }
                    cur = 0;
                    startAction(cur);
                };

                self.addToQueue = function (actionName, delay) {
                    queue.push({
                        name: actionName,
                        delay: delay,
                        params: slice(arguments, 2)
                    });
                };

                var agentName = capitalize($element[0].nodeName.toLowerCase());
                var promises = {
                    css: angularLoad.loadCSS('http://rawgit.com/smore-inc/clippy.js/master/build/clippy.css'),
                    script: angularLoad.loadScript('http://rawgit.com/smore-inc/clippy.js/master/build/clippy.js')
                };

                $q
                    .all(promises)
                    .then(function () {
                        clippy.load(agentName, function (agent) {
                            self.agent = agent;
                            self.agent.show();
                            self.start();
                        });
                    })
            }
        }
    };
}());
