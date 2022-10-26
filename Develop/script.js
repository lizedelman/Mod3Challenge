/* Steps to complete 
1. On click I will have a series of prompts and have to store the input.
  a. prompt for length
  b. prompt to include lowercase
  c. prompt to include uppercase
  d. prompt to include numeric
  e. prompt to include special characters
2. Save variables that include lists of the types above
3. Validate answers at each step
4. Generate password
*/

// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowAlph = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let spec1 = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
let hiAlph = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function that is called once user clicks red button
// ISSUE: doesn't give user a chance to correct wrong answer. Should I make it simple and leave out those options?
function genLength() {
  let pLeng = prompt("Choose a password length between 8 and 128");
  console.log("password length is " + pLeng);
  if (pLeng < 8 || pLeng > 128) {
    alert("You must choose a number that is higher than 8 and less than 128");
    console.log(pLeng);
  } else if (isNaN(pLeng)) {
    alert("You must choose a number > 8 or < 128.");
  } else {
    alert("Your password length is " + pLeng);
  }
}

// Function to choose other characters
// ISSUE: How to move through to next character options
function generatePassword() {
  let pLeng = parseInt(prompt("Choose a password length between 8 and 128"));
  console.log("password length is " + pLeng);
  if (pLeng < 8 || pLeng > 128) {
    alert("You must choose a number that is higher than 8 and less than 128");
    console.log(pLeng);
  } else {
    let pUpper = confirm(
      "To include upper case letters in your password click 'ok,' otherwise click 'cancel.'"
    );
    let pLower = confirm(
      "To include lower case letters in your password click 'ok,' otherwise click 'cancel.'"
    );
    let spec = confirm(
      "To include special characters in your password click 'ok,' otherwise click 'cancel.'"
    );
    let num = confirm(
      "To include numbers in your password click 'ok,' otherwise click 'cancel.'"
    );

    if (!pUpper && !pLower && !spec && !num) {
      alert("You must make a selection.");
    } else if (pUpper && pLower && spec && num) {
      choices = hiAlph.concat(lowAlph, spec1, numeric);
      console.log(choices);
    }
    //Record the various options of the above choices same as we did above.
  }
  var empty = [];
  for (var i = 0; i < pLeng; i++) {
    var picked = choices[Math.floor(Math.random() * choices.length)];
    empty.push(picked);
  }
  console.log(empty);
  var pwdstring = empty.join("");
  writePassword(pwdstring);
  return pwdstring;
}

// Write password to the #password input
function writePassword(pwdstring) {
  // let password = generatePassword();
  // let passwordText = document.querySelector("#password");
  // passwordText.value = password;
  document.getElementById("password").textcontent = pwdstring;
}

// Add event listener to generate button.
generateBtn.addEventListener("click", function () {
  pwdstring = generatePassword();
  document.getElementById("password").placeholder = pwdstring;
});
