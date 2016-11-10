(function() {
    function ListCtrl(Objects) {
    	this.objects = Objects.getData();
    }
 
     angular
         .module('objectTracker')
         .controller('ListCtrl', ['Objects', ListCtrl]);
 })();