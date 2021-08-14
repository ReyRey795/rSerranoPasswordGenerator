// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //Will hold random characters needed
  var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-"
  // set password length
  var length = document.getElementById("slider").value;

  var password = ""

  //create for loop to choose password characters.
  //Math.floor will return the largest integer. Math.random will choose a number between 0 and 1, by multiplying it by the value length you will git a hole number,
  //and because index begins a 0, you will need to subtract by 1 to set everything back by one, otherwise you will never get 0 or you will get a index number that
  //is not in the array.
  for(var i = 0; i <= length; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
