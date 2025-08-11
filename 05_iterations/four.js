//to traverse objects we need to use for in 

const myObject = {
    js : "javascript", 
    cpp : "c++", 
    rb : "ruby", 
} 

// for (const key in myObject) {
//     console.log(key) 
// } 

for (const key in myObject) {
    console.log(`${key} shortcut is ${myObject[key]}`) 
} 

const programming  = ["js", "java", "python"] 

for (const key in object) {
    console.log(programming[key]) 
} 
