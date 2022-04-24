//Statements
//console.log('Hello world');

//Obs...Node is a runtime enviroment for executing javascript code

/*Variables
    var | let;
    The best practice is use let
    JS are case-sensitive
    Dynamic language = the type os a variable can change
*/

/*Primitives/Value Types            Reference Types
    Strings                             Object
    Number                              Array
    Boolean                             Function
    undefined
    null
*/

let firstName = 'Lili'; //String
let lastName = 'Morgan' //String
let age = 30; //Number
let isApproved = false; //Boolean
let motherName = undefined //is a type and also a value
let fatherName = null; //your type is an object

const interestRate = 0.3; //Const are immutable variables

//Objects

let person = {
    //keys are properties of the object
    name: 'Lina',
    age: 20
}

//Dot Notation
person.name = 'Will';
//Bracket notation
let selection ='name'
person[selection] = 'Mary' // equals to: peson['name'] = 'Mary'

console.log(person);

//Arrays == a list of items
let selectedColors = ['red', 'blue']
console.log(selectedColors); //Show all elemenents
console.log(selectedColors[0]) //show the element in the index 0
selectedColors[2] = 'green' //add a new element
console.log(selectedColors); //Show all elemenents
selectedColors[3] = 1 //JS makes possivle to storage different elements in an array
console.log(selectedColors);
console.log(selectedColors.length) //returns the size of the array

//Functions

//Performing a task
function greet(name, lastName){
    console.log("Hello " + name);
}

//Calculating a value
function square(number){
    return number * number;
}

//If you not pass a value to one parameter, by default it's undefined 
greet('Lua',"Azul");
let number = square(2);
console.log(number);














