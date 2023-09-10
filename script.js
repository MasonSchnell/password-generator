// Assignment code here

// VARIABLES
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specials = "!#$%&'()*+,-./:;<>=?@[]^_`{|}~";

var combined = "";
var passcode = "";
var passcodeLength = 0;

//FUNCTIONS

// Collects characters selected
// ----------------------------------------------------------
function characterCollector(confirm, type) {
    if (confirm) {
        combined += type;
    }
}

// Prompts user to select preferred charcters and stores them
// ----------------------------------------------------------
function characterSelector() {
    let x = 0;
    while (x < 1) {
        // Asks which characters should be included
        var wantsLowercase = confirm(
            "Do you want lowercase letters in your password?"
        );
        var wantsUppercase = confirm(
            "Do you want uppercase letters in your password?"
        );
        var wantsNumbers = confirm("Do you want numbers in your password?");
        var wantsSpecials = confirm(
            "Do you want special characters in your password?"
        );

        // Adds selected character sets to list of usable characters
        characterCollector(wantsLowercase, lowercase);
        characterCollector(wantsUppercase, uppercase);
        characterCollector(wantsNumbers, numbers);
        characterCollector(wantsSpecials, specials);

        // Checks that at least one character set is selected
        if (combined.length < 1) {
            alert("You must select at least one set of characters.");
        } else {
            x++;
        }
    }
}

// Checks if user input doesn't fit parameters
// ----------------------------------------------------------
function submissionErrorCheck() {
    let i = 0;
    while (i < 1) {
        // Resets errors
        i = 0;
        passcodeLength = prompt("How many characters would you like? (8-128)");

        // Checks if its a whole number
        if (passcodeLength % 1 !== 0) {
            alert("You must enter whole numbers.");
            i--;
        }

        // Checks if it's between 8 and 128 characters
        if (passcodeLength < 8 || passcodeLength > 128) {
            alert("You must enter a valid number of characters. (8-128)");
            i--;
        }

        // Breaks loop if there are no errors
        i++;
    }
}

// Generates password
// ----------------------------------------------------------
function generatePassword() {
    // Resets passcode and selected characters for multiple generation requests
    passcode = "";
    combined = "";

    // Character set selector
    characterSelector();

    // Entry error check
    submissionErrorCheck();

    // Creates random password from slected characters
    for (var count = 0; count < passcodeLength; count++) {
        var random = Math.random();
        var rounded = Math.floor(random * combined.length);
        passcode += combined[rounded];
    }

    // Returns generated password
    return passcode;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
