// Assignment code here

//okay so firstly, i want to create my arrays 
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//i dont remeber what all the special characters are used in the example but this is ENOUGH and will still provide the same 
//functionality just different characters, KAY
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "?", "/"]

//if im understanding correctly we are going to add these characters of these arrays into a much bigger array
var parameterArray = new Array();

//so how exactly are we going to determine if our array was selected???
//thankfully when the user selects OK the value is returned as true! which is how we will determine if they were all selected 


function firstSetPWCriteria() {
    //this alert will only need to show once
    alert("Welcome to the password generator, please select one of the following four options and then enter a length for your final password");
    
    var upperConfirm = confirm("Would you like to add upper case letters? ");
    var lowerConfirm = confirm("Would you like to add lower case letters? ");
    var specialConfirm = confirm("Would you like to add special symbols? ");
    var numberConfirm = confirm("Would you like to add numbers? ");


    //so starting here is where my loop is going to start and where users will get thrown back into if they didnt select anything
    if (upperConfirm == false && lowerConfirm == false && specialConfirm == false && numberConfirm == false) {
    //  alert("Oops, it looks like you didn't select any of the four criteria, PLEASE select at least one! ");
        
    //         confirm("Would you like to add upper case letters? ");
    //         confirm("Would you like to add lower case letters? ");
    //         confirm("Would you like to add special symbols? ");
    //         confirm("Would you like to add numbers? ");

        do {
            alert("Oops, it looks like you didn't select any of the four criteria, PLEASE select at least one! ");
        
            confirm("Would you like to add upper case letters? ");
            confirm("Would you like to add lower case letters? ");
            confirm("Would you like to add special symbols? ");
            confirm("Would you like to add numbers? ");
            //this is what's going to prevent an infinity loop and break us out once any of the criteria are selected
            if (upperConfirm == true || lowerConfirm == true || specialConfirm == true || numberConfirm == true){
                break;
            }
            
        } while (!upperConfirm && !lowerConfirm && !specialConfirm && !numberConfirm )
    } 
    

}



//because if an item is selected then we'd like for our generated password to include that criteria

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
firstSetPWCriteria();