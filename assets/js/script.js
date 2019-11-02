var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";
var randoPassword = "";

function generatePassword() {
  
  var pwdLength = parseInt(prompt("How many characters would you like your password to have? (8-128)"));
  var pickedCharacters = "";
  
  if (pwdLength > 7 && pwdLength < 129) {
    alert("You would like " + pwdLength + " numbers in your password.");
  } else if (Number.isNaN(pwdLength)) {
    alert("That is not a number.");
    generatePassword();
  } else {
    alert("You have entered an invalid length.");
    generatePassword();
  }
  var specChar = confirm("Would you like your password to contain special characters?");
  if (specChar === true) {
    pickedCharacters += symbols;
  } else {
    console.log("No symbols.");
  }
  var numbersTrue = confirm("Would you like your password to contain numbers?");
  if (numbersTrue === true) {
    pickedCharacters += numbers;
    console.log(pickedCharacters);
  } else {
    console.log("No numbers.");
  }
  var upper = confirm("Would you like your password to contain uppercase letters?");
  if (upper === true) {
    pickedCharacters += upperCase;
  } else {
    console.log("No uppercase.");
  }
  var lower = confirm("Would you like your password to contain lowercase letters?");
  if (lower === true) {
    pickedCharacters += lowerCase;
  } else {
    console.log("No lowercase.");
  }
  if (numbersTrue === false && lower === false && upper === false && specChar === false){
    alert("Please pick at least one kind of character for your password.");
    generatePassword();
  }
   for (var i = 0; i < pwdLength; i++) {
    var randomCharacters = pickedCharacters[Math.floor(Math.random() * pickedCharacters.length)];
    randoPassword += randomCharacters;
    console.log(randoPassword);
  }
  document.getElementById("passwordArea").innerHTML = randoPassword;
  }

 function myFunction() {
    var copyText = document.getElementById("passwordArea");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + randoPassword);
  }