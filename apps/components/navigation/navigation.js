(function () {
    'use strict';
    angular.module('vetc.components.navigation', ['vetc.common', 'vetc.services'])
        .directive('vetcNavigation', ['appCommon', function (appCommon) {            
            return {
                restrict: 'EA',
                replace: true,
                templateUrl: '/apps/components/navigation/navigation.html',
                controller: 'navigationController',
                link: function (scope, element, attrs, ngCtrl) {

                }
            }
        }])
        .controller('navigationController', ['$scope', 'appCommon', 'navigationService',
            function ($scope, appCommon, navigationService) {
                var vm = this;

                vm.activate = function(){

                };

                // start
                activate();
            }
        ])
})();