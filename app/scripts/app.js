(function() {
     function config($stateProvider, $locationProvider) {
     	$locationProvider
         	.html5Mode({
            	enabled: true,
            	requireBase: false
        });

        $stateProvider

            .state('search', {
                url: '/search',
                templateUrl: '/templates/search.html',
                controller: 'ResultCtrl as result'
            })
         	
         	.state('search.receiver', {
         		url: '/receiver',
                controller: 'ReceiverCtrl as receiver',
         		templateUrl: '/templates/receiver.html'
         	})

            .state('search.transmitter-default', {
                url:'/transmitter-default',
                controller: 'TransmitterDCtrl as transmitterDefault',
                templateUrl: '/templates/transmitter-default.html'
            })

            .state('search.transmitter-eirp', {
                url:'/transmitter-eirp',
                controller:'TransmitterECtrl as transmitterEirp',
                templateUrl: '/templates/transmitter-eirp.html'
            }) 

            .state('search.platform-satellite', {
                url: '/platform-satellite',
                controller: 'PlatformTLECtrl as platformSatellite',
                templateUrl: '/templates/platform-satellite.html'
            })

            .state('search.platform-static', {
                url: '/platform-static',
                controller: 'PlatformStaticCtrl as platformStatic',
                templateUrl: '/templates/platform-static.html'
            })

            .state('result', {
                url: '/data', 
                controller: 'ResultCtrl as result',
                templateUrl: '/templates/result.html'
            })

    }

    angular
        .module('objectTracker', ['ui.router'])
        .config(config);
 })();
