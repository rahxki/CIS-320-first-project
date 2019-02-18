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

        var firstCheck = $('#firstName').val();
        var lastCheck = $('#lastName').val();
        var emailCheck = $('#email').val();

        var firstTest = /^[A-Za-z]{1,30}$/;
        var lastTest = /^[A-Za-z]{1,30}$/;
        var emailTest = /^[A-Za-z]{1,30}@[A-Za-z]{1,10}[.][a-z]{3,3}$/;

        if (firstTest.test(firstCheck)) {
            console.log("Ok")
            $('#firstName').removeClass("is-invalid");
            $('#firstName').addClass("is-valid");
        } else {
            console.log("Bad")
            $('#firstName').removeClass("is-valid");
            $('#firstName').addClass("is-invalid");
        }

        if (lastTest.test(lastCheck)) {
            console.log("Ok")
            $('#lastName').removeClass("is-invalid");
            $('#lastName').addClass("is-valid");

        } else {
            console.log("Bad")
            $('#lastName').removeClass("is-valid");
            $('#lastName').addClass("is-invalid");
        }

        if (emailTest.test(emailCheck)) {
            console.log("Ok")
            $('#email').removeClass("is-invalid");
            $('#email').addClass("is-valid");
        } else {
            console.log("Bad")
            $('#email').removeClass("is-valid");
            $('#email').addClass("is-invalid");
        }
        console.log("Saved!");
    }


}

// Call your code.
updateTable();