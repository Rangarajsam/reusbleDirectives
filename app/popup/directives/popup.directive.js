angular.module('popupModule')
.directive('popupDirective', function(){
    "use strict";
    return {
        restrict:'EA',
        scope:{
            show:'=showPopup',
            close:'&closePopup'
        },
        replace:true,
        transclude:true,
        templateUrl:'popup/views/popup-temp.html',
        link: function(scope, elem, attrs){
            scope.popupStyle={};
            
            scope.popupTitle=attrs.popupTitle;
            if(attrs.width){
                    scope.popupStyle.width=attrs.width+'px';
                }
            if(attrs.height){
                scope.popupStyle.height=attrs.height+'px';
            }
            scope.popupStyle.marginTop=-(attrs.height/2)+'px';
            scope.popupStyle.marginLeft=-(attrs.width/2)+'px';
            elem.find('.popup-close').on('click',function(){
                console.log('close me');
                scope.close();
                scope.$apply();
            });
        }
        
        
    };
    
});
