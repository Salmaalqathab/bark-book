
// Show all dogs
$("#show-all-dogs").on("click", function (event) {
  // prevent form from trying to submit/refresh the page
  event.preventDefault();
  // Make a get request to our api route that will return every dog
  $.get("/api/all", function(data) {
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

// Function to search and add dogs
function requestAndUpdateDOM (url) {
  $('#well-section').empty();
  $.get(url, function(data) {
      
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
        $("#dog-well-" + i).append("<h3>" + (i + 1) + ". " + data[i].dogName + "</h3>");
        $("#dog-well-" + i).append("<img src=" + data[i].dogPhoto + ">");
        $("#dog-well-" + i).append("<h4>Owner: " + data[i].name + "</h4>");
        $("#dog-well-" + i).append("<h4>Favorite Park: " + data[i].favorite_park + "</h4>");
        $("#dog-well-" + i).append("<h4>Preferred Play Time: " + data[i].preferred_time + "</h4>");
        $("#dog-well-" + i).append("<h4>Size: " + data[i].size + "</h4>");
        $("#dog-well-" + i).append("<h4>Personality: " + data[i].personality + "</h4>");
        $("#dog-well-" + i).append("<h4>Activity: " + data[i].activity_level + "</h4>");
      }
    });
}

// Find dogs by size
$("#small-dogs").on('click', function(){
  requestAndUpdateDOM("/api/size/small");
});

$("#medium-dogs").on('click', function(){
  requestAndUpdateDOM("/api/size/medium");
});

$("#large-dogs").on('click', function(){
  requestAndUpdateDOM("/api/size/large");
});


// Find dogs by energy-level
$("#sedentary-dogs").on('click', function(){
  requestAndUpdateDOM("/api/activity_level/sedentary");
});

$("#moderately-energetic-dogs").on('click', function(){
  requestAndUpdateDOM("/api/activity_level/moderately-energetic");
});

$("#hyperactive-dogs").on('click', function(){
  requestAndUpdateDOM("/api/activity_level/hyperactive");
});


// Find dogs by personality
$("#confident-dogs").on('click', function(){
  requestAndUpdateDOM("/api/personality/confident");
});

$("#timid-dogs").on('click', function(){
  requestAndUpdateDOM("/api/personality/timid");
});

$("#independent-dogs").on('click', function(){
  requestAndUpdateDOM("/api/personality/independent");
});

$("#laid-back-dogs").on('click', function(){
  requestAndUpdateDOM("/api/personality/laid-back");
});

$("#adaptable-dogs").on('click', function(){
  requestAndUpdateDOM("/api/personality/adaptable");
});






  
  