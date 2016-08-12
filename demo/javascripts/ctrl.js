
// ilandy ng-js -ctrl
(function(){
	angular
		.module('myApp')
		.controller('myCtrl',myCtrl);
	function myCtrl($http){
		var vm = this; 
		vm.caseActive = false;


		vm.isActive = false;
		vm.data = {};
		vm.caseActive = menuActive;
		vm.itemActive;
		vm.activeVal = true;
		vm.normalVal = false;
		vm.newsActive = true;
		vm.prevActive;

		//sample js used
		vm.pop = function (){
			setTimeOut(function(){
				window.location.assign("query-detail.html");
			},5000);
			vm.pop =  true;
		};

		$http.get('javascripts/data.json').success(function(data) {
            vm.data = data;
           
			vm.menuActive = menuActive;
        }).error(function(data, status, headers, config) {
            console.log('error');
        });
		function showSZ (idx){
			vm.szImg = vm.szData[idx].Pic;
		 }
		function menuActive (){
			vm.isActive = !vm.isActive;
		}
	}
})();
