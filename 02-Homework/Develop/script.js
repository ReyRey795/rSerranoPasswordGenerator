// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //Will hold random characters needed
  var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-";
  // set password length
  var lengthChart = document.getElementById("slider").value;

  var password = "";

  //create for loop to choose password characters.
  //Math.floor will return the largest integer. Math.random will choose a number between 0 and 1, by multiplying it by the value length you will git a hole number,
  //and because index begins a 0, you will need to subtract by 1 to set everything back by one, otherwise you will never get 0 or you will get a index number that
  //is not in the array.
  for(var i = 0; i < lengthChart; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }
  //Add password to the textbox. What is seen in the box.
  document.getElementById("password").value = password;
  passwordText = password;
}

//Password Criteria options &default


// User selected criterias


//Validity check

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//set default length display to 60 so it split evenly between numbers.

document.getElementById("length").innerHTML = "Length: 60";

//Create a function to set length based on the slide.

document.getElementById("slider").oninput = function(){
  if(document.getElementById("slider").value >0){
    document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
  }
}
