// Assignment Code
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", function () {

  // When button clicked, ask questions through prompt and confirms. While loop has beem used for prompt, prompt to be repeated until valid response given then break and continue with other questions.
  while (true) {
    var characterLengthUser = prompt("How may letters would you like in your password, choose between 8 and 120 characters");
    if (characterLengthUser >= 8 && characterLengthUser <= 120) {
      console.log(characterLengthUser);
      break;
    }
    else { alert("please choose between 8 and 120 characters") }
  }
  var pwSpecialchar = confirm("press ok if you would like special characters in pw");
  console.log(pwSpecialchar)
  var pwNumericchar = confirm("press ok if you would like nubmers in pw");
  console.log(pwNumericchar)
  var pwLowercasechar = confirm("press ok if you would like lower case characters in pw");
  console.log(pwLowercasechar)
  var pwUppercasechar = confirm("press ok if you would like upper characters in pw");
  console.log(pwUppercasechar)


  // Define variables, in array give the choices (items) for the array. 
  var Numberoptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 7, 9];
  var lowerCaseoptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  var upperCaseoptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  var specialCharacters = ["!", "'", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", "!", "'", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/",];

  // Set up function to get a random item from an array
  function getRandomitem(arr) {
    var arrLen = arr.length
    var RandomI = Math.floor(Math.random() * arrLen);
    return arr[RandomI]
  }
  //*This was for testing purpusoses to see if able to successfully get an item from the different arrays */
  //var randomNumber = getRandomitem(Numberoptions);
  //var randomLowerCase = getRandomitem(lowerCaseoptions);
  //var randomUpperCase = getRandomitem(upperCaseoptions);
  //var randomSpecialCharacters = getRandomitem(specialCharacters);

  //console.log(randomNumber+""+randomLowerCase+""+randomUpperCase+""+randomSpecialCharacters);


  // These variable such as canGenerate numbers should get a true/false response based on user response. This is important for developing the password based only on user choices.
  // Variable possiblePW created as empty array at first
  var canGenerateNumbers = pwNumericchar;
  var canGenerateLowerCase = pwLowercasechar;
  var canGenerateUpperCase = pwUppercasechar;
  var canGenerateSpecialCase = pwSpecialchar;
  var possiblePW = [];

// If statements generated. If for example (canGenerateNumbers) gets a true response based on user response then it is possible to get a random item from this array and insert it onto the empty array for possiblePW. If a false response is registered then not possible.
// concat used therefore able to get random item from multiple arrays and put it into empty possiblePW array. Can check with console logging 
  if (canGenerateNumbers) {
    possiblePW = possiblePW.concat(Numberoptions);
  }
  if (canGenerateLowerCase) {
    possiblePW = possiblePW.concat(lowerCaseoptions);
  }
  if (canGenerateUpperCase) {
    possiblePW = possiblePW.concat(upperCaseoptions);
  }
  if (canGenerateSpecialCase) {
    possiblePW = possiblePW.concat(specialCharacters);
  }

  console.log(possiblePW)

  // var initialCharacterofPW will give us 1 random item and put it into the empty array for possiblePW generated from the 4 different arrays with the choices.
  // We want however multiple random items generated from those 4 arrays based on characterLengthUser, therefore for loop used. If user says they want 20 letters for their pw then a random item will be generated 20 times.
  // Finally to put random items generated into one string a variable called finalPW coded for with an enpty string. In line 81 the random items generated are added onto that empty string. The result is 1 string with all the random items which is what we want. 
  var initialCharacterofPW = getRandomitem(possiblePW)
  var finalPW = "";
  for (var i = 0; i < characterLengthUser; i++) {
    var initialCharacterofPW = getRandomitem(possiblePW)
    finalPW = finalPW + initialCharacterofPW;
  }

  console.log(finalPW);
  // once code to derive password sorted need to write password 
  writePassword()

  // Write password to the #password input with function 
  function writePassword() {
    var password = finalPW;
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }
});