(function() {
    function ResultCtrl($scope, Objects) {
        var objectData = Objects.getData();
        // var objectsArray = objectData;
        $scope.objects = objectData;
        
        //if input matches "antenna" return only object marked antenna, etc
        //how to generalize?
        //array.find()
        //add validation to form and error message
        
    }
 
     angular
         .module('objectTracker')
         .controller('ResultCtrl', ['$scope','Objects', ResultCtrl]);
 })();