// if 

if(true){ 
    console.log("connected");
} 

// check if no is odd or even 
let number = 3
const checkEven = (number) => {
    if(number % 2 !== 0){ 
        console.log("the number is odd");
    }else{ 
        console.log("number is even");
    } 
};
checkEven(number)

// there are some more operators in the if else :
// <,>,<=,>=,!==,==,===,!= 

// check temperature 
const temperature = 41 
function checkTemp(temperature){
    if(temperature === 41){
        console.log("temperature is under control");
    }else{
        console.log("temperature is more");
    }
}
checkTemp(temperature) 

const balance = 1000 
if(balance > 500) return true 
  