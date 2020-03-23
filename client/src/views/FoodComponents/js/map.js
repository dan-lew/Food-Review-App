let body=document.querySelector('body')[0]
let divN=document.createElement('div')
let divList=document.createElement("div");
let divInfo=document.createElement('div');
let table=document.createElement("table");
let tbody=document.createElement("tbody");
let trUrl=document.createElement('tr');
let trAdd=document.createElement('tr');
let trPh=document.createElement('tr');
let trRat=document.createElement('tr');
let trWeb=document.createElement('tr');
let tdIwIc=document.createElement('td');
let tdIwAdd=document.createElement('td');
let tdIdAttr=document.createElement('td')
let tdIwPh=document.createElement('td');
let tdIwUrl=document.createElement('td');
let tdIwRat=document.createElement('td');
let tdIwWeb=document.createElement('td');

trAdd.setAttribute("id","iw-address-row");
trAdd.setAttribute('class',"iw_table_row");
trUrl.setAttribute('id',"iw-url-row");
trUrl.setAttribute('class',"iw_table_row");
trPh.setAttribute('id',"iw-phone-row");
trPh.setAttribute('class',"iw_table_row");
trWeb.setAttribute('class',"iw_table_row");
trWeb.setAttribute('id',"iw-website-row");
trRat.setAttribute('class',"iw-table-row");
trRat.setAttribute('id',"iw-rating-row");
tdIwIc.setAttribute('id','iw_table_icon');
tdIwIc.setAttribute('class','iw_table_icon');
tdIwUrl.setAttribute('id',"iw-url");
tdIdAttr.setAttribute('class','iw_attribute_name');
tdIwAdd.setAttribute('id',"iw-addresse")
tdIwPh.setAttribute('id',"iw-phone");
tdIwRat.setAttribute('id',"iw-rating");
tdIwW.setAttribute('id',"iw-website");
trUrl.appendChild(tdIwIc);
trUrl.appendChild(tdIwUrl);
trAdd.appendChild(tdIdAttr);
trAdd.appendChild(tdIwAdd);
trRat.appendChild(tdIdAttr);
trRat.appendChild(tdIwRat);
trPh.appendChild(tdIdAttr);
trPh.appendChild(tdIwPh);
trWeb.appendChild(tdIdAttr);
trWeb.appendChild(tdIwWeb);
table.appendChild(trUrl);
table.appendChild(trAdd);
table.appendChild(trPh);
table.appendChild(trRat)
divInfo.appendChild(table);
divN.appendChild(divInfo);
/**
 *  <div id="listing">
      <table id="resultsTable">
        <tbody id="results"></tbody>
      </table>
    </div>
 */
// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
  
