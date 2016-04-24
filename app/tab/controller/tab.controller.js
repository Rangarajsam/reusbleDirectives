angular.module('tabModule',[])
.controller('tabCtrl',['$scope',function($scope){
  $scope.welcome="Tab Page";
    $scope.popup2=false;
    $scope.showPopup2=function(){
    $scope.popup2=true;
  };
  $scope.hidePopup2=function(){
    $scope.popup2=false;
  };
  
}]);