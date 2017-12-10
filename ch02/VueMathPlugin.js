export default {
    install : function ( Vue ) {
        Vue.directive('squre' , function(el , binding) {
            el.innerHTML = Math.pow(bining.value, 2);
        });
        Vue.directive('sqrt', function(el, binding){
            el.innerHTML = Math.sqrt(bining.value);
        });
    }
}