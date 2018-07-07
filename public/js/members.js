// $("#new-match").on("click", function(event) {
//     event.preventDefault();

//     $.get("/api/all", function(data) {

//         if (data.length !== 0) {
      
//             for (var i = 0; i < data.length; i++) {
      
//                 var row = $("<div>");
//                 row.addClass("match");
      
//                 row.append("<p>" + data[i].name "</p>");
//                 row.append("<p>" + data[i].name + "</p>");
//                 row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
      
//                 $("#match-area").prepend(row);
      
//             }
      
//         }
      
//     });
// });