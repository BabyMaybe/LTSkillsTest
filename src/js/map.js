
var map;
var infowindow;
var dupont = {lat: 38.909653, lng: -77.043432};

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: dupont,
    zoom: 18
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: dupont,
    radius: 200,
    type: ['parking']
  }, callback);

}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}