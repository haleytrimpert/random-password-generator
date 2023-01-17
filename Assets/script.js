// Assignment Code
var generateBtn = document.querySelector("#generate");
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var number = "1234567890"

// Write password to the #password input
function generatePassword() { 
  window.prompt("How many characters will your password be?")
  window.prompt("Do you need special characters?")
  window.prompt("Do you need upper case letters?")
  window.prompt("Do you need lower case letters?")
  window.prompt("Do you need numbers?")
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
