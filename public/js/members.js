
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

  // $.get("/api/:park", function(data) {
  //   // For each dog the server sends back
  //   for (var i = 0; i < data.length; i++) {
  //     // Create a parent div to hold data
  //     var wellSection = $("<div>");
  //     // Add a class to this div: 'well'
  //     wellSection.addClass("well");
  //     // Add an id to the well to mark which well it is
  //     wellSection.attr("id", "dog-well-" + i);
  //     // Append the well to the well section
  //     $("#well-section").append(wellSection);
  
  //     // Add dog data to the well placed on the page
  //     $("#dog-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].dogName + "</h2>");
  //     $("#dog-well-" + i).append("<img src=" + data[i].dogPhoto + ">");
  //     $("#dog-well-" + i).append("<h3>Owner: " + data[i].name + "</h4>");
  //     $("#dog-well-" + i).append("<h3>Favorite Park: " + data[i].favorite_park + "</h4>");
  //     $("#dog-well-" + i).append("<h3>Preferred Play Time: " + data[i].preferred_time + "</h4>");
  //     $("#dog-well-" + i).append("<h3>Size: " + data[i].size + "</h4>");
  //     $("#dog-well-" + i).append("<h3>Personality: " + data[i].personality + "</h4>");
  //     $("#dog-well-" + i).append("<h3>Activity: " + data[i].activity_level + "</h4>");
  //   }
  // });

  
  