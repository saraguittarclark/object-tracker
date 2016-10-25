(function() {
	// var Objects = {};
	var demoObjects = {

		PlatformSatellite:[
		    {name:"Helga", tle1:"1092380389824", tle2: "98374823472832948723", tle3:"183972871123"},
		   	{name:"Gertrude", tle1:"20923432389824", tle2: "74823472832948723", tle3:"283972871123"},
		    {name:"Gladys", tle1:"3092380389824", tle2: "8374823472832948723", tle3:"383972871123"},
		],

		PlatformStatic:[
			{name:"Base1", lat:"1092380389824", lng:"19232", alt:"92837"},
		   	{name:"Base2", lat:"1092380389824", lng:"29232", alt:"82837"},
		    {name:"Base3", lat:"1092380389824", lng:"39232", alt:"72837"}
		],

		TransmitterDefault:[
			{objectID: "12345", powerTransmitted:"52"},
			{objectID: "23456", powerTransmitted:"42"},
		],

		TransmitterFixedEIRP: [
			{name: "George", EIRP: "145"},
			{name: "William", EIRP: "133"},
			{name: "Frank", EIRP: "150"},
			{name: "Alexander", EIRP: "125"}
		],

		ReceiverFixedGonT: [
			{name: "Eliza", gont: "345"},
			{name: "Peggy", gont: "456"},
			{name: "Angelica", gont: "567"},
			{name: "Mariah", gont: "789"}
		]
	};

	// Objects.demoObjects = function() {
	// 	return demoObjects;
	// };

	return demoObjects;

	angular
		.module('objectTracker')
		.factory('Objects', Objects);
})();

