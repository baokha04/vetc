(function () {
    'use strict';
    var app = angular.module('vetc', [
		'vetc.common',
		
		'vetc.services.baseService',
		'vetc.services.dataService',
		'vetc.services.navigationService',
		
		'vetc.controllers.menuController'
	]);	
})();