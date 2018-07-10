$(document).ready(function() {
    var mymap = L.map('mapid').setView([38.899542, -77.036625], 11);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.outdoors',
        accessToken: 'pk.eyJ1IjoibWNhcDkiLCJhIjoiY2pqOG1wZ3UzMDZ2ZjNwcjNjMHBiM2RzOSJ9.hpn8KPTKIVENiO1zBJBJUA'
    }).addTo(mymap);
    var hydrant = L.icon({
        iconUrl: 'images/fire_hydrant_PNG41081.png',
        popupAnchor: [11,0]
    });

    var marker1 = L.marker([38.944119,-77.031639], {icon:hydrant}).bindPopup('Upshur Dog Park').addTo(mymap);
    marker1.url = 'api/Upshur Dog Park'
    marker1.on('click', function(){
        $.get(marker1.url, function(data) {
            // For each dog the server sends back
            for (var i = 0; i < data.length; i++) {
              // Create a parent div to hold data
              var wellSection = $("<div>");
              // Add a class to this div: 'well'
              wellSection.addClass("well");
              // Add an id to the well to mark which well it is
              wellSection.attr("id", "dog-well-" + i);
              // Append the well to the well section
              $("#well-section").append(wellSection);
          
              // Add dog data to the well placed on the page
              $("#dog-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].dogName + "</h2>");
              $("#dog-well-" + i).append("<img src=" + data[i].dogPhoto + ">");
              $("#dog-well-" + i).append("<h3>Owner: " + data[i].name + "</h4>");
              $("#dog-well-" + i).append("<h3>Favorite Park: " + data[i].favorite_park + "</h4>");
              $("#dog-well-" + i).append("<h3>Preferred Play Time: " + data[i].preferred_time + "</h4>");
              $("#dog-well-" + i).append("<h3>Size: " + data[i].size + "</h4>");
              $("#dog-well-" + i).append("<h3>Personality: " + data[i].personality + "</h4>");
              $("#dog-well-" + i).append("<h3>Activity: " + data[i].activity_level + "</h4>");
            }
          });
    });
    var marker2 = L.marker([38.931593,-77.028424], {icon:hydrant}).bindPopup('Columbia Heights Dog Park').addTo(mymap);
    marker2.url = 'api/ColumbiaHeightsDogPark'
    marker2.on('click', function(){
        window.location = (this.url);
    });
    var marker3 = L.marker([38.923776,-77.044978], {icon:hydrant}).addTo(mymap).bindPopup('Walter Pierce Park').openPopup();
    marker3.url = 'api/Walterpiercepark'
    marker3.on('click', function(){
        window.location = (this.url);
    });
    L.marker([38.918365,-77.01655], {icon:hydrant}).addTo(mymap).bindPopup('Gage Eckington Dog Park').openPopup();
    L.marker([38.914088,-77.038475], {icon:hydrant}).addTo(mymap).bindPopup('S Street Dog Park').openPopup();
    L.marker([38.912205,-77.027035], {icon:hydrant}).addTo(mymap).bindPopup('Shaw Dog Park').openPopup();
    L.marker([38.914082,-77.050625], {icon:hydrant}).addTo(mymap).bindPopup('Mitchell Park').openPopup();
    L.marker([38.902249,-77.053308], {icon:hydrant}).addTo(mymap).bindPopup('Francis Dog Park').openPopup();
    L.marker([38.934632,-77.068648], {icon:hydrant}).addTo(mymap).bindPopup('Rosedale Conservancy').openPopup();
    L.marker([38.935699,-77.077194], {icon:hydrant}).addTo(mymap).bindPopup('Newark Street Dog Park').openPopup();
    L.marker([38.926492,-76.974909], {icon:hydrant}).addTo(mymap).bindPopup('Langdon Dog Park').openPopup();
    L.marker([38.894782,-76.992088], {icon:hydrant}).addTo(mymap).bindPopup('Kingsman Dog Park').openPopup();
    L.marker([38.877902,-76.993883], {icon:hydrant}).addTo(mymap).bindPopup('Virginia Avenue Park').openPopup();
    L.marker([38.881958,-77.003531], {icon:hydrant}).addTo(mymap).bindPopup('Garfield Park').openPopup();
    L.marker([38.877106,-77.003119], {icon:hydrant}).addTo(mymap).bindPopup('Canal Park').openPopup();

    var marker = L.marker([52, 12], {});
marker.url = 'www.google.com'

marker.on('click', function(){
window.location = (this.url);
});




});
