(function() {
     function config($stateProvider, $locationProvider) {
     	$locationProvider
         	.html5Mode({
            	enabled: true,
            	requireBase: false
        });

        $stateProvider

            .state('create', {
                url: '/create',
                templateUrl: '/templates/create.html',
                controller: 'ResultCtrl as result'
            })

            .state('create.antenna', {
                url:'/antenna',
                templateUrl: '/templates/antenna.html'
            })
         	
         	.state('create.receiver', {
         		url: '/receiver',
                controller: 'ReceiverCtrl as receiver',
         		templateUrl: '/templates/receiver.html'
         	})

            .state('create.transmitter-default', {
                url:'/transmitter-default',
                controller: 'TransmitterDCtrl as transmitterDefault',
                templateUrl: '/templates/transmitter-default.html'
            })

            .state('create.transmitter-eirp', {
                url:'/transmitter-eirp',
                controller:'TransmitterECtrl as transmitterEirp',
                templateUrl: '/templates/transmitter-eirp.html'
            }) 

            .state('create.platform-satellite', {
                url: '/platform-satellite',
                controller: 'PlatformTLECtrl as platformSatellite',
                templateUrl: '/templates/platform-satellite.html'
            })

            .state('create.platform-static', {
                url: '/platform-static',
                controller: 'PlatformStaticCtrl as platformStatic',
                templateUrl: '/templates/platform-static.html'
            })

            .state('create.tle', {
                url:'/tle',
                templateUrl:'/templates/tle.html'
            })

            .state('create.odo', {
                url:'/odo',
                templateUrl:'/templates/odo.html'
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
