(function () {
    'use strict';
    angular.module('vetc.components.jumbotron', ['vetc.common', 'vetc.services'])
        .directive('vetcJumbotron', ['appCommon', function (appCommon) {            
            return {
                restrict: 'EA',
                replace: true,
                templateUrl: '/apps/components/jumbotron/jumbotron.html',
                controller: 'jumbotronController',
                link: function (scope, element, attrs, ngCtrl) {

                }
            }
        }])
        .controller('jumbotronController', ['$scope', 'appCommon', 'feedbackService',
            function ($scope, appCommon, feedbackService) {
                var vm = this;

                vm.activate = function(){

                };

                // start
                activate();
            }
        ])
})();