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
    
    
    
    $scope.hello=[
        {
            title:'tab hello 1',
            content:'content for hello 1 goes here'
        },
         {
            title:'tab hello 2',
            content:'content for hello 2 goes here'
        },
         {
            title:'tab hello 3',
            content:'content for hello 3 goes here'
        },
         {
            title:'tab hello 4',
            content:'content for hello 4 goes here'
        }
        
    ];
}]);