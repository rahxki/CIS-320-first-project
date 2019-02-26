// Main Javascript File

function updateTable() {
    var url = "api/name_list_get";

    $.getJSON(url, null, function(json_result) {
            // json_result is an object. You can set a breakpoint, or print
            // it to see the fields. Specifically, it is an array of objects.
            // Here we loop the array and print the first name.

            for (var i = 0; i < json_result.length; i++) {

                phonestring = json_result[i].phone

                phone = phonestring.substring(0,3) + "-" + phonestring.substring(3,6) + "-" + phonestring.substring(6,11)

                $('#datatable tr:last').before('<tr><td><td>' + json_result[i].id + '</td><td>' + json_result[i].first + '</td><td>' + json_result[i].last + '</td><td>' + json_result[i].email + '</td><td>' + phone + '</td><td>' + json_result[i].birthday + '</td>' + '</td></tr>')

                console.log(json_result[i].first);
            }
            console.log("Done");
        }
    );

    // There's a button in the form with the ID "addItem"
    // Associate the function showDialogAdd with it.
    var addItemButton = $('#addItem');
    addItemButton.on("click", showDialogAdd);

    // Called when "Add Item" button is clicked
    function showDialogAdd() {

        // Print that we got here
        console.log("Opening add item dialog");

        // Clear out the values in the form.
        // Otherwise we'll keep values from when we last
        // opened or hit edit.
        // I'm getting it started, you can finish.
        $('#id').val("");
        $('#firstName').val("");

        // Show the hidden dialog
        $('#myModal').modal('show');
    }

    var saveChangesButton = $('#saveChanges');
    saveChangesButton.on("click", saving);

    function saving() {

        var checkPass = 1;

        var firstCheck = $('#firstName').val();
        var lastCheck = $('#lastName').val();
        var emailCheck = $('#email').val();
        var phoneCheck = $('#phone').val();
        var birthdayCheck = $('#birthday').val();

        var firstTest = /^[A-Za-z]{1,30}$/;
        var lastTest = /^[A-Za-z]{1,30}$/;
        var emailTest = /^[A-Za-z]{1,30}@[A-Za-z]{1,10}[.][a-z]{3,3}$/;
        var phoneTest = /^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/i;
        var birthdayTest = /^[0-9]{4,4}-[0-1][0-9]-[0-3][1-9]$/;

        if (firstTest.test(firstCheck)) {

            $('#firstName').removeClass("is-invalid");
            $('#firstName').addClass("is-valid");
        } else {

            $('#firstName').removeClass("is-valid");
            $('#firstName').addClass("is-invalid");
            checkPass = 0;
        }

        if (lastTest.test(lastCheck)) {

            $('#lastName').removeClass("is-invalid");
            $('#lastName').addClass("is-valid");

        } else {

            $('#lastName').removeClass("is-valid");
            $('#lastName').addClass("is-invalid");
            checkPass = 0;
        }

        if (emailTest.test(emailCheck)) {

            $('#email').removeClass("is-invalid");
            $('#email').addClass("is-valid");
        } else {

            $('#email').removeClass("is-valid");
            $('#email').addClass("is-invalid");
            checkPass = 0;
        }

        if(phoneTest.test(phoneCheck)){

            $('#phone').removeClass("is-invalid");
            $('#phone').addClass("is-valid");

        } else {

            $('#phone').removeClass("is-valid");
            $('#phone').addClass("is-invalid");
            checkPass = 0;

        }

        if(birthdayTest.test(birthdayCheck)){

            $('#birthday').removeClass("is-invalid");
            $('#birthday').addClass("is-valid");

        } else {

            $('#birthday').removeClass("is-valid");
            $('#birthday').addClass("is-invalid");
            checkPass = 0;

        }

        if (checkPass == 1){

            console.log("saved!")

            var url2 = "api/name_list_edit";
            var dataToServer = { first : firstCheck, last : lastCheck, email : emailCheck, phone : phoneCheck, birthday : birthdayCheck };

            $.ajax({
                type: 'POST',
                url: url2,
                data: JSON.stringify(dataToServer),
                success: function(dataFromServer) {
                    console.log(dataFromServer);
                },
                contentType: "application/json",
                dataType: 'text' // Could be JSON or whatever too
            });


            updateTable();

        }

        checkPass = 1;

    }


}

// Call your code.
updateTable();
