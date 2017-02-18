(function() {
     function config($stateProvider, $locationProvider, $urlRouterProvider) {
     	$locationProvider
         	.html5Mode({
            	enabled: true,
            	requireBase: false
        });

        $stateProvider

            .state('home', {
                url: '/', 
                controller: 'ResultCtrl',
            })

            .state('create', {
                url: '/create', 
                templateUrl: '/templates/create.html'
            })

            .state('create.antenna', {
                url:'/antenna',
                templateUrl: '/templates/antenna.html'
            })
         	
         	.state('create.receiver', {
         		url: '/receiver',
         		templateUrl: '/templates/receiver.html'
         	})

            .state('create.transmitter-default', {
                url:'/transmitter-default',
                templateUrl: '/templates/transmitter-default.html'
            })

            .state('create.transmitter-eirp', {
                url:'/transmitter-eirp',
                templateUrl: '/templates/transmitter-eirp.html'
            }) 

            .state('create.platform-satellite', {
                url: '/platform-satellite',
                templateUrl: '/templates/platform-satellite.html'
            })

            .state('create.platform-static', {
                url: '/platform-static',
                templateUrl: '/templates/platform-static.html'
            })

            .state('create.odo', {
                url:'/odo',
                templateUrl:'/templates/odo.html'
            })

    }

    angular
        .module('objectTracker', ['ui.router'])
        .config(config);
 })();
