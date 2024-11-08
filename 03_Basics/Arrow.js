const user = {
    username: "Ayush",
    price: 999,
    welcomeMessage: function () {
        // console.log(`${this.username} , welcome to the website`);
        // console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "sam";
user.welcomeMessage()
// console.log(this)

// function chai(){
//     let userName = "Ayush"
//     console.log(this.userName); // this. cannot be used in function
    
// }
// chai()
// this. cannot be used in function
//this. can be used object

// const chai = function(){
//     let userName = "Ayush"
//   console.log(this.userName);
// }
// chai()

// const chai = () => {
//     let userName = "Ayush"
//   console.log(this);
// }
// chai()
// const addTwo = (num1,num2) =>{
//     return num1+num2
// } when curly braces are used 'Return' keyword is mandatory
// console.log(addTwo(3,7));

const addTwo = (num1,num2) => (num1+num2); // to return the object it needs to be wrapped in parenthesis '()'
console.log(addTwo(2,8));
