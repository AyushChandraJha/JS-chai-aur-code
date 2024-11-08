"use strict"; //treats as newer version of JS

// alert(3+3) we are using nodeJS not browser

//console.log(3+3); // code readablity should be high...
//console.log("Ayush");

let name = "Ayush";
let age = 35;
let isLoggedIn = true;
// null => standalone value
// undefined => value not assigned
// symbol => unique

/// object
//console.log(typeof null);

// 1. Primitive Data Types : 7 types => String, Boolean, null, undefined, symbol, bigInt
// 2. Reference (Non-Primitive): Array, Objects , Functions

let heros = ["Sahaktimaan", "Nagraj","Doga","Dhruv"];
let myObject = { name: "Ayush", age: 36};
let myFunction = function(){
    console.log("Hello World");
    
}
console.log(typeof heros);
console.log(typeof myObject);
console.log(typeof myFunction);


// ***********************************************************************
// Stack Memory (Primitive) =>
// Heap Memory (Non-Primitive) =>
