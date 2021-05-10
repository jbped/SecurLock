// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','R','X','Y','Z'];
numbersArray = ['0','1','2','3','4','5','6','7','8','9'];
specialCharactersArray = [" ", "!", "#", "$", "%", "&", "'",'"', "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var userChoices = function () {
  // Create empty choice array
  let choiceArray = [];
  // Ask user for the length of their password min 8 - max 128 characters
  var passwordLength = window.prompt('How long of a password would you like generated? Please keep this within a minimum of 8 to a maximum of 128 characters.')
  // Convert passwordLength to Integer
  passwordLength = parseInt(passwordLength)
  console.log('passwordLength',passwordLength)
  console.log('choiceArray', choiceArray);
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert('Uh-oh! It appears that you attempted to generate a password with ' + passwordLength + ' characters. Unfortunately, this falls outside of the allow password length parameters.');
  }
  var lowerCaseConfirm = window.confirm('Would you like to include LOWERCASE letters in the password? Select "Ok" for Yes or "Cancel" for no.');
  if (lowerCaseConfirm) {
    choiceArray.push(lowercaseArray);
  }
}

var generatePassword = function () {
  // choiceArray = userChoices();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
