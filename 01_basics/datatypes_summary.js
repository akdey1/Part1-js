// primitive data types : 
// 7 types : String, Number, boolean, null, undefined, Symbol, BigInt

// Reference (Non primitive) types :
// Arrays, Objects, functions  

const heros = ["ironman","hulk","superman"]; 
let myObj = {
    name: "Arnav", 
    age: 21,
} 

const myFunc = function(){
   console.log("hi");
} 
myFunc(); 
console.log(typeof heros);

let user1 = "hello i am Arnav" 
let user2 = user1 
user2 = "hello i am Arnav kumar dey" 

console.log(user1); 
console.log(user2);

let myObjUser1 = {
    email : "deyarnav847@gmail.com", 
    age : 21, 
};  

let myObjUser2 = myObjUser1; 
myObjUser2.email = "deyarnav874@gmail.com" 

console.log(myObjUser1);
console.log(myObjUser2);
