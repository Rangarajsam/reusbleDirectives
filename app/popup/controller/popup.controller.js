angular.module('popupModule',[])
.controller('popupCtrl',['$scope',function($scope){
  $scope.welcome="popup Page";
  $scope.popup=false;
  $scope.showPopup=function(){
    $scope.popup=true;
  };
  $scope.hidePopup=function(){
    $scope.popup=false;
  };
}]);