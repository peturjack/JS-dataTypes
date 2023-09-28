// Create a contact list as an array of objects
const contactList = [
    {
        name: "Pétur",
        age: 25,
        address: " Iceland, Reykjavík",
        gmail: "petur@gmail.com"
    },
    {
        name: "Fannar",
        age: 22,
        address: "Iceland, Selfoss",
        gmail: "fannar@gmail.com"
    },
    {
        name: "María",
        age: 27,
        address: "Iceland, Stykkishólmi",
        gmail: "maria@gmail.com"
    },
    {
        name: "Ragnheiður",
        age: 20,
        address: "Iceland, Keflavík",
        gmail: "ragga@gmail.com"
    }
];

// Access the first person in the contact list
const person1 = contactList[0];

// Log the information of the first person
console.log(person1.name);
console.log(person1.age);
console.log(person1.address);
console.log(person1.gmail);

// Define a new person to add to the contact list
const addNewPerson = {
    name: "Lóa",
    age: 32,
    address: "Iceland, Reykjavik",
    gmail: "loa69@gmail.com"
};

// Add the new person to the contact list
contactList.push(addNewPerson);
console.log(contactList)
 
// (What is a programming language?)
//  programming language is a notation for writing computer programms. most programing langauges are text based, but they may also be graphical. they are like a language that speaks to computers.


// (Understand what is Javascript)
//  JavaScript is a scripting language used to develop web pages

// (Understand how can Javascript work with and without the browser)
//  Whenever we run a JavaScript program inside a web browser, JavaScript code is received by the browser's engine and the engine runs the source code to obtain the output.
//  You can run JavaScript console in terminal or any command-line interface using Node. js

// (Understand what data types are)
//  the five most basic data types are strings, numbers, boolean, undefined and null, a string is just text, number are just numbers, booleans is true or false =>
//  undefined is a variable that is without any value and the last one null is A null value in JavaScript is used for referring absence of any object value and if any function or variable returns null


// (Be able to use variables and other basic constructs of Javascript) 
//  so a variable is a named storage for data and as you can see i named it contactList and it stores the data of the contact list.

// (Be able to do operators with different data types in Javascript) 
//so this mean be able to to + - = and use it and as you can see i use it in my code.