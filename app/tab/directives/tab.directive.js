angular.module('tabModule')
.directive('tab',function(){
    
    return{
        restrict:'AE',
        templateUrl:'./tab/views/tab-template.html',
        scope:{
            data:'='
        },
        link:function(scope,elem,attr){
            scope.activate=0;
            console.log(scope.data);
            scope.activateMe=function(index){
               scope.activate=index; 
            };
        }
        
        
    }
    
});