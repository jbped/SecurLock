// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Standard Choice Arrays to be Addded to choiceArray
lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','R','X','Y','Z'];
numbersArray = ['0','1','2','3','4','5','6','7','8','9'];
specialCharactersArray = [" ", "!", "#", "$", "%", "&", "'",'"', "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];


var generatePassword = function () {
  while (true) {
    var passwordLength = window.prompt('How long of a password would you like generated? Please keep this within a minimum of 8 to a maximum of 128 characters.');
    // Convert passwordLength to Integer
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert('Uh-oh! It appears that you attempted to generate a password with ' + passwordLength + ' characters. Unfortunately, this falls outside of the allowed password length parameters.');   
    }
    else {
      passwordLength = parseInt(passwordLength);
      break;
    }
  }
  
  // Create empty choice array
  let choiceArray = [];
  let reqCharArray = [];
  let reqCharChoices = 0;
  console.log('choiceArray', choiceArray);
  console.log('passwordLength',passwordLength);
  
  while (true) {
    // Lowercase Confirmation if true, increases reqCharChoices value by one, merges blank choiceArray with lowercaseArray, adds one random character from the lowercaseArray to the reqCharArray
    var lowerCaseConfirm = window.confirm('Would you like to include LOWERCASE letters in the password? Select "Ok" for Yes or "Cancel" for no.');
      if (lowerCaseConfirm) {
        // add 1 to reqCharChoices
        reqCharChoices++;
        // Add lowercaseArray to choiceArray
        choiceArray.push(...lowercaseArray);
        // Add a single random character from lowercaseArray to reqCharArray
        reqCharArray.push(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
        // Console log new reqCharArray 
        console.log('lowercaseConfirm === true',reqCharArray)
        // Console log new choiceArray 
        console.log('choiceArray', choiceArray);
      }
    // UpperCase Confirmation if true, increases reqCharChoices value by one, merges blank choiceArray with uppercaseArray, adds one random character from the uppercaseArray to the reqCharArray
    var upperCaseConfirm = window.confirm('Would you like to include UPPERCASE letters in the password? Select "Ok" for Yes or "Cancel" for no.');
      if (upperCaseConfirm) {
        // add 1 to reqCharChoices
        reqCharChoices++;
        // Add uppercaseArray to choiceArray
        choiceArray.push(...uppercaseArray);
        // Add a single random character from uupercaseArray to reqCharArray
        reqCharArray.push(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
        console.log('uppercaseConfirm === true',reqCharArray)
        console.log('choiceArray', choiceArray);
      }
    // numbers Confirmation if true, increases reqCharChoices value by one, merges blank choiceArray with numbersArray, adds one random character from the numbersArray to the reqCharArray
    var numberConfirm = window.confirm('Would you like to include NUMBERS in the password? Select "Ok" for Yes or "Cancel" for no.');
      if (numberConfirm) {
        // add 1 to reqCharChoices
        reqCharChoices++;
        // Add numbersArray to choiceArray
        choiceArray.push(...numbersArray);
        // Add a single random character from numbersArray to reqCharArray
        reqCharArray.push(numbersArray[Math.floor(Math.random() * numbersArray.length)]);
        console.log('numberConfirm === true',reqCharArray)
        console.log('choiceArray', choiceArray);
      }
    // specialCharacters Confirmation if true, increases reqCharChoices value by one, merges blank choiceArray with specialCharactersArray, adds one random character from the specialCharactersArray to the reqCharArray
    var specialCharactersConfirm = window.confirm('Would you like to include SPECIAL CHARACTERS in the password? Select "Ok" for Yes or "Cancel" for no.');
      if (specialCharactersConfirm) {
        // add 1 to reqCharChoices
        reqCharChoices++;
        // Add specialCharactersArray to choiceArray
        choiceArray.push(...specialCharactersArray);
        // Add a single random character from specialCharactersArray to reqCharArray
        reqCharArray.push(specialCharactersArray[Math.floor(Math.random() * specialCharactersArray.length)]);
        console.log('specialCharactersConfirm === true',reqCharArray)
        console.log('choiceArray', choiceArray);
      }
    // If any of the Confirms are true it will move to the password compiler
    if (lowerCaseConfirm || upperCaseConfirm || numberConfirm || specialCharactersConfirm) {
      break;
    }
    // If none of the Confirms where answered true, repeat.
    else {
      window.alert('Please select at least one character type to be included in the password.');
    }
  }

  var randomGen = [];

  for(var i = 0; i < (passwordLength - reqCharChoices); i++) {
    randomGen.push(choiceArray[Math.floor(Math.random() * choiceArray.length)]);
    console.log("randomGen pre-join with reqChar", randomGen);
  }

  randomGen.push(...reqCharArray);
  console.log("reqCharArray join with randomGen", randomGen);
  
  // Shuffle function, passthrough array => will be shuffled
  function shuffle(arr) {
    var j, tempArr, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tempArr = arr[i];
        arr[i] = arr[j];
        arr[j] = tempArr;
    }
    return arr;
  }
  // Passthrough randomGen in shuffle
  randomGen = shuffle(randomGen);
  console.log('Shuffled randomGen',randomGen)

  // Return randomGen as a string
  return randomGen.join('');
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);