// this -> used for to reffer current context values inside a object 

// in browser global object is window 

const user = {
    username : "Arnav", 
    price : 1000, 

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website`); 
    }
} 

user.welcomeMessage() 
user.username = "sam" 
user.welcomeMessage() 

// function chai(){ 
//     let username = "AKD"
//     console.log(this.username); //this doesn't work in normal function  
// } 

// chai()  

const chai = () => {
    let username = "Arnav"
    console.log(this.username);// this will not working here also 
} 

//chai() 

//explicit return 
const addTwo = (num1,num2) => {
    return num1 + num2
} 

//implicit return 
const addThree = (num1,num2,num3) => num1 + num2 + num3

//console.log(addTwo(5,5));
console.log(addThree(5,5,5)); 

//return an object using arrow function 
const returnObject = () => ({
    username : "Arnav kr",
    phNo : 7992286415
}) 

console.log(returnObject())