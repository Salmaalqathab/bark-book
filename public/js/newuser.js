

$("#new-user").on("click", function (event) {
    // prevent form from trying to submit/refresh the page
    event.preventDefault();

    // Capture user inputs and store them into a newDog object
    var newUser = {

        email: $("#new-email").val().trim(),
        password: $("#new-password").val().trim()
    };
    console.log(newUser);

    //Send an AJAX POST-request with jQuery
    $.post("/api/newuser", newUser)
        .then(function(data) {
            console.log(data);
        });
    
    location.href = "/signup";
});
