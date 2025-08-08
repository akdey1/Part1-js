const userEmail = "a@arnav.ai" 

if(username) { 
  console.log("Got user email");
}else{
    console.log("Dont have user email");
} 

// falsy values 
// false, 0, -0, BigInt 0n, "", undefined, null, NaN  

//truthy values 
// "0",'false'," ",[], {}, function(){} 

// if(userEmail.length === 0){
//   console.log("Array is empty");
// } 
 
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
  console.log("object is empty");
}  

// nullish coalescing operator (??) : null undefined 

// let val1; 
// val1 = 5 ?? 10 -> 5 
// val2 = null ?? 10 -> 10
// val3 = undefined ?? 15 -> 15
// this operator -> ?? is used to handle undefined and null cases 



console.log(val1); 

//ternary operator 
//condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");