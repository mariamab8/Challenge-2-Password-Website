// Assignment Code
var generateBtn = document.querySelector("#generate");
// Creating password object


// Array to hold lowercase letters
 var pwdLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t","u", "v", "w", "x", "y","z"] ;

// Array to hold uppercase letters
var pwdUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"]

// Array to hold numbers
 var pwdNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  // Array to hold special characters
var pwdSpecialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "`", "-", "_", "=", "+", "?", "/", ".", ">", "<"]

// Write password to the #password input according to specific requirements
function writePassword() {
  var length = prompt(" Choose password length between 8 and 128 characters") 
  parseInt(length)
  var askNumeric = prompt (" Do you want your password to include numbers")
  var askLowercase = prompt (" Do you want your password to include lower case letters")
  var askUppercase = prompt (" Do you want your password to include upper case letters")
  var askSpecialCharacters = prompt ("Do you want your password to include special characters")

  if ((length < 8) || (length > 128)) {
  alert (" Choose number between 8 and 128") }
  else if ((!askNumeric) && (!askLowercase) && (!askUppercase) && (!askSpecialCharacters)) 
  {
  alert ("Must choose one type")
  }

  var combo = [];
  var password = "";
  function generatePassword(){ 
  
    if (askNumeric) {
    for  ( var i of pwdNumeric)
    combo.push(i);
    };

    if (askLowercase)  {
    for ( var i of pwdLowercase)
    combo.push(i);
    };

    if (askUppercase) {
    for ( var i of pwdUppercase)
    combo.push(i);
    };

    if (askSpecialCharacters) {
    for ( var i of pwdSpecialCharacters)
    combo.push(i);
    };

    console.log(combo) 

  }
 generatePassword()

 

  for (var i = 0; i < length; i++) {
  password += combo[Math.floor(Math.random() * combo.length)];
  
  
  }
  
console.log(password)
  // call generatePassword function
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
