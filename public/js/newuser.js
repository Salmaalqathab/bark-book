// var loginForm = $("form.signup");
// var emailInput = $("input#new-email");
// var passwordInput = $("input#new-password");

// loginForm.on("submit", function(event) {
//   event.preventDefault();
//   var userData = {
//     email: emailInput.val().trim(),
//     password: passwordInput.val().trim()
//   };

//   if (!userData.email || !userData.password) {
//     return;
//   }

//   loginUser(userData.email, userData.password);
//   emailInput.val("");
//   passwordInput.val("");
// });

// function loginUser(email, password) {
//   $.post("/api/login", {
//     email: email,
//     password: password
//   }).then(function(data) {
//     window.location.replace(data);
//   }).catch(function(err) {
//     console.log(err);
//   });
// }

//add jquery for the signup page
// Capture Submit Click

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

// compare dogsize & personality & dogpark to get top three matches
//push result into another table - friends
// when user1 logs in, his dog should get top three  dog friends
});
