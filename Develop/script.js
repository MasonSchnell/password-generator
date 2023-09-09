// Assignment code here

// VARIABLES
var lowercase = "abcdef";
var uppercase = "ABCDEF";
var numbers = "0123456789";
var specials = "!#$%&'()*+,-./:;<>=?@[]^_`{|}~";

var combined = "";
var passcode = "";

//FUNCTIONS
function doYouWant(confirm, type) {
    if (confirm) {
        combined += type;
    }
}

function generatePassword() {
    // Resets passcode and selected characters for multiple generation requests
    passcode = "";
    combined = "";

    // Character set selector
    let x = 0;
    while (x < 1) {
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
        doYouWant(wantsLowercase, lowercase);
        doYouWant(wantsUppercase, uppercase);
        doYouWant(wantsNumbers, numbers);
        doYouWant(wantsSpecials, specials);

        // Checks that atleast one character set is selected
        console.log("Current amount " + combined);
        if (combined.length < 1) {
            alert("You must select atleast one set of characters.");
        } else {
            x++;
        }
    }

    // --------------------------------------------------------------------
    // Entry Error Checks
    let i = 0;
    while (i < 1) {
        // Resets errors to base state
        i = 0;
        console.log("i is now " + i);
        var passcodeLength = prompt(
            "How many characters would you like? (8-128)"
        );

        // Checks if its a whole number
        if (passcodeLength % 1 === 0) {
            console.log("Valid number.");
        } else {
            alert("You must enter whole numbers.");
            i--;
        }

        // Checks if its between 1 and 180 characters
        if (passcodeLength < 8 || passcodeLength > 128) {
            alert("You must enter a valid number of characters. (8-128)");
            i--;
        }

        // Breaks loop if there are no errors
        i++;
    }
    console.log("Out");
    // --------------------------------------------------------------------

    for (var count = 0; count < passcodeLength; count++) {
        var random = Math.random();
        var rounded = Math.floor(random * combined.length);
        passcode += combined[rounded];
    }

    // console.log("Password made it here: " + passcode);
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
