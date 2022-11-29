// Assignment code here



//so how exactly are we going to determine if our array was selected???
//thankfully when the user selects OK the value is returned as true! which is how we will determine if they were all selected 


// function firstSetPWCriteria() {
//     //this alert will only need to show once
//     alert("Welcome to the password generator, please select one of the following four options and then enter a length for your final password");
    
//     //this is inputting the result into a variable while also displaying it to users
//     var upperConfirm = confirm("Would you like to add upper case letters? ");
//     var lowerConfirm = confirm("Would you like to add lower case letters? ");
//     var specialConfirm = confirm("Would you like to add special symbols? ");
//     var numberConfirm = confirm("Would you like to add numbers? ");


//     //so starting here is where my loop is going to start and where users will get thrown back into if they didnt select anything
//     if (upperConfirm == false && lowerConfirm == false && specialConfirm == false && numberConfirm == false) {

//         while (upperConfirm == false && lowerConfirm == false && specialConfirm == false && numberConfirm == false) {
           
//             alert("Oops, it looks like you didn't select any of the four criteria, PLEASE select at least one! ");
        
//             var upperConfirm = confirm("Would you like to add upper case letters? ");
//             var lowerConfirm = confirm("Would you like to add lower case letters? ");
//            var specialConfirm = confirm("Would you like to add special symbols? ");
//             var numberConfirm = confirm("Would you like to add numbers? ");
//             //this is what's going to prevent an infinity loop and break us out once any of the criteria are selected
//             if (upperConfirm == true || lowerConfirm == true || specialConfirm == true || numberConfirm == true){
//                 break;
//             }
            
//         } 
//     } 

  
    

// }

//in this section is where we define the length of our password
function PWLengthCriteria (){
    //we need to ensure that what is entered is between 8 and 128 characters and that there is no letters used
    passwordLength = prompt("Enter your desired password length from 8-128 characters, make sure to only type numbers!");

    if (passwordLength == "" || passwordLength < 7 || passwordLength > 129 || isNaN(passwordLength)) {
        alert("Listen buddy, I said to enter in a number from 8-128 and to only use numbers! ")
        while (passwordLength == "" || passwordLength < 7 || passwordLength > 129 || isNaN(passwordLength)) {
            prompt("Enter your desired password length from 8-128 characters, make sure to only type numbers!");
                if (passwordLength < 7 || passwordLength > 129) {
                    break;
                }

        }
    } 

}




//in this section is where i need to actually have the password generate
//i believe i have to create an array of which will get all of the characters specified in our previous functions 
//this is when we use math.floor and math.random multiplied by the length specified from our user
function generatePassword(){
PWLengthCriteria();

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "?", "/"]

//if im understanding correctly we are going to add these characters of these arrays into a much bigger array
var parameterArray = [];
var passwordLength = 0;

//this loop here is what allows us to fill up our password parameter array with things that were actually selected
while(parameterArray.length === 0) {
  if(confirm("Would you like to add uppercase letters?")) {
    parameterArray = parameterArray.concat(upperCaseArray);
  }
  if(confirm("Would you like to add lowercase letters?")) {
    parameterArray = parameterArray.concat(lowerCaseArray);
  }
  if(confirm("Would you like to add numbers?")) {
    parameterArray = parameterArray.concat(numbersArray);
  }
  if(confirm("Would you like to add special characters?")) {
    parameterArray = parameterArray.concat(specialCharArray);
  }

  if(parameterArray.length === 0) {
    alert("You must choose at least one type of character");
  }
}

for (var i = 0; i < passwordLength; i++) {
    password += parameterArray[Math.floor(Math.random() * (parameterArray.length -1))]
   }

return password;
}


//in this section we will fire off all of our functions


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

