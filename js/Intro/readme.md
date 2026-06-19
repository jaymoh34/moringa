Welcome file
Welcome file


## What are JavaScript Variables
A variable is a named container that stores data.
Refereing something using something else

## Real-Life Example
Imagine you're moving to  a new apartment. You have a cardboard box that you label"Kitchen utensils." Whenever you need a spoon, you know exactly which box to look in.You can also take items ouy, put ones in, or even change the label.

## How do you declare Variables in JavaScript

 - let
 - const
 Example format;
 let age = 20;
const country = "Kenya";

## Rules for Naming Variables

 - Space are not allowed.
 - Only letters,digits,underscores and dollar signs are permitted in variable names
 - Case sensitive
 -  Certain terms such as reserved words in JS shouldn't be used to name variables
 - A letter(alphabet), an underscore(_) or a dollar sign($) must be the first characters in a variable name.
 Example;
 let firstName = "John";
let _privateData = 123;
let $price = 99.99;
let userAge = 25;
let totalScore = 100;

## Variable Naming Styles
**Camel Case**
First word lowercase, subsequent words capitalized with no spaces or underscores.
Example;
let firstName = "Mary";
let studentAge = 22;
let totalAmountDue = 150.50;
*Where it's used*

 - Standard convention for JS variables and function names.
 - Most popular in JavaScript, Java, and C.
 
 **Pascal case(Capitalized Camel Case)**
 Every word starts with a capital letter, including the first.
 Example;
 let FirstName = "Mary";
let StudentAge = 22;
let UserProfile = { name: "John" };
*Where it's used*
 
 - Class names and constructor functions in JavaScript.
 - Component names in React.
 - Widely used in C  and other OOP languages.
 
 **Snake Case**
 All lowercase letters with underscores separating words.
 Example;
 let first_name = "Mary";
let student_age = 22;
let total_amount_due = 150.50;
*Where it's used*
 
 - Python (official convention).
- Database field names.
- Configuration files.
- Sometimes in JavaScript for constants.

## Summary
 -   Variables are like labeled boxes that store data in memory.
 -   Use `let`  when the value can change later.
 -   Use `const` when the value stays the same forever.
 -   Avoid `var`
 -   **CamelCase** → `firstName`
    
-   **PascalCase** → `FirstName` 
    
-   **snake_case** → `first_name`

## DATA TYPES
Specifies the kind of data a variable can hold in a programming language.
In Js we have two types of Major Data-types. ie.

 - Primitive
 - Object

## Primitive Data Types
Simple, basic data types that are not objects. They hold a single value.
​Any data-type that is not a primitive its an Object.

 - Number
 - String
 - Boolean
 - Undefined
 - Null
 
 ## Ways to Create a string variable 
 **Single Quotes**
 let name1 = 'John';
 **Double Qoutes**
 let name2 = "John";
 **Backticks**
 let name3 = `My name is John and I am ${age} years old`;
 **When to use each **
 **Single/Double qoutes**->regular text
 **Backticks**->when you need to embed variables or use multiple lines.

## Difference Between `undefined` and `null`
 
 `**undefined**`
 

 - Variables exists but has no value assigned.
 - Example; `let x;` ->x is undefined.
 - Used for missing or uninitialized values.
 
`null`
 - Variable has been intentionally set to empty.
 - Example; `let y=null;`
 - Used when you want to say 'nothing' on purpose. 

 

   

What are JavaScript Variables
A variable is a named container that stores data.
Refereing something using something else

Real-Life Example
Imagine you’re moving to a new apartment. You have a cardboard box that you label"Kitchen utensils." Whenever you need a spoon, you know exactly which box to look in.You can also take items ouy, put ones in, or even change the label.

How do you declare Variables in JavaScript
let
const
Example format;
let age = 20;
const country = “Kenya”;
Rules for Naming Variables
Space are not allowed.
Only letters,digits,underscores and dollar signs are permitted in variable names
Case sensitive
Certain terms such as reserved words in JS shouldn’t be used to name variables
A letter(alphabet), an underscore(_) or a dollar sign($) must be the first characters in a variable name.
Example;
let firstName = “John”;
let _privateData = 123;
let $price = 99.99;
let userAge = 25;
let totalScore = 100;
Variable Naming Styles
Camel Case
First word lowercase, subsequent words capitalized with no spaces or underscores.
Example;
let firstName = “Mary”;
let studentAge = 22;
let totalAmountDue = 150.50;
Where it’s used

Standard convention for JS variables and function names.
Most popular in JavaScript, Java, and C.
Pascal case(Capitalized Camel Case)
Every word starts with a capital letter, including the first.
Example;
let FirstName = “Mary”;
let StudentAge = 22;
let UserProfile = { name: “John” };
Where it’s used

Class names and constructor functions in JavaScript.
Component names in React.
Widely used in C and other OOP languages.
Snake Case
All lowercase letters with underscores separating words.
Example;
let first_name = “Mary”;
let student_age = 22;
let total_amount_due = 150.50;
Where it’s used

Python (official convention).
Database field names.
Configuration files.
Sometimes in JavaScript for constants.
Summary
Variables are like labeled boxes that store data in memory.

Use let when the value can change later.

Use const when the value stays the same forever.

Avoid var

CamelCase → firstName

PascalCase → FirstName

snake_case → first_name

DATA TYPES
Specifies the kind of data a variable can hold in a programming language.
In Js we have two types of Major Data-types. ie.

Primitive
Object
Primitive Data Types
Simple, basic data types that are not objects. They hold a single value.
​Any data-type that is not a primitive its an Object.

Number
String
Boolean
Undefined
Null
Ways to Create a string variable
Single Quotes
let name1 = ‘John’;
Double Qoutes
let name2 = “John”;
Backticks
let name3 = My name is John and I am ${age} years old;
**When to use each **
Single/Double qoutes->regular text
Backticks->when you need to embed variables or use multiple lines.

Difference Between undefined and null
**undefined**

Variables exists but has no value assigned.
Example; let x; ->x is undefined.
Used for missing or uninitialized values.
null

Variable has been intentionally set to empty.
Example; let y=null;
Used when you want to say ‘nothing’ on purpose.
Markdown selection 3306 bytes 528 words 122 lines Ln 123, Col 0HTML 2523 characters 482 words 94 paragraphs
