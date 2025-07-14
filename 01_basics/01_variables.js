const accountId = 21051801
let accountEmail = "deyarnav847@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId cant be changed because it is declared as const : const is used when a viariable should not be allowed to be change.
console.log(accountId);
// dont use var keyword anywhere as simple as that 
accountEmail = "arnav@gmail.com"
accountPassword = "32451"
accountCity = "hyderabad" 
//new approach
console.log([accountEmail,accountId,accountPassword,accountCity]); 
// if you want to view as a table 
console.table([accountEmail,accountId,accountPassword,accountCity]);