// Main Javascript File

function editItem(e) {
    console.debug("Edit");
    console.debug(e.target.value);

    // Grab the id from the event
    var id = e.target.value;

    // This next line is fun.
    // "e" is the event of the mouse click
    // "e.target" is what the user clicked on. The button in this case.
    // "e.target.parentNode" is the node that holds the button. In this case, the table cell.
    // "e.target.parentNode.parentNode" is the parent of the table cell. In this case, the table row.
    // "e.target.parentNode.parentNode.querySelectorAll("td")" gets an array of all matching table cells in the row
    // "e.target.parentNode.parentNode.querySelectorAll("td")[0]" is the first cell. (You can grab cells 0, 1, 2, etc.)
    // "e.target.parentNode.parentNode.querySelectorAll("td")[0].innerHTML" is content of that cell. Like "Sam" for example.
    // How did I find this long chain? Just by setting a breakpoint and using the interactive shell in my browser.
    var firstName = e.target.parentNode.parentNode.querySelectorAll("td")[0].innerHTML;
    var lastName = e.target.parentNode.parentNode.querySelectorAll("td")[1].innerHTML;
    var emailName = e.target.parentNode.parentNode.querySelectorAll("td")[2].innerHTML;
    var phoneName = e.target.parentNode.parentNode.querySelectorAll("td")[3].innerHTML;
    var birthdayName = e.target.parentNode.parentNode.querySelectorAll("td")[4].innerHTML;

    $('#id').val(id); // Yes, now we set and use the hidden ID field
    $('#firstName').val(firstName);
    $('#lastName').val(lastName);
    $('#email').val(emailName);
    $('#phone').val(phoneName);
    $('#birthday').val(birthdayName);
    $('#myModal').modal('show');

    var firstTest = /^[A-Za-z]{1,30}$/;
    var lastTest = /^[A-Za-z]{1,30}$/;
    var emailTest = /^[A-Za-z]{1,30}@[A-Za-z]{1,10}[.][a-z]{3,3}$/;
    var phoneTest = /^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/i;
    var birthdayTest = /^[0-9]{4,4}-[0-1][0-9]-[0-3][1-9]$/;

    if (firstTest.test(firstName)) {

        $('#firstName').removeClass("is-invalid");
        $('#firstName').addClass("is-valid");
    } else {

        $('#firstName').removeClass("is-valid");
        $('#firstName').addClass("is-invalid");
        checkPass = 0;
    }

    if (lastTest.test(lastName)) {

        $('#lastName').removeClass("is-invalid");
        $('#lastName').addClass("is-valid");

    } else {

        $('#lastName').removeClass("is-valid");
        $('#lastName').addClass("is-invalid");
        checkPass = 0;
    }

    if (emailTest.test(emailName)) {

        $('#email').removeClass("is-invalid");
        $('#email').addClass("is-valid");
    } else {

        $('#email').removeClass("is-valid");
        $('#email').addClass("is-invalid");
        checkPass = 0;
    }

    if (phoneTest.test(phoneName)) {

        $('#phone').removeClass("is-invalid");
        $('#phone').addClass("is-valid");

    } else {

        $('#phone').removeClass("is-valid");
        $('#phone').addClass("is-invalid");
        checkPass = 0;

    }

    if (birthdayTest.test(birthdayName)) {

        $('#birthday').removeClass("is-invalid");
        $('#birthday').addClass("is-valid");

    } else {

        $('#birthday').removeClass("is-valid");
        $('#birthday').addClass("is-invalid");
        checkPass = 0;

    }

    if (checkPass == 1) {

        console.log("saved!")

        var url2 = "api/name_list_edit";
        var dataToServer = {
            id: id,
            first: firstCheck,
            last: lastCheck,
            email: emailCheck,
            phone: phoneCheck,
            birthday: birthdayCheck
        };

        $.ajax({
            type: 'POST',
            url: url2,
            data: JSON.stringify(dataToServer),
            success: function (dataFromServer) {
                console.log(dataFromServer);
            },
            contentType: "application/json",
            dataType: 'text' // Could be JSON or whatever too
        });

    }

    location.reload();
}

function deleteItem(e) {
    console.debug("Delete");
    console.debug(e.target.value);

    var url3 = "api/name_list_delete";
    var dataToServer = { id : e.target.value };

    console.debug(dataToServer);

    $.ajax({
        type: 'POST',
        url: url3,
        data: JSON.stringify(dataToServer),
        success: function(dataFromServer) {
            console.log(dataFromServer);
        },
        contentType: "application/json",
        dataType: 'text' // Could be JSON or whatever too
    });

    location.reload();
}

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

        location.reload();

    }

}

function updateTable() {
    var url = "api/name_list_get";

    $.getJSON(url, null, function(json_result) {
            // json_result is an object. You can set a breakpoint, or print
            // it to see the fields. Specifically, it is an array of objects.
            // Here we loop the array and print the first name.

            for (var i = 0; i < json_result.length; i++) {

                var phonestring = json_result[i].phone;

                if(phonestring) {
                    var phone = phonestring.substring(0, 3) + phonestring.substring(3, 6) + phonestring.substring(6, 11);
                } else {

                    var phone = " ";

                }

                $('#datatable tr:last').before('<tr><td><td><button type=\'button\' name=\'delete\' class=\'deletebutton\' value=\'' + json_result[i].id + '\'>Delete Record</button></td><td>' + '<td><td><button type=\'button\' name=\'edit\' class=\'editbutton\' value=\'' + json_result[i].id + '\'>Edit</button></td><td>' + json_result[i].id + '</td><td>' + json_result[i].first + '</td><td>' + json_result[i].last + '</td><td>' + json_result[i].email + '</td><td>' + phone + '</td><td>' + json_result[i].birthday + '</td>' + '</td></tr>');

                console.log(json_result[i].first);
            }

        var button = $(".deletebutton");
        button.on("click", deleteItem);

        $(".editbutton").on("click", editItem);

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

}

// Call your code.
updateTable();
