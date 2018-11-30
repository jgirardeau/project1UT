      // google map api; code modelled after:   https://developers.google.com/places/web-service/search#PlaceSearchRequests

      // call google map api (initialize) with a search term and position of where we are
      function showPosition(position) {
          initialize(foodsearch, position.coords.latitude, position.coords.longitude);
      }

      // get current lat/long of where we are
      function getLocation() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
          } else {
              // ??? geolocation not supported
              $("#recipeNotFound").removeClass("errorHide").addClass("errorShow");
          }
      }

      // google api to call a search near lat/lon then render to a map
      function initialize(searchTerm, lat, lon) {
          var pyrmont = new google.maps.LatLng(lat, lon);

          map = new google.maps.Map(document.getElementById('map'), {
              center: pyrmont,
              zoom: 15
          });

          var request = {
              location: pyrmont,
              radius: '2000',
              query: searchTerm
          };

          service = new google.maps.places.PlacesService(map);
          service.textSearch(request, callback);
      }

      // add a restaurant and description to map
      function createMarker(place) {
          //  var placeLoc = place.geometry.location;
          var marker = new google.maps.Marker({
              map: map,
              label: place.name,
              position: place.geometry.location
          });
          markers.push(marker);

      }

      // called by google api; results are restaurants near location
      function callback(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
              //console.log("call nothing found ", results);
              for (var i = 0; i < results.length; i++) {
                  createMarker(results[i]);
              }
          }
      }

      // google api to call a search near lat/lon then render to a map
      function initialLocation(lat, lon) {
        var pyrmont = new google.maps.LatLng(lat, lon);

        map = new google.maps.Map(document.getElementById('map'), {
            center: pyrmont,
            zoom: 15
        });

        var request = {
            location: pyrmont,
            radius: '2000',
        };

        service = new google.maps.places.PlacesService(map);
        service.textSearch(request, callback);
    }

