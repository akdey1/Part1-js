const myNumbers = [1,2,3,4,5,6,7,8,9,10] 

// using map
const newNums = myNumbers.map( (num) => num + 10) 

// using for each
const add = [];  
myNumbers.forEach((addNum) => { 
    add.push(addNum + 10); 
}) 

console.log(add);


console.log(newNums);

const multipleOperation = myNumbers
.map((num) => num + 10)
.map((num) => num + 1) 
.filter((num) => num >= 15) 

console.log(multipleOperation);
