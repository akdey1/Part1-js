const myNums = [1,2,3,4]; 

// const myTotal = myNums.reduce(function (acc,curr) { 
//     console.log(`acc : ${acc} and curr : ${curr}`);
//     return acc + curr
// }, 0) 

const myTotal = myNums.reduce((acc, curr) => { 
    console.log(`acc : ${acc} and curr : ${curr}`);
    return acc + curr 
},0) 

console.log(myTotal);

const shoppingcart = [
    {
        itemName : "Javascript",
        price : 2999

    },
    {
        itemName : "JavaFullStack",
        price : 3999

    },
    {
        itemName : "MachineLearning",
        price : 4999

    },
] 

const AddCartPrice = shoppingcart.reduce((acc,item)=>{
    return acc + item.price
},0) 

console.log(AddCartPrice);
