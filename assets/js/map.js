/* Location ID's
Belleek Castle ID: ChIJha7z4Qo3WUgRi_-7lIt88EE
St. John's ID: ChIJOziUVdHpXkgRjYJbZEE8BBA
*/

$(document).ready(function() {
    setTimeout(function() {
        drop(weddingLocations);
    }, 1000);
});

var weddingLocations = [
    {lat: 54.270196, lng: -8.477434},
    {lat: 54.133428, lng: -9.145543},
]
var markers = [];
var map;

function drop(timing) {
    clearMarkers();
    for (var i = 0; i < timing.length; i++) {
      addMarkerWithTimeout(timing[i], i * 200);
    }
  }

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: {lat: 54.196, lng: -8.798}
    });
  };

  function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function() {
      markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP
      }));
    }, timeout);
  }
  
  function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }

  $("#weddingButton").on("click", function (){
      clearMarkers();
      drop(weddingLocations);
  });