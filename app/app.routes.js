(function(){
	'use strict';

	angular
		.module('app').
		config(routeSettings);
			
	function routeSettings($routeProvider){
		$routeProvider.when('/', {
    	templateUrl: 'view1/view1.html',
    	controller: 'View1Ctrl'
  	});
		
		$routeProvider.when('/view1', {
    	templateUrl: 'view1/view1.html',
    	controller: 'View1Ctrl'
  	});
	
		$routeProvider.when('/view2', {
    	templateUrl: 'view2/view2.html',
    	controller: 'View2Ctrl'
  	});
	
		$routeProvider.otherwise({redirectTo: '/'});
	}
})();
