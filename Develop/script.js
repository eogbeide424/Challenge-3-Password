// Assignment Code
var generateBtn = document.querySelector("#generate");
var userPass = {
 var: lowerCase = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'],

 var: upperCase = ['A,B,C,D,E,F,G,H,I,J,K,L,M.O,P,Q,R,S,T,U,V,W,X,Y,Z'],

 var: numArr =['0,1,2,3,4,5,6,7,8,9'],

 var: symbolArr= ['~,!,@,#,$,%,^,&,*,_,-,=,+,(,),.,<,>,:,;,?,/,{,},|,\,'],
 var: passLength= userInput

}
// userPass series of prompts
function selectPass(){
  var userInput=window.prompt('how many characters do you want min 8'); {
    if (!userInput <=8||!userInput>= 129 ) {
      alert("need minimum of 8 characters");
    return false;
    } else {
      passLength=userInput.valueOf
    }
    
    }
  }
  
  
  

// Write password to the #password input
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
document.getElementById('generate').addEventListener('click',writePassword())
