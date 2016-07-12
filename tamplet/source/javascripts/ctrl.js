
// ilandy ng-js -ctrl
(function(){
	angular
		.module('myApp')
		.controller('myCtrl',myCtrl,'$location', '$anchorScroll');
	
	function myCtrl($http,$location,$anchorScroll){
		var vm = this; 
		vm.isActive = false;
		vm.data = {};
		vm.caseActive = getItemActive;
		vm.itemActive;
		vm.activeVal = true;
		vm.normalVal = false;
		vm.newsActive = true;
		vm.getScrollTarget = gotoBottom;
		vm.prevActive;

		$http.get('javascripts/data.json').success(function(data) {
            vm.data = data;
			vm.case = data.case;
			vm.case1 = vm.case.case1;
			vm.case2 = vm.case.case2;
			vm.case3 = vm.case.case3;

        }).error(function(data, status, headers, config) {
            console.log('error');
        });
		function showSZ (idx){
			vm.szImg = vm.szData[idx].Pic;
		 }
		function menuActive (){
			vm.isActive = !vm.isActive;
		}
		function getItemActive (id,colm){
			// 有效能的問題目前宣告一個變數裝這個狀態以防止持續的建立物件
			// console.log(vm.prevActive);
			
			if(vm.prevActive !== id){
				colm.forEach(function(element,index,array){
					array[index].active = vm.normalVal;
					if(array[index].id === id) {
						array[index].active = vm.activeVal;
					}
				})
			} else {
				colm.forEach(function(element,index,array){
					array[index].active = vm.normalVal;
				})
			}
			vm.prevActive = id;
			// console.log("done"+vm.prevActive);


		}
		function gotoBottom (target) {
	      $location.hash(target);
	      $anchorScroll();
	    };
	}
})();
