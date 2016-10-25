(function() {
    function ListCtrl(Demo) {
    	this.objects = Demo;
    }
 
     angular
         .module('objectTracker')
         .controller('ListCtrl', ['Demo', ListCtrl]);
 })();