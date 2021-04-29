// Assignment Code
let randomizerArray = [];
let lowerLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X ", "Y", "Z"];
let numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharactersArray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "[", "^", 
"_", "`", "{", "|", "}", "~"];
let passwordLength;
var newPassword = "";
let userSelection;
let validation;
let validated = false;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLengthPrompt(); //<--------------------------------------------------------------------
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompts the user how long of a password they want between 8 and 128 characters. Reprompting if not acceptable value
function passwordLengthPrompt() {
  passwordLength = parseInt(prompt("How long would you like your password to be (Min: 8 Max: 128)"));
  if (passwordLength === null || passwordLength === "" || passwordLength < 8 || 128 < passwordLength || !passwordLength) {
    passwordLengthPrompt();
  } 
  lowerCaseLettersPrompt();
}

//Prompts the user if they would like to add lower case letters to their password
function lowerCaseLettersPrompt() {
  randomizerArray = [];
  userSelection = [0, 0, 0, 0];
  let wantLowerCase = confirm("Would you like your password to include lowercase letters?");
  if (wantLowerCase === true) {
    randomizerArray = randomizerArray.concat(lowerLettersArray);
    userSelection[0] = 1;
  }
  upperCaseLettersPrompt();
}

//Prompts the user if they would like to add upper case letters to their password
function upperCaseLettersPrompt() {
  let wantUpperCase = confirm("Would you like your password to include uppercase letters?");
  if (wantUpperCase === true) {
    randomizerArray = randomizerArray.concat(upperLettersArray);
    userSelection[1] = 1;
  }
  numbersPrompt();
}

//Prompts the user if they would like to add numbers to their password
function numbersPrompt() {
  let wantNumbers = confirm("Would you like your password to include numbers?");
  if (wantNumbers === true) {
    randomizerArray = randomizerArray.concat(numbersArray);
    userSelection[2] = 1;
  }
  specialCharactersPrompt();
}

//Prompts the user if they would like to add special characters to their password
function specialCharactersPrompt() {
  let wantSpecialCharacters = confirm("Would you like your password to include special characters?");
  if (wantSpecialCharacters === true) {
    randomizerArray = randomizerArray.concat(specialCharactersArray);
    userSelection[3] = 1;
  }
  //If none of the prompts are selected then the user is brought back to the beginning
  if (randomizerArray.length === 0) {
    passwordLengthPrompt();
  }
}

//Generates a random password based on the user criteria
function generatePassword() {
  newPassword = "";
  validated = false;
  for (i = 0; i < passwordLength; i++) {
  let randomCharacter = Math.floor(Math.random() * randomizerArray.length);
  newPassword = newPassword.concat(randomizerArray[randomCharacter]);
  }
  if(validated === false) {
    validatePassword();
  }
  return newPassword;
}

function createPassword() {
  
}

//Validates that the password fits the user selected criteria otherwise generates a new password
function validatePassword() {
  validation = [0, 0, 0, 0];
  for (var c of newPassword) {
    if (lowerLettersArray.includes(c)){
      validation[0] = 1;
    } else if (upperLettersArray.includes(c)) {
      validation[1] = 1;
    } else if (numbersArray.includes(c)) {
      validation[2] = 1;
    } else if (specialCharactersArray.includes(c)){
      validation[3] = 1;
    }
  }
  if (userSelection.every((v,i) => v === validation[i])){
    validated = true;
  } else {
    generatePassword();
  }
}