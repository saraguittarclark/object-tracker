(function() {
    function ResultCtrl() {
    	var results = document.getElementById('result-panel');
    	var button = document.getElementById('search-button');
    	var resetButton = document.getElementById('reset-button');
    	var addButton = document.getElementById('add-button');
    	var blankButton = document.getElementById('blank-button');

    	var hideButton = function() {
    		results.style.display = "none";
    	};

    	// hideButton();

    	button.addEventListener('click', function(){
    		results.style.display = "block";
    		//search database with inputs, results would display
    	});

    	resetButton.addEventListener('click', function(){
    		hideButton();
    		//erase search inputs and start over 
    	});

    	addButton.addEventListener('click', function(){
    		//add result to dynamic list, return to search?
    		hideButton();
    	});

    	blankButton.addEventListener('click', function(){
    		//return to list? what would this be?
    		hideButton();
    	});

    }

 
     angular
         .module('objectTracker')
         .controller('ResultCtrl', ResultCtrl);
 })();