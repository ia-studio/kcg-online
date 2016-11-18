
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

		//sample js used
		vm.pop = function(){
			window.location.replace('query-detail.html')
			setTimeOut(function(){ },2000);
			// return true;
		};

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
		function getItemActive (actStatus,idx,colm){
			// 有效能的問題目前宣告一個變數裝這個狀態以防止持續的建立物件
			colm.forEach(function(element,index,array){
				array[index].active = vm.normalVal;
			})
			if(!actStatus){
				colm[idx].active = vm.activeVal;
			}
		}
		function gotoBottom (target) {
	      $location.hash(target);
	      $anchorScroll();
	    };
	}
})();
