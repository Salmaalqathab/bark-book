

    $("#form_submit").on("click", function (event) {
        // prevent form from trying to submit/refresh the page
        event.preventDefault();

        // Capture user inputs and store them into a newDog object
        var newDog = {

            name: $("#owner_name").val().trim(),
            dogName: $("#dog_name").val().trim(),
            dogSize: $("input[name=group1]:checked").val(),
            dogPhoto: $("#dog_pic").val(),
            personality: $("input[name=group2]:checked").val(),
            activityLevel: $("input[name=group3]:checked").val(),
            dogParks: $("input[name=group4]:checked").val(),
            preferredTime: $("#park_time").val()
        };
        console.log(newDog);

        //Send an AJAX POST-request with jQuery
        $.post("/api/signup", newDog)
            .then(function(data) {
                console.log(data);
            });
    });

    

