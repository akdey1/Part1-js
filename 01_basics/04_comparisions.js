console.log("2" > 1); 
console.log("02" > 1); 

console.log(null > 0); 
console.log(null == 0); // false because of coercion rules == , null only loosely equals undefined
console.log(null >= 0); 
//for comparision like <,>,>=,<=, it converts null into 0 therefore in (4) it's showing us false and in (6) its showing us true; 

// === strictly checks it with the dataType
console.log("2" === 2); //false beacuse "2" -> is a String 
