# Develop: Refactoring challenge 1
## Technology Used 

| Technology Used         | Resource URL            | 
| ------------- |:-------------:| 
| HTML    | [https://github.com/eogbeide424/Challenge-3-Password
| CSS     | [https://github.com/eogbeide424/Challenge-3-Password/blob/main/Develop/style.css
| Javascript  | https://github.com/eogbeide424/Challenge-3-Password/tree/main/Assets/javascript 
   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    

## Description 

[Visit the Deployed Site]: https://eogbeide424.github.io/Challenge-3-Password/

On this particular project we had to create a random password generator these are a few code lines I used to somewhat achieved it.
## Code Snippet
< // pick your characters confirm window
  function charTypes() {
     lower = confirm("use lowercase characters?");
     upper= confirm('Use uppercase characters?');
     num= confirm('include numbers?');
     symbol= confirm('include special characters?');
     return{lower,upper,num,symbol};
  }

## Troubles I faced
Alot of trouble I ran into one in particular is not knowing I would need empty variables to push the password to I realize in this project I hadn't quite done that and I probably might fail but this deep dive into objects and if else statements proved I have a long way to go but I came further than what I thought I could.

## Code Snippett

offPass = "";
    if (charType.lower) offPass+= userPass.lowerCase.join("");
    if (charType.upper) offPass+= userPass.upperCase.join("");
    if (charType.num) offPass+= userPass.numArr.join("");
    if (charType.symbol) offPass+= userPass.symbolArr.join("");

    var password = [""];
    for(var i =0; i=userPass.passLength;i++) {
      var index =Math.floor(Math.random()* offPass.length);
      index.password = password;
    }
If I had more time I probbably would of figured this one out but time is dwindling to turn it in I'm going to keep working on this until I get it.

![Alt text](Assets/Screenshot%202023-03-31%20013857.png)

## Author Info

```md
### Eugene Ogbeide


* [LinkedIn]https://www.linkedin.com/in/eugene-ogbeide-385087219/
* [Github]((https://github.com/eogbeide424?tab=repositories)
```
## Credits

https://www.w3schools.com/js/js_if_else.asp
https://www.w3schools.com/js/js_loop_for.asp
https://www.w3schools.com/jsref/jsref_parseint.asp
---https://www.w3schools.com/js/js_htmldom_eventlistener.asp
https://www.w3schools.com/js/js_objects.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event
https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.