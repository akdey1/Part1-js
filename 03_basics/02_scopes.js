// let a = 10 
// const b = 20 
// var c = 30 

function one(){
    const username = "Arnav" 
    function two(){
        const website = "youtube"
        console.log(username);
    } 
    //console.log(website);
    two()  
} 
 
one() 

if(true){
    const username = "arnav"
    if(username === "arnav"){
        const website = "youtube" 
        console.log(username + website);
    } 
    //console.log(website)
} 

//console.log(username) 

console.log(addOne(5));

function addOne(num){
    return num + 1
} 

//const result = addOne(5) 
//console.log(result);

const addTwo = function(num){
    return num + 2; 
} 

console.log(addTwo(5)) 