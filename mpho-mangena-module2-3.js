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


/*Why does typeof null return 'object' and typeof NaN return
'number'? Give the historical reason for one and the technical reason for the other.


*/

/* CHALLENGE 2*/

let a = "123";

console.log("Number:", Number(a), typeof Number(a));
console.log("parseInt:", parseInt(a), typeof parseInt(a));
console.log("parseFloat:", parseFloat(a), typeof parseFloat(a)); 
console.log("Boolean:", Boolean(a), typeof Boolean(a));
console.log("String:", String(a), typeof String(a));

let b = "3.14";
console.log("Number:", Number(b), typeof Number(b));
console.log("parseInt:", parseInt(b), typeof parseInt(b)); 
console.log("parseFloat:", parseFloat(b), typeof parseFloat(b)); 
console.log("Boolean:", Boolean(b), typeof Boolean(b)); 
console.log("String:", String(b), typeof String(b));

let c = "hello";
console.log("Number:", Number(c), typeof Number(c));
console.log("parseInt:", parseInt(c), typeof parseInt(c)); 
console.log("parseFloat:", parseFloat(c), typeof parseFloat(c)); 
console.log("Boolean:", Boolean(c), typeof Boolean(c)); 
console.log("String:", String(c), typeof String(c));

let d = "42abc";
console.log("Number:", Number(d), typeof Number(d));
console.log("parseInt:", parseInt(d), typeof parseInt(d)); 
console.log("parseFloat:", parseFloat(d), typeof parseFloat(d)); 
console.log("Boolean:", Boolean(d), typeof Boolean(d)); 
console.log("String:", String(d), typeof String(d));

let e = "";
console.log("Number:", Number(e), typeof Number(e));
console.log("parseInt:", parseInt(e), typeof parseInt(e)); 
console.log("parseFloat:", parseFloat(e), typeof parseFloat(e)); 
console.log("Boolean:", Boolean(e), typeof Boolean(e)); 
console.log("String:", String(e), typeof String(e));

let f = 0;
console.log("Number:", Number(f), typeof Number(f));
console.log("parseInt:", parseInt(f), typeof parseInt(f)); 
console.log("parseFloat:", parseFloat(f), typeof parseFloat(f)); 
console.log("Boolean:", Boolean(f), typeof Boolean(f)); 
console.log("String:", String(f), typeof String(f));

let g = null;
console.log("Number:", Number(g), typeof Number(g));
console.log("parseInt:", parseInt(g), typeof parseInt(g)); 
console.log("parseFloat:", parseFloat(g), typeof parseFloat(g)); 
console.log("Boolean:", Boolean(g), typeof Boolean(g)); 
console.log("String:", String(g), typeof String(g));

let h = undefined;
console.log("Number:", Number(h), typeof Number(h));
console.log("parseInt:", parseInt(h), typeof parseInt(h)); 
console.log("parseFloat:", parseFloat(h), typeof parseFloat(h)); 
console.log("Boolean:", Boolean(h), typeof Boolean(h)); 
console.log("String:", String(h), typeof String(h));

/*PART B*/

// It will print 53 becouse the 5 is a string plus the number 3 it Will concatenate
let num1 ="5"+ 3 ;
console.log(num1);

// the correct answer is 2. the 5 will change to number not string becouse of the subtraction operator
"5" - 3
let num2 ="5"- 3 ;
console.log(num2);


// it printed 10 becouse the operator is multiplication the numbers will change to numbers
let num3 = "5" * "2";
console.log(num3);

// javascript changes true to be one. it printed 2
let num4 = true + 1;
console.log(num4);


//it will print true1
let num5 = true + "1";
console.log(num5);

// it will print 0 mainly becouse it empty
let num6 = false + null;
console.log(num6);

// it printed NaN becouse undefined is not a number
let num7 = null + undefined;
console.log(num7);


