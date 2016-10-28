(function () {
    'use strict';	
	 angular.module('vetc.controllers.homeController', []).controller('homeController', ['$scope', '$q', function($scope, $q){
		$scope.model = 'Kha Officience';
		$scope.templateUrl = '/Style%20Library/vetc/apps/views/menu.html';
		
		$scope.activate = function(){
			console.log($scope.model);
		};
		
		// start
		$scope.activate();		
	}]);	
})();
