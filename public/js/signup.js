//add jquery for the signup page
// Capture Submit Click
$("#form_submit").on("click", function (event) {
    // prevent form from trying to submit/refresh the page
    event.preventDefault();

    // Capture User Inputs and store them into variables
    var name = $("#owner_name").val().trim();
    var dogName = $("#dog_name").val().trim();
    var dogSize = $("#dog_size :checked").val().trim();
    var dogPhoto = $("#comment-input").val().trim();
    var personality = $("#personality :checked").val().trim();
    var activityLevel = $("#activity_level :checked").val().trim();
    var dogParks = $(".dog_park option:selected").val().trim();
    var preferredTime = $("#park_time").val().trim();


// compare dogsize & personality & dogpark to get top three matches
//push result into another table - friends
 // when user1 logs in, his dog should get top three  dog friends





});