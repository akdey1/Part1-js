// objects
const mySym = Symbol("my key")

let myUser = {
    name : "Arnav",
    [mySym] : "myKey1",
    age : 18, 
    email : "arnav@google.com",
    isLoggedin : false, 
    lastLogindays : ["monday","tuesday"],
    "full-name" : "AKD"
} 

console.log(myUser);
console.log(myUser["email"]);
console.log(myUser["full-name"]); 
console.log(myUser[mySym]);  

myUser.greeting = function(){
    console.log("hello");
} 

console.log(myUser.greeting());

myUser.greeting2 = function(){
    console.log(`hello my name is ${this.name}`);
}  
console.log(myUser.greeting2());