// it will print infinity becouse 1/0 is infinity
let num8 = 1 / 0;
console.log(num8);

// it prints NaN
let num9 = 0 / 0;
console.log(num9);


//it will print not a number becouse of the letters
let num10 = "abc" - 1;
console.log(num10);

//it wont print anything becouse they both empty
let num11 = [] + [];
console.log(num11);

//it will print 3
let num12=[1] + [2];
console.log(num12);


/*PART C*/

/*What is the exact difference between Number('42abc') and parseInt('42abc')? Give the
exact return value of each.
The Number('42abc') will return NaN mainly becouse the it cannot vhange to number.
parseInt('42abc') will return 42. it only take the numbers and stop printing after the letters

When would you reach for parseFloat instead of parseInt in real code? Give a scenario
where getting it wrong costs money.
I would use parseFloat to maybe put decimal number for prices not pasreInt 

What does Number('') return, and why is that a common source of production bugs? Give a
specific form-field example.
It will print 0 becouse empty space is like or the same as 0
*/

/*CHALLENGE 3*/

//1. Arithmetic
// the code below is calculating for the net salary after all the deduction
let salary = 45000;
let medicalAid = 2500;
const taxDeduct = salary * (25 / 100);
const uifDeduct = salary * (1 / 100);
const rightSalary = grossSalary - taxDeduction - uifDeduction - medicalAid;


//2. Assignment
// the code is calculating the total amount of the cart
let cartTotal = 0;
cartTotal += 150;
cartTotal += 85;
cartTotal += 220;
cartTotal *= 0.90;
cartTotal *= 1.15;
console.log("Total: R " + cartTotal);

  
//3. Comparison
// the  is checking for certain rules of what is needed. i used if statements for comparison
  if (age < 18) {
    return "Error: You must be at least 18 years";
  }
  if (password.length < 8) {
    return "Error: Password must be at least 8 characters.";
  }
  if (email != confirmEmail) {
    return "Error: Emails do not match.";
  }

  return "Signup successful!";

//4.Logical
// this code checks whether the current user is allowed to access the premium dashboard
const canAccess =
  (isLoggedIn && emailVerified) || isAdmin;

//5. Unary
//this code below Converts the string '25' from a form field into a number using the unary + operator.
const age2 = "25";
const age = +age2;
let isDarkMode = false;
isDarkMode = !isDarkMode;

//6 Ternary / Conditional
const membershipType = 'trial';


 //7. String concatenation
//the code below is using string concatenation. i have initialized the variable and trying to compare the template literal and string concatenation
const firstName1 = "Thabo";
const lastName1 = "Nkosi";
const age1 = 28;
const greetingConcatenate = "Welcome back " + firstName + " " + lastName + ", you are " + age + " years old.";
const greetingTemplate = `Welcome back ${firstName1} ${lastName1}, you are ${age1} years old.`;
console.log(greeting);
// The template literal is more readable and easier to maintain

/* What is the difference between prefix (++x) and postfix (x++) increment? Show it with a
one-line code example where they produce different outputs.
The postfix  performs the operation by changing the value of the variable but returns the value before the change.
The prefix version performs the operation and returns the new value.


The modulo operator (%) is one of the most-asked-about operators in interviews. Give
THREE concrete, real-world uses for it. (One is even/odd, think of two more.)
Time and Currency


In your Challenge 1 Section 6 example, you nested a ternary. Is nested ternary good
practice? When should you NOT use it?
it is bad practice becouse it can be hard to read. They might be easy to write but 
for the next person it can be difficult to read
*/

/*CHALLENGE 4*/

//It will print true because the == compares if it is the same or not and true becomes 1 false becomes 0
0 == false

// It will print false because the === compares both value and type
0 === false

//It will print false because it is an empty string compared to 0
"" == 0

//It will print false because it is an empty string compared to 0
"" === 0

//It will print true -- compares if the values are the same not the data type
"0" == 0

