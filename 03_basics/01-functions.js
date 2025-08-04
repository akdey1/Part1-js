
function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("N");
    console.log("A");
    console.log("V");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Arnav"))
// console.log(loginUserMessage("Arnav"))

function calculateCartPrice(...num1){
    return num1; 
} 

console.log(calculateCartPrice(200, 400,500))

const user = { 
    username : "Arnav", 
    price : 1000
} 

function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`);
} 

//handleObject(user)  

handleObject({
    user : "AKD", 
    Price : 6969
}) 

const myNewArray = [200,400,100,600] 

function returnSecondValue(getArray){
    return getArray[1]
} 

console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200,400,500,1000]));
