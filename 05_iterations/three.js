const arr = [1,2,3,4,5] 

for (const num of arr) {
    //console.log(num);
} 

const greetings = "Hello arnav!" 

for (const greet in greetings) {
    console.log(`each char is ${greet}`)
} 

//maps

const map = new map() 
map.set('IN',"India")
map.set("US","united states of america") 

// traversing through map
for(const [key, value] of map){
    console.log(key, ':-', value);
} 