//It will print false because the data type are not the same
"0" === 0

// true becouse becouse of them are empty so it makes them the same
null == undefined

// It will print false because the data type are not the same
null === undefined

// It will print false because null is not equal to 0
null == 0

// It will print false because null is not equal to 0. 0 is greater than null
null >= 0

// It will print false because null is not equal to 0. 0 is greater than null
null > 0

//It is true becouse the data type is the same and the value is the same
NaN == NaN

//It will print false because even when the data type is the same the values could be different
NaN === NaN

//It will print true 
Object.is(NaN, NaN)

//It will print false because the data type is the same and the value is the same
+0 === -0 

//It will print false with object.is it checks the exact vaalue if the are the same
Object.is(+0, -0)

//it will print true the values are the same even when the data types are different
[1,2,3] == "1,2,3"

//it will print true becouse array is empty and it the same as false
console.log([] == false);

//it will print true becouse array is empty and  0 is the same as empty
console.log([] == 0);

//it will print true
[0] == false

/*PART B*/

let newPassword = "MphoMpho098";
 let confirmPassword = "MphoMpho098";
 let currentEmail = "mphomangena@gmail.com";
 let confirmEmail = "mphomangena09@gmail.com";

  if (newPassword === confirmPassword) {
    return "Passwords do match.";
  }
  if (currentEmail === confirmEmail) {
    return "Emails do match.";
  }
  if (newPassword === currentEmail) {
    return "Password cannot be your email address.";
  }
  if (newPassword.length < 8) {
    return "Password must be at least 8 characters long.";
  }
 return "Success! Form is valid.";

 /* I used === mainly becouse it is strict comparison operator and it checks both the 
 value and the data type. to bugs in the code. And it is code practice moslty for password for security*/


 /*CHALLENGE 5*/

 // It WILL PRINT 13
 //I will start from the beginining with the addition and then the multiplication and then the subtraction
2 + 3 * 4 - 1
console.log(2 + 3 * 4 - 1);

//It will print 15.The brackets will come first and multiply both numbers in the brackets
(2 + 3) * (4 - 1)

//It will print 4.
//Start by subracting 10 with 4 and then subtract 2 from the result
10 - 4 - 2

//it will print 512. The exponentiation operator is right associative so it will first calculate 3 ** 2 = 9 and then 2 ** 9 = 512
2 ** 3 ** 2 

//It will print 7. The modulus operator will come first and then the multiplication and then the addition
10 % 3 * 2 + 1

//it will print 5. It will start by dividing 100 with 4 and then divide the result with 5
100 / 4 / 5

// It will print true becouse both sides are true.
5 + 2 > 6 && 3 < 4

// it will print true becouse with || one side can be true and other false for it to be true
true && false || true && true

// it will print false. Both sides need to be true  for it to be true
!false && !!0

// it will print true. the step will c=start checking from the left to right
5 > 3 && 10 < 20 || !(2 === "2")

// it will print 1035. it will start from the left to right meaning it will multiply 1000 with 1.15 and then multiply the result with 0.9
1000 * 1.15 * 0.9 

//it will print number1
typeof 5 + 1


//it will print number becouse it is checking the type of data type it is in the brackets
typeof (5 + 1)

// it will print 56. it will start with multiplication and then addition.
//becouse 5 is a string and there is an addition it will just concatenate the string with the result of the multiplication
"5" + 3 * 2

// it will print 4. it will start from the 5 and then subtract 3 and then add 2. 
// the string of 5 will chanfe to number becouse substartion only works with numbers
"5" - 3 + 2

/* Interview Questions 
When should you add parentheses to an expression even when
they are not strictly needed by precedence rules?

you should it when you want your code to be more readable so that the next team member
is able to understand the code. It is also the to avoid any bugs in th future
*/

/* CHALLENGE 6*/

/*PART A*/


const grade = score >= 90 ? 'A' : score >= 80 ? 'B' 
: score >= 70 ? 'C' : score >= 60 ? 'D' : score >= 50 ? 'E' : 'F';


console.log(grade(95));
console.log(grade(82));
console.log(grade(73));
console.log(grade(65));
console.log(grade(54));
console.log(grade(42));
console.log(grade(0));

/*PARTB*/
  const displayName = user.displayName || 'Guest User';
  const theme = user.theme || 'light';
  const maxResults = user.maxResults || 10;

  const lastLogin = user.lastLogin ?? 'Never';
  const notificationCount = user.notificationCount ?? 0;

  /*PART C*/
//1
console.log(user && user.address && user.address.city);

//2
console.log(user?.address?.city);

//3
console.log(user3 && user3.address && user3.address.city);

/*PART D*/

//It will print finally becouse all first 3 values are treated as false so it will print the last value
null || undefined || 0 || "" || "finally"

//It will print 0 becouse it will get the first non falsy value
null ?? undefined ?? 0 ?? "" ?? "finally"


// it will print first truthy becouse the first value is treated as false
0 || "first truthy"

// it will print 0
0 ?? "first non-nullish"

//it will print false becouse all the values need to be true. the moment it sees flse it will print false
true && false && "never reached"

//it will print thirf becouse there is no false value or a value that is treated as false
"first" && "second" && "third"

// it will print yes
false || (true && "yes")



// it will print yes
(false || true) && "yes"

// it will print 3 becouse of no false value. it will print the last one
1 && 2 && 3

// it will print foo
null?.foo?.bar?.baz
//it printed undefined

/*CHALLENGE 7*/

/* PART A */

// it will print number becouse it checks what type of datatype it is
typeof 42

//it will print string becouse it checks for the datatype
typeof "hello"

// it will print boolean becouse it checks for the datatype
typeof true

//it will print undefined
typeof undefined

//it will print object
typeof null 


// it will print object becouse it checks for the datatype
typeof {}

// it will print object becouse it checks for the datatype and an array is an object
typeof [] 

// it will print function since this is a function
typeof function() {}

//it will print number
typeof NaN

//I believe it will print undefined becouse the variable does not have any value
typeof undeclaredVariable

/*PART B*/

// it will print true becouse an array is an instance of Array
console.log([] instanceof Array); 

// An array is also an instance of Object.I will print true
console.log([] instanceof Object); 

// It will print true becouse a object is an instance of Object
console.log({} instanceof Object); 

//It will print true becouse the string is instanceof a string
console.log("hello" instanceof String);
//It printed false 

// An object os a string has been created so it will print true
console.log(new String("hello") instanceof String); 

// The Number is an object one not the primitive one so it will print false
console.log(42 instanceof Number); 

// It will print true becouse both are objects.
console.log(new Date() instanceof Date); 

//It will print false
console.log(/abc/ instanceof RegExp); 

// typeof is the right choice when checking a primitive data type to when to check if the variable is whivh data type.In this case it will print number
const age = 23;
console.log(typeof age); 


/*PART C*/

const user = { 
    name: 'Lerato',
    age: 25,
    role: 'student' 
};

delete user.role;
console.log(user);

//2
let x = 5;
delete x;
console.log(x);
/*It will still print 5 becouse on the second line it tries to delete x
  but cannot becouse of the keyword let
*/

//3.
const arr = [1, 2, 3, 4];
delete arr[1];
console.log(arr);
console.log(arr.length);
console.log(arr[1]);

/*It is dangerous becouse it does not change the arrays length even when you removed a value*/

delete Math.PI
/* it does not ork becouse in javascript this would throw a typeerror.
 It is a built in property, it cannot be deleted*/

 /*Final question: You have an array of items and need to remove one. Why would you NOT use
delete and what should you use instead?
You can use splice() method and not delete becouse ith delete, the length does not 
change and the value removed will just be an empty space*/
