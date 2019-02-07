var formButton1 = $('#button1');
formButton1.on("click", functionA);

function functionA(event){

  console.log("Hello.");

}

var formButton2 = $('#button2');
formButton2.on("click", functionB)

function functionB(event){

  var1 = $('#field1').val();
  var2 = $('#field2').val();
  var3 = parseInt(var1) + parseInt(var2);
  $('#field3').val(var3);

}

var formButton3 = $('#button3');
formButton3.on("click", functionC);

function functionC(event) {

  if($('#paragraphToHide').is(":visible")){
    $('#paragraphToHide').hide()
  }
  else{
    $('#paragraphToHide').show()
  }

}

var formButton4 = $('#button4');
formButton4.on("click", functionD);

function functionD(event){

  var valid = $('#phoneField').val();

  var expression = /^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/i;

  if (expression.test(valid)) {
    console.log("Ok")
  } else {
    console.log("Bad")
  }

}

  var formButton5 = $('#button5');
  formButton5.on("click", functionE);

function functionE(event){

  varn = document.getElementById("firstName").value;
  varl = document.getElementById("lastName").value;
  vare = document.getElementById("email").value;

  var obj = {firstName : varn, lastName : varl, email : vare};

  var myJSONtest = JSON.stringify(obj);

  console.log(myJSONtest);
}