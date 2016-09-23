(function () {
    'use strict';	
	 angular.module('vetc.controllers.menuController', []).controller('menuController', ['$scope', '$q', 'navigationService', function($scope, $q, navigationService){
		$scope.model = 'Kha Officience';
		$scope.templateUrl = '/Style%20Library/vetc/apps/views/menu.html';
		
		$scope.activate = function(){
			console.log($scope.model);
			
			navigationService.getNavigationByRestApi().then(function(result){				
				$scope.topNavigation = result;
				console.log($scope.topNavigation);
			}, function(error){
				console.log(error);
			})
		};
		
		// start
		$scope.activate();		
	}]);	
})();
