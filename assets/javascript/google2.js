      // google map api; code modelled after:   https://developers.google.com/places/web-service/search#PlaceSearchRequests

      function showPosition(position) {
          initialize(foodsearch, position.coords.latitude, position.coords.longitude);
      }

      function getLocation() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
          } else {
              // ??? add some better message here?
              // console.log("Geolocation is not supported by this browser.");
          }
      }

      function initialize(searchTerm, lat, lon) {
          //   var pyrmont = new google.maps.LatLng(30.267153, -97.743060);
          var pyrmont = new google.maps.LatLng(lat, lon);

          map = new google.maps.Map(document.getElementById('map'), {
              center: pyrmont,
              zoom: 15
          });

          var request = {
              location: pyrmont,
              radius: '1000',
              query: searchTerm
          };

          service = new google.maps.places.PlacesService(map);
          service.textSearch(request, callback);
      }

      function createMarker(place) {
          //  var placeLoc = place.geometry.location;
          var marker = new google.maps.Marker({
              map: map,
              label: place.name,
              position: place.geometry.location
          });
          markers.push(marker);

      }

      function callback(results, status) {
          //console.log("Results ", results, " status ", status)
          //setMapOnAll(null);
          if (status == google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < results.length; i++) {
                  createMarker(results[i]);
              }
          }
      }