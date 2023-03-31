# Develop: Refactoring challenge 1
## Technology Used 

| Technology Used         | Resource URL            | 
| ------------- |:-------------:| 
| HTML    | [https://github.com/eogbeide424/Challenge-3-Password
| CSS     | [https://github.com/eogbeide424/Challenge-3-Password/blob/main/Develop/style.css
   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    

## Description 

[Visit the Deployed Site]: 

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


## Author Info

```md
### Eugene Ogbeide


* [LinkedIn]https://www.linkedin.com/in/eugene-ogbeide-385087219/
* [Github]((https://github.com/eogbeide424?tab=repositories)
```
## Credits

(https://www.w3schools.com/html/html5_semantic_elements.asp).
(https://www.w3schools.com/tags/tag_hn.asp)
https://www.w3schools.com/html/html_attributes.asp

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.