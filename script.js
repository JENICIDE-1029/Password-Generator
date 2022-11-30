// Assignment code here

//in this function is where we define the length of our password
function PWLengthCriteria() {
    //inserting the users response into a variable for us to record
    passwordLength = prompt("Enter your desired password length from 8-128 characters, make sure to only type numbers!");

    //now i'm checking to see if what was entered meets the following criteria that would destroy the functionality of our code: if nothing was entered, smaller than 8, bigger than 128, and entering anything other than numbers
    if (passwordLength == "" || passwordLength < 7 || passwordLength > 129 || isNaN(passwordLength)) {
         //when this criteria is met then we need to alert the user and remind them not to enter either of these mistakes
         alert("Listen buddy, I said to enter in a number from 8-128 and make sure to only use numbers! ")
         //this is where we loop our user into finally entering a valid entry
         while (passwordLength == "" || passwordLength < 7 || passwordLength > 129 || isNaN(passwordLength)) {
             //the prompt for their re-entry
             passwordLength= prompt("Enter your desired password length from 8-128 characters, make sure to only type numbers!");
             //we need to ensure that only when ALL criteria has been met that we allow oour user to move on
             if (passwordLength < 7 && passwordLength > 129 && passwordLength != "" && !isNaN(passwordLength)){
                break;
             }

        }
    }

}

//in this section is where i need to actually have the password generate
function generatePassword() {

    //since we have a global variable for our final array, we essentially dont need these filler arrays to be global because theylll be logged within a global 
    var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "?", "/"]

    //i really want there to be a nice little welcome to our user
    alert("Welcome to the Password Generator! Answer just 5 simple questions and you'll have a super-strong password in moments!")

    //this loop here is what allows us to fill up our password parameter array with things that were actually selected
    while (parameterArray.length === 0) {
        if (confirm("Would you like to add uppercase letters? ex: ABC")) {
            parameterArray = parameterArray.concat(upperCaseArray);
        }
        if (confirm("Would you like to add lowercase letters? ex: abc")) {
            parameterArray = parameterArray.concat(lowerCaseArray);
        }
        if (confirm("Would you like to add numbers? ex: 012")) {
            parameterArray = parameterArray.concat(numbersArray);
        }
        if (confirm("Would you like to add special characters? ex: %&$")) {
            parameterArray = parameterArray.concat(specialCharArray);
        }
        //if nothing is selected then we need to make sure that we remind the user of this and have them loop through and pick through the options
        if (parameterArray.length === 0) {
            alert("You must choose at least one type of character, ya goose :P");
        }
    }

    //this function sets off and grabs the desired length from our user
    PWLengthCriteria();

    //thank goodness the passwordlength variable was made globally because it means we can use it among our functions without any errors of variables being used outside of their range
    //this loop goes through the array created by the previous while loop and depending on the length entered by the user will be used as our end point 
    for (var i = 0; i < passwordLength; i++) {
        //so to our password variable we are simply just adding the items within our array (ex:parameterarray[0]) however we are doing some maipulation to our index to randomly select from our array
        password += parameterArray[Math.floor(Math.random() * (parameterArray.length - 1))]
     
    }
    //once we are done we need to return our final generated password 
    return password;
}

// Get references to the #generate element
    var generateBtn = document.querySelector("#generate");

    //if im understanding correctly we are going to add these characters of these arrays into a much bigger array
    var parameterArray = [];
    var passwordLength = 0;
    var password = "";

// Write password to the #password input
function writePassword() {
    //this variable is being input with the function result for generating our password
    var password = generatePassword();
    //this next variable is being input with an id from our html that is the text that displays within a box for our users to see
    var passwordText = document.querySelector("#password");

    //now we manipulate the variables value and insert our password that we just finished generatinggg
    passwordText.value = password;
}


// Add event listener to generate button
//when this button is clicked then we will fire off the function for our writepassword that includes the generatepassword function and within that has the pwlength criteria function
generateBtn.addEventListener("click", writePassword);

