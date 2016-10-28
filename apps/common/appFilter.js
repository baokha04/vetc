(function () {
    'use strict';
    angular.module('vetc.filter', [])
        .factory('appFilter', ['$q', function ($q) {
            var appFilter = function () {
            }
            
            appFilter.prototype.listInstance = {                
            }

            appFilter.prototype.filter = function (array, keyword) {                
                return keyword;
            }
            
            return new appFilter;
        }])
})();
