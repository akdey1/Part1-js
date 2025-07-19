// const user = new Object() <- singleton

const user ={} 
console.log(user);
 
user.id = "12345"
user.name = "AKD"

const user2 = {
    email : "tabruktabruk", 
    fullname : {
        userfullname : {
            firstname : "arnav", lastname : "Dey", 
        }
    }
} 

console.log(user2.fullname.userfullname.firstname);
//object merging 
let obj1 = {1 : "a", 2 : "b"} 
let obj2 = {3 : "c", 4 : "d"} 
let obj3 ={...obj1,...obj2} 
console.log(obj3);
 
const dbData = [
    {
      id:1,
      email:"tabruktabruk"  
    },
    {
      id:2,
      email:"tabruktabruktabruk"  
    }
] 

console.log(Object.keys(user));
console.log(Object.values(user));