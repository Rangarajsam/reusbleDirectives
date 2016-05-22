angular.module('tabModule',[])
.controller('tabCtrl',['$scope',function($scope){
  $scope.welcome="Tab Page";
    $scope.tabConts=[
        {
            title:'tab heading 1',
            content:'content for tab 1 goes here'
        },
         {
            title:'tab heading 2',
            content:'content for tab 2 goes here'
        },
         {
            title:'tab heading 3',
            content:'content for tab 3 goes here'
        },
         {
            title:'tab heading 4',
            content:'content for tab 4 goes here'
        }
        
    ];
  
}]);