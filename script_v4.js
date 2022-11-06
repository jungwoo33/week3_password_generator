// Assignment Code
var generateBtn = document.querySelector("#generate"); // select the "Generate Password" button

// let's define initial password characters and length
// then, I will update "password_chars" & total "password_length" from the user input prompts
// var password_chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var password_chars = ""; // initialize with empty characters
var char_length = 0; // initial character length
var password_length = 0; // initial length


// let's create a prompt window and get some information from the user:
function jw_prompt_1(){
    var user_option = prompt("Do you want to include numbers (Type Y/N)?");
    var add_chars = ""
    if(user_option === "Y" || user_option === "y"){
        var add_chars = "0123456789"
    }
    return add_chars;
}
function jw_prompt_2(){
    var user_option = prompt("Do you want to include lower cases (Type Y/N)?");
    var add_chars = ""
    if(user_option === "Y" || user_option === "y"){
        var add_chars = "abcdefghijklmnopqrstuvwxyz"
    }
    return add_chars;
}
function jw_prompt_3(){
    var user_option = prompt("Do you want to include upper cases (Type Y/N)?");
    var add_chars = ""
    if(user_option === "Y" || user_option === "y"){
        var add_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    return add_chars;
}
function jw_prompt_4(){
    var user_option = prompt("Do you want to include special characters (Type Y/N)?");
    var add_chars = ""
    if(user_option === "Y" || user_option === "y"){
        var add_chars = "!@#$%^&*()"
    }
    return add_chars;
}
function jw_prompt_5(){
    var pass_length = 0;
    pass_length = prompt("How many characters do you want in your password?");
    return Number(pass_length); // convert string to Number, and return it.
}
function jw_error(){
    // prompt("Selected criteria is less than your password length. Please try it again.");
    alert("Selected criteria is less than your password length. Please try it again.");
}
// End of prompt inputs ==================================================== //

// now, let's create a random password generating function using for loop:
function generate_password(){
    var password_0 = "" // initialize
    for(var i=1; i<=password_length; i++){
      // find a random position in "password_chars"
      // then, add to "password"
      var random_position = Math.floor(Math.random()*password_chars.length);
      password_0 += password_chars.substring(random_position, random_position+1);
    }
    return password_0;
}
  
// Write password to the #password input ================================== //
function write_password() {
    for(var i=1;i<=3;i++){ // try 3 times !!!
        // re-initialize global variables
        password_chars = ""; // initialize with empty characters
        char_length = 0; // initial character length
        password_length = 0; // initial length
        
        password_chars += jw_prompt_1(); // numbers
        password_chars += jw_prompt_2(); // lower cases
        password_chars += jw_prompt_3(); // upper cases
        password_chars += jw_prompt_4(); // special cases
        password_length = jw_prompt_5(); // reset password_length from the user input:

        // before generating password, check wheter the given criteria is correct or not.
        char_length = password_chars.length;
        if(char_length < password_length){ // call error message, and go to the next iteration
            jw_error();
            //alert("Selected criteria is less than your password length. Please try it again.");
            continue;
        }else{ // if char_length >= password_length, generate password.
            // call "generatePassword", so you have a new password now
            var password = generate_password();

            // substitute the original "password" to a new value
            var passwordText = document.querySelector("#password");
            passwordText.value = password;
            break; // exit the loop
        }        
    }
}

// Add event listener to generate button
// When you "click" the button, call "writePassword" function, which will show (write) the generated password
generateBtn.addEventListener("click", write_password);
