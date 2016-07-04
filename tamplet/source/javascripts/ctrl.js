
// ilandy ng-js -ctrl
(function(){
	angular
		.module('myApp')
		.controller('myCtrl',myCtrl);
	
	function myCtrl($http){
		var vm = this; 
		vm.isActive = false;
		vm.data = {};
		$http.get('javascripts/data.json').success(function(data) {
            vm.data = data;
            //console.log(vm.data);
            vm.item = data.proType1.concat(data.proType2).concat(data.proType3).concat(data.proType4);
			vm.item1 = data.proType1;
			vm.item2 = data.proType2;
			vm.item3 = data.proType3;
			vm.item4 = data.proType4;
			vm.pType = 0;
			vm.pData = {
				"Name" : "",
				"Pic": "",
		 		"Discription": {},
		 		"OtherImg": [],
		 		"IsVisble": true,
				"GetContentIndex": 0,
			 	"GetContentClass": "col-sm-5"
			};
			vm.szData = data.szInfo;
			vm.szImg = vm.szData[0].Pic;

			vm.showSZ = showSZ;
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
