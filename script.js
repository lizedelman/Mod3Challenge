// Assignment Code - Arrays
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

// Function to choose other characters
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
    } else if (!pUpper && pLower && spec && num) {
      choices = lowAlph.concat(spec1, numeric);
    } else if (!pUpper && !pLower && spec && num) {
      choices = spec1.concat(numeric);
    } else if (!pUpper && !pLower && !spec && num) {
      choices = numeric;
    } else if (pUpper && pLower && spec && !num) {
      choices = hiAlph.concat(lowAlph, spec1);
    } else if (pUpper && pLower && !spec && !num) {
      choices = lowAlph.concat(pUpper, numeric);
    } else if (pUpper && !pLower && !spec && !num) {
      choices = hiAlph;
    } else if (pUpper && !pLower && spec && num) {
      choices = hiAlph.concat(numeric);
    } else if (!pUpper && pLower && !spec && num) {
      choices = lowAlph.concat(numeric);
    } else if (!pUpper && !pLower && spec && !num) {
      choices = spec1;
    }
  }

  let empty = [];
  for (let i = 0; i < pLeng; i++) {
    let picked = choices[Math.floor(Math.random() * choices.length)];
    empty.push(picked);
  }
  console.log(empty);

  //Makes the password a string instead of array
  let pwdstring = empty.join("");
  writePassword(pwdstring);
  return pwdstring;
}

// Write password to the #password input
function writePassword(pwdstring) {
  document.getElementById("password").textcontent = pwdstring;
}

// Add event listener to generate button.
generateBtn.addEventListener("click", function () {
  pwdstring = generatePassword();
  document.getElementById("password").placeholder = pwdstring;
});
