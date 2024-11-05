const accountId = 1445533;
let accountEmail = "ayush@google.com";
var accountPassword = "123456"; // Prefer not to use var because of issue in block scope and functional scope
accountCity = "Bhagalpur";
// console.log(accountId);
accountEmail = "ab@cd.com";
accountPassword = "654321";
accountCity = "Pune";
console.table([accountEmail,accountId,accountPassword,accountCity]);


