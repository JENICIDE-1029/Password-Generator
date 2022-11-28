// Assignment code here

//ACCEPTANCE CRITERIA

// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

//do we need loops during this time? I feel as though everything could get accomplished in if then statements 

SO in one component I need to create a constructive function of which will contain a method/function that ensures at least 
one item in the password criteria was entered before moving on

in the next component I need to have another constructive function that defines the limitations of the character length 
or perhaps it's just an if then statement where each criteria needs to be met before moving onto the last step 

okay new plan 

i will have an if then statement that defines if an item was selected among the first set of password criteria which will allow us to fill our password with the various character options selected and if nothing selcted then we need to tell them they need to select one and go through the options again, which i think may contain a loop 

    so if the lowerCase option is OK then we want to generate an array wit

then we have to call our functions 

having the password written into the generator text box which i believe would need to be decalred earlier in the code to be within each item 


okay new new plan

i forgot to add this additional section where everything global is going to be defined and then used towards the end in the final component 

first component is about looping through our various chracter password criteria to ensure that at least one is selected to input for our password parameter and if nothing is selcted then we will alert our user and have them answer each question again

i believe that in a single loop i can verify if something was added along with error checking that something was selected 

so furstly let's create a function 



if ()


then the second component is about looping through our character paramter for lenght and that the entry is in fact a number along with being within 8 and 128 long

third component is about firing off all of our functions and generating our password 

final component is changing the html to display the password within the textbox

    this is where we do the mytitle.textcontent = generatedpassword