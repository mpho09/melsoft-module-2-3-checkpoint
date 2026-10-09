/* CHALLENGE 1*/
/* PART A*/
// it is a String datatype.I used const becouse my full name cannot change.
const fullName = "Mpho Mangena";

//it is Number datatype.I used let becouse an age can change.
let age = 23;

//It is a boolean.I use let because my answer may change as I learn JavaScript.
let isEnjoying = true;

//It is a Number. I used cosnt becouse it is favourite decimal number and wont change
const decimalNumber = 15.4;

// it is NaN datatype.
let notNumber = Number("not a number");

//It is infinity Dataype.I use const because the value will not be reassigned
const infinite = Infinity;

//it is Number datatype. i used cosnt becouse it will never change
const int = Number.MAX_SAFE_INTEGER;

//The datatype is null
const num = null;

//the datatype is undefined
const num1 = undefined;

//It is a String datatype.I use const because the message will not be reassigned.
const templateLiteral = `My name is ${fullName}, I am ${age} years old plus i love JavaScript: ${enjoyJavaScript}.`;

/* PART B*/

console.log(typeof fullName);                 
console.log(typeof age);                      
console.log(typeof Isenjoying);          
console.log(typeof decimalNumber);     
console.log(typeof notNumber);                
console.log(typeof infinite);             
console.log(typeof int);            
console.log(typeof num);                
console.log(typeof num1);            
console.log(typeof templateLiteral);  


// The datatype is an object
console.log(typeof null);

// The datatype is an number
console.log(typeof NaN);

// The datatype is undefined
console.log(typeof undefined);

// this is a string datatype
console.log(typeof "42");

// I ould say it is a string
console.log(typeof (typeof 42));

// Becouse it an array its an array
console.log(typeof [1, 2, 3]);

// this is a function
console.log(typeof function() {});