function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 53.599, lng: 10.005},
    zoom: 15,
    mapTypeId: 'roadmap'
  });
  var infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });
  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    console.log(map.getBounds())
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  
  var MARKER_PATH = 'img/icon-FR.png';
  var address,name, rating,url,id, phone;
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  
  function dropMarker(i) {
    console.log("drop MArker" , i)
        return function() {
          markers[i].setMap(map);
        };
   }
      
   function clearMarkers() {
     for (var i = 0; i < markers.length; i++) {
          if (markers[i]) {
            markers[i].setMap(null);
          }
        }
        markers = [];
      } 
      function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
          results.removeChild(results.childNodes[0]);
        }
      }
      function buildIWContent(place) {
        console.log("bildIWi ",place)
        document.getElementById('iw-icon').innerHTML = '<img class="cafeIcon" ' +
            'src="' + place.icon + '"/>';
        document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
            '">' + place.name + '</a></b>';
        document.getElementById('iw-address').textContent = place.vicinity;

        if (place.formatted_phone_number) {
          document.getElementById('iw-phone-row').style.display = '';
          document.getElementById('iw-phone').textContent =
              place.formatted_phone_number;
        } else {
          document.getElementById('iw-phone-row').style.display = 'none';
        }

    
        if (place.rating) {
          var ratingHtml = '';
          for (var i = 0; i < 5; i++) {
            if (place.rating < (i + 0.5)) {
              ratingHtml += '&#10025;';
            } else {
              ratingHtml += '&#10029;';
            }
          document.getElementById('iw-rating-row').style.display = '';
          document.getElementById('iw-rating').innerHTML = ratingHtml;
          }
        } else {
          document.getElementById('iw-rating-row').style.display = 'none';
        }

        // The regexp isolates the first part of the URL (domain plus subdomain)
        // to give a short URL for displaying in the info window.
        if (place.website) {
          var fullUrl = place.website;
          var website = hostnameRegexp.exec(place.website);
          if (website === null) {
            website = 'http://' + place.website + '/';
            fullUrl = website;
          }
          document.getElementById('iw-website-row').style.display = '';
          document.getElementById('iw-website').textContent = website;
        } else {
          document.getElementById('iw-website-row').style.display = 'none';
        }
      }
      function addResult(result, i) {
        var results = document.getElementById('results');
        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));;
        var markerIcon = MARKER_PATH;

        var tr = document.createElement('tr');
        tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
        tr.onclick = function() {
          google.maps.event.trigger(markers[i], 'click');
        };

        var iconTd = document.createElement('td');
        var nameTd = document.createElement('td');
        var icon = document.createElement('img');
        icon.src = markerIcon;
        icon.setAttribute('class', 'placeIcon');
        icon.setAttribute('className', 'placeIcon');
        var name = document.createTextNode(result.name);
        iconTd.appendChild(icon);
        nameTd.appendChild(name);
        tr.appendChild(iconTd);
        tr.appendChild(nameTd);
        results.appendChild(tr);
      }

      function showInfoWindow() {
        var marker = this;
        console.log("marker show",marker)
        place.getDetails({placeId: marker.placeId},
            function(place, status) {
              if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
              }
              console.log("show")
              infoWindow.open(map, marker);
              buildIWContent(place);
            });
      }
      //   place.getDetails({placeId: marker.placeResult.place_id},
      //       function(place, status) {
      //         if (status !== google.maps.places.PlacesServiceStatus.OK) {
      //           return;
      //         }
      //         console.log("show")
      //         infoWindow.open(map, marker);
      //         buildIWContent(place);
      //       });
      // }
      var request=[];
  searchBox.addListener('places_changed', function() {
    clearMarkers()
    var places = searchBox.getPlaces();

    var marker = this;
    for(i=0;i<places.length;i++){
       request = {
        placeId: places[i].id,
        fields:[ 'name','rating','international_phone_number','url','geometry']
      }

      address=places[i].vicinity;
      name=places[i].name;
      rating=places[i].rating;
      url=places[i].url;
      phone=places[i].international_phone_number;
      console.log("places searchBox: ", places[i], address, name, phone, rating,url)
    }
    
    
    function search() {
      var search = {
        bounds: map.getBounds()
      };
    }

    console.log("request ",request)
    //let placesM = new google.maps.places.PlacesService(map);
    //console.log(placesM)
    // placesM.getDetails(request, function(place, status) {
    //   console.log("nearby search placesM")
    //  console.log("status ",status, request)
    //  if (status === google.maps.places.PlacesServiceStatus.OK) {
    //    console.log("ok")
    //    for (var i = 0; i < place.length; i++) {
    //     var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
      
    //     var markerIcon = MARKER_PATH ;
    //     // Use marker animation to drop the icons incrementally on the map.
    //     markers[i] = new google.maps.Marker({
    //       position: results[i].geometry.location,
    //       animation: google.maps.Animation.DROP,
    //       icon: markerIcon
    //     });
    //     // If the user clicks a restaurant marker, show the details of that restaurant
    //     // in an info window.
    //     /**** click nicht funktioniert**/
    //     markers[i].placeResult = results[i];
    //     console.log("markers[i]: ",markers[i])
    //     google.maps.event.addListener( 'click',markers[i], showInfoWindow);
    //     setTimeout(dropMarker(i), i * 100);
    //     addResult(results[i], i);
    //   }

    //  }
    //  console.log("nicht ok")
    // })

    if (places.length == 0) {
      console.log("places is 0")
      return;
    }
    markers = [];
    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
   

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      console.log("ForEach")
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
         icon:icon,
        //icon: MARKER_PATH,
        title: place.name,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: place.geometry.location,
        placeId:place.id
      }));
     

      console.log("markers: ",markers)
      for(i=0;i<markers.length;i++){
        
      //  google.maps.event.addListener(markers[i], 'click', showInfoWindow)

       google.maps.event.addListener(markers[i],'click', function() {
         console.log("place: " ,place.icon);
         infoWindow.setContent(
          '<div id="info-content"><table><tr id="iw-url-row" class="iw_table_row"><td id="iw-icon" class="iw_table_icon">'+
            '<img src="'+place.icon+'" style="height:24px"/></td><td id="iw-url"><a href="'
            +place.url+'" target="_blank">'+place.name+'</a></td></tr>'+
             '<tr id="iw-address-row" class="iw_table_row">'+
              '<td class="iw_attribute_name">Address:</td><td id="iw-address">'
             + place.vicinity + ' </td></tr>'+'<tr id="iw-phone-row" class="iw_table_row">'+
              '<td class="iw_attribute_name">Telephone:</td><td id="iw-phone">'
              +place.international_phone_number+' </td></tr>'+
              '<tr id="iw-rating-row" class="iw_table_row"><td class="iw_attribute_name">'+
                'Rating:</td><td id="iw-rating">'+
              place.rating+'</td></tr><tr id="iw-website-row" class="iw_table_row">'+
      '<td class="iw_attribute_name">Website:</td><td id="iw-website"><a href="'+
        place.website+'</td></tr></table></div>');
        infoWindow.open(map, this);
      });
     
}
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
   });
  
}
export default initAutocomplete;
