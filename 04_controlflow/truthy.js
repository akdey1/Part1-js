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
  console.log("object ie empty");
}