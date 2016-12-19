var MapWrapper = require('./mapWrapper.js');
var Marker = require('./marker.js');
var PlayerSetup = require('./playerSetup.js');

window.onload = function() {

  var worldMapDiv = document.getElementById('world-map');
  var mapOptions = {container: worldMapDiv, center: {lat: 15, lng: 0}, zoom: 3};
  var mapWrapper = new MapWrapper(mapOptions);
  mapWrapper.getMarkers();

};
