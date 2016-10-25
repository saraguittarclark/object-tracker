(function() {
     function config($stateProvider, $locationProvider) {
     	$locationProvider
         	.html5Mode({
            	enabled: true,
            	requireBase: false
        });

        $stateProvider
         // 	.state('list', {
         //    	url: '/',
         //    	// controller: 'ListCtrl as list',
         //    	views: {
         //    		'see-list': {
         //    			templateUrl: '/templates/list.html'
         //    		},
         //    	}
        	// });
         	
         	// .state('list.returning', {
         	// 	url: '/list',h
         	// 	templateUrl: '/templates/list.html'
         	// })

         	// .state('search.basic' {
         	// 	url: '/search',
         	// 	templateUrl: '/templates/search.html'
         	// })


    }

     angular
         .module('objectTracker', ['ui.router'])
         .config(config);
 })();
