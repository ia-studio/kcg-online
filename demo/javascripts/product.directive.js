(function(){
	angular.module('myApp')
		.directive('products', function(){
			return {
				restrict: 'E',
				scope:{
					pType: "=",
					type: "=",
					array: "="
				},
				templateUrl: 'javascripts/product.directive.html',
				link: function($scope, element, attrs){
					$scope.seeMore = seeMore;
					$scope.CheckVisble = CheckVisble;

					function seeMore(idx){
						$scope.pData = {
							"Name" : $scope.array[idx].Name,
							"Pic": $scope.array[idx].Pic,
					 		"Discription": $scope.array[idx].Discription,
					 		"OtherImg": $scope.array[idx].OtherImg,
					 		"IsVisble": true ,
			 				"GetContentIndex": Math.floor(idx / 3),
						 	"GetContentClass": function(){
						 		if($scope.array[idx].OtherImg.length !== 0){
						 			return 'col-sm-5';
						 		}else{
						 			return 'col-sm-12';
						 		}
				 			}
						};
						$scope.$parent.m.pData = $scope.pData;
					}

					function CheckVisble(clkCtrl,idx) {
						if(clkCtrl == true && $scope.pData.GetContentIndex == Math.floor(idx/3)){
							return true
						}
					}
				}
			}
		});
})();
