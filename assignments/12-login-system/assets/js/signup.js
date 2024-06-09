var username = document.getElementById("name");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var signupBtn = document.getElementById("signupBtn");
var allUsersData = getUserData(); // This function is defined in storage.js

signupBtn.addEventListener("click", function () {
  var userData = {
    name: username.value,
    email: email.value,
    pass: pass.value,
  };
  if (validateInput()) {
    saveUserData(userData); // Also defined in storage.js
    console.log("Valid Data");
  } else {
    // TODO add a warning hidden paragraph and show it in this case
    console.log("Please enter valid data");
  }
});

function validateUsername() {
  var reg = /^[A-Z][a-z.]{3,15}$/;
  return reg.test(username.value);
}

function validateEmail() {
  var reg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return reg.test(email.value);
}

function validatePass() {
  var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  return reg.test(pass.value);
}

function validateInput() {
  var validinput = validateEmail() && validateUsername() && validatePass();
  return validinput;
}
