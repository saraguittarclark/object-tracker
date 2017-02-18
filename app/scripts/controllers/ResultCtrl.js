(function() {
    function ResultCtrl($scope, Objects) {
        var objectData = Objects.getData();
        // var objectsArray = objectData;
        $scope.objects = objectData;
        // console.log(objectData);
        console.log($scope.objects);
        
    }
//added objects to local controller? html isn't reading objects from html, just js
//break apart array? array vs. json list
 
     angular
         .module('objectTracker')
         .controller('ResultCtrl', ['$scope','Objects', ResultCtrl]);
 })();