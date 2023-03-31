// Assignment Code
var generateBtn = document.querySelector("#generate");
var userPass = {
 lowerCase : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],

 upperCase: ['A','B','C','D','E','F','G','H','I','J','K','L','M','O','P','Q','R','S','T','U','V','W','X','Y','Z'],

 numArr: ['0','1','2','3','4','5','6','7','8','9'],

 symbolArr: ['~','!','@','#','$','%','^','&','*','_','-','=','+','(',')','.','<','>',';',':','?','/','{','}','|','\\'],
 passLength: 0,

}
// how many characters propmt
function selectPass(){
  var userInput=window.prompt('how many characters do you want min 8'); 
    if (userInput <=8||userInput>= 129 ) {
     return false;
    alert("need minimum of 8 characters");
    } else {
      userPass.passLength =parseInt(userInput) // this should turn the string into an intergerhttps://www.w3schools.com/jsref/jsref_parseint.asp
    }
    
    }
      
    // pick your characters confirm window
  function charTypes() {
     lower = confirm("use lowercase characters?");
     upper= confirm('Use uppercase characters?');
     num= confirm('include numbers?');
     symbol= confirm('include special characters?');
     return{lower,upper,num,symbol};

  }
    selectPass();
  var charType = charTypes();
  function passwordGenerator() {
    
    offPass = "";
    if (charType.lower) offPass+= userPass.lowerCase.join("");
    if (charType.upper) offPass+= userPass.upperCase.join("");
    if (charType.num) offPass+= userPass.numArr.join("");
    if (charType.symbol) offPass+= userPass.symbolArr.join("");

    var password = [""];
    for(var i =0; i=userPass.passLength;i++) {
      var index =Math.floor(Math.random()* offPass.passLength);
      index.password = password;
    }
    console.log(password)
    return password;

  }

  
  

// Write password to the #password input
function writePassword() {
 
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");
     passwordText.value = password;


  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
