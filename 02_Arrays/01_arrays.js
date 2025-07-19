//arrays 

let myArr = [1,2,3,4,5] 

let myArr2 = new Array(1,2,3,4,5,6,7) 
console.log(myArr2);

console.log(myArr2.push(8));
console.log(myArr2);
console.log(myArr2.pop());

myArr2.unshift(9)
//[9,1,2,....]
myArr2.shift(9)
//[1,2,....] 

let myArr3 = new Array();
myArr3 = myArr2.join(); 

console.log(myArr3);

//slice, splice 

console.log("A", myArr);
const myArr4 = myArr2.slice(1,4);  

// for concatanation 2 or more array 
// using spread 

const finalarr = [...myArr,...myArr2,...myArr3,...myArr4]; 
console.log(finalarr);

console.log(Array.isArray("arnav"));//checking if it is a array
console.log(Array.from("arnav"));//making it a array
