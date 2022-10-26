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
var string = "abcdefghijklmnopqrstuvwxyz"; //to upper
var numeric = "0123456789";
var punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// original code: generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", () =>
  prompt("Choose a password length between 8 and 128")
);
