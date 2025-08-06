(function chai(){
    console.log("connected"); 
})(); 
// why we use iife -> to remove the global pollution like the viariables which are declared globally. 
( (name) => {
    console.log(`${name} is working`)
}) ("Arnav") 


