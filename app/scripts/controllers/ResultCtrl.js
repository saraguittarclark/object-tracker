(function() {
    function ResultCtrl(Objects) {
    	// var results = document.getElementById('result-panel');
     //    var create = document.getElementById('create-panel');
    	// var searchButton = document.getElementById('search-button');
    	// var resetButton = document.getElementById('reset-button');
    	// var addButton = document.getElementById('add-button');
    	// var blankButton = document.getElementById('blank-button');

    	// var hidePanel = function() {
     //        console.log("Hidden");
    	// 	results.style.display = "none";
    	// };

     //    var showPanel = function() {
     //        console.log("Displayed")
     //        results.style.display = "block";
     //    };

    // var showPanel = false;
    // var hidePanel = function() {
    //     $scope.showPanel = true;
    // };

        

        //State change and results:

        //switch case statement - if x is state when y clicked, do z
        this.objectData = Objects.getData();
        // console.log(this.objectData);


        // displayData = show all different colors only, that is the data

    	// EVENT LISTENERS:


    	// searchButton.addEventListener('click', function(){
    	// 	showPanel();
     //        console.log(objectData);
    	// 	//search database with inputs, results would display
    	// });

    	// resetButton.addEventListener('click', function(){
    	// 	hidePanel();
    	// 	//erase search inputs and start over 
    	// });

    	// addButton.addEventListener('click', function(){
    	// 	//add result to dynamic list, return to search?
    	// 	hidePanel();
    	// });

    	// blankButton.addEventListener('click', function(){
    	// 	//return to list? what would this be?
    	// 	hidePanel();
    	// });

    }

 
     angular
         .module('objectTracker')
         .controller('ResultCtrl', ['Objects', ResultCtrl]);
 })();