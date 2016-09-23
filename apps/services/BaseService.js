(function () {
    angular.module('vetc.services.baseService', [])
	.factory('baseService', ['$http', '$q', '$filter',
        function ($http, $q, $filter) {
            // constructor
            var baseService = function () {
            };            

            
			
            return new baseService;
        }]);
})();