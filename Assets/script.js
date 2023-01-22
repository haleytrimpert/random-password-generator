// Assignment Code
var generateBtn = document.querySelector("#generate");
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";


// Write password to the #password input
function generatePassword() { 
  var randomCharacters=""
  var passwordLength=window.prompt("How many characters will your password be?");
  if(passwordLength<8){
    alert("Too short");
    return;
  }
  if(passwordLength>128){
    alert("Too long");
    return;
  }
  var needSpecialCharacters=window.confirm("Do you need special characters?");
  var needUpperCase=window.confirm("Do you need upper case letters?");
  var needLowerCase=window.confirm("Do you need lower case letters?");
  var needNumbers= window.confirm("Do you need numbers?");

  console.log(passwordLength, needSpecialCharacters, needUpperCase, needLowerCase, needNumbers)

  var allCharacters = "" 
  if(needLowerCase){
    allCharacters+=lowerCase; 
  }
  if(needUpperCase){
    allCharacters+=upperCase;
  }
  
  if(needNumbers){
    allCharacters+=number;
  }
  
 if(needSpecialCharacters){
    allCharacters+=special;
  }

  for(var i=0; i<passwordLength; i++){
    var randomIndex=Math.floor(Math.random()*allCharacters.length);
  randomCharacters=randomCharacters + allCharacters[randomIndex];
  console.log(randomCharacters);
  }

 
  return randomCharacters;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
