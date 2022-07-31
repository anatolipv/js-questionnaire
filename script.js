
const questions = [
    // Loops and arrays
    {
    module: "loops-arrays",
    question: "What is a loop? What types of loops do you know?",
    answer: "Loops are used in JavaScript to perform repeated tasks based on a condition. Conditions typically return true or false. A loop will continue running until the defined condition returns false.",
    id: 1
},
{
    module: "loops-arrays",
    question: "What is an array? What are the benefits of using arrays over using several variables?",
    answer: "An array is a secquence of elements in order. Each element has its way to be accessed-index that starts from zero.",
    id: 2
},
    // Functions / Exceptions
{
    module: "functions-exceptions",
    question: "What is a function? What types of functions are there?",
    answer: "A function is building block that solves a small problem, a piace of code that has name and can be called from other code. Can take parameters and return value, can be reused with different parameters to produce different outcome. Allow programers to construct large programs from simple pieces. Function declaration (uses keyword <function> and return statement), function expression (jsut assign the function to a variable), ES2015 added arrow functions to JS (shorter sintax, dont have arguments obj, dont have this context).",
    id: 3
},
{
    module: "functions-exceptions",
    question: "What is the difference between function expression, fat arrows and function declaration?",
    answer: "With function declaration, function can be used even before its declaration which is not the case with arrow or expressions; arrow func does not have argiments obj and cant use <this>; different sintax",
    id: 4
},
{
    module: "functions-exceptions",
    question: "What is an immediately-invoked function expression? Why use it?",
    answer: "An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. We use it for several reasons: 1.Avoid polluting the global namespace, 2.Execute an async function, 3.The module pattern (create private and public variables and methods) ",
    id: 5
},
    // NPM / ES Modules
{
    module: "npm-ESModules",
    question: "What is NPM? What are the benefits of using it?",
    answer: "NPM - Node Package Manager is the default package manager for JavaScript runtime enviroment Node.js. All the packages are open source(we can check the code and see how it works), the most used of each kind are well tested and prowen to work, most of the packages are updated regularly. In order to use NPM we need to have Node.js installed.",
    id: 6
},
{
    module: "npm-ESModules",
    question: "What is the package.json file?",
    answer: "In order to be able to update,add or remove packages NPM stores all the information about the project and used packages in the package.json file.",
    id: 7
},
{
    module: "npm-ESModules",
    question: "What are NPM scripts?",
    answer: "An npm script is a convenient way to bundle common shell commands for your project. They are typically commands, or a string of commands, which would normally be entered at the command line in order to do something with your application. Scripts are stored in a project's package.",
    id: 8
},
{
    module: "npm-ESModules",
    question: "What are ES Modules?",
    answer: "ES Modules came with ECMAScript6(ES2015). This is modern way to do modules in JavaScript. This approach uses the export and import keywords, instead of the older CommonJS syntax of module. exports and require.",
    id: 9
},
    // ESNext / ESLint
{
    module: "esnext-eslint",
    question: "What are the benefits of including 'use strict' at the beginning of a JavaScript source file?",
    answer: "Strict mode makes it easier to write secure JavaScript. Strict mode changes previously accepted bad syntax into real errors. As an example, in normal JavaScript, mistyping a variable type creates a new global variable.",  
    id: 10
},
{
    module: "esnext-eslint",
    question: "What are template strings? What are their benefits?",
    answer: "Multiline strings with value placeholder without the use of endline operator `${name} is ${age} years old.`. No need to concatenate strings.",
    id: 11
},
{
    module: "esnext-eslint",
    question: "What are destructuring assignments?",
    answer: "Destructuring assignments allow us to extract values from objects or arrays.",
    id: 12
},
    //  Objects and destructuring
{
    module: "obj-destructuring",
    question: "What are objects? Provide an example.",
    answer: "An object is an instance which contains a set of key value pairs. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.",
    id: 13
},
{
    module: "obj-destructuring",
    question: "What do we use objects for?",
    answer: "Objects help us to model and use complex structures",
    id: 14
},
{
    module: "obj-destructuring",
    question: "What are the differences between primitive and reference types? Give code examples.",
    answer: "The difference comes in when the computer has to store a reference data type. When you create a variable and assign it a value that is a reference data type, the computer does not directly store that data type in that variable (as is the case with primitive types). What you have assigned to that variable is a pointer(adress) that points to the location of that data type in memory. Example: const a = 5 (primitive variable) if we write const b = a (another primitive variable we will have 2 different variables with the same value and if we add some number to a, b wont change. But if we write const obj1 = {} (reference type) and we create const obj2 = obj1 we have 1 empty object and 2 ways to access it.",
    id: 15
},
{
    module: "obj-destructuring",
    question: "What is destructuring?",
    answer: "The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.",
    id: 16
},
    // Git
{
    module: "git",
    question: "What is git? What are the benefits of using it?",
    answer: "Git is the most widely used morern version control system in the world. Some of the benefits: 1.Every developer has a working copy of the code and the repository, 2.Performance, security and flexibility in mind.",
    id: 17
},
{
    module: "git",
    question: "What is GitLab? What are the benefits of using it?",
    answer: "Git is the source control system, GitLab is the service to store your repository online(like GitHub and BitBucket).Each developer gets their own local repository,distributed development creates a more reliable enviroment, in case of an error in central repository everybody can continue going about their business. Available backup.",
    id: 18
},
{
    module: "git",
    question: "How is GitLab different from git?",
    answer: "GitLab is build ot top of Git.GitLab is a service to host your central repository online.",
    id: 19
},
{
    module: "git",
    question: "Which are the global configurations you need to set in order to use git? What is their role?",
    answer: "For authentication we need to set our global git username, email and verify it with our password in order to see who made the commit (or they will be anonymous).",
    id: 20
},
{
    module: "git",
    question: "What is a commit? What information does it contain?",
    answer: "Commit we make to save all staged changes to the local repository. Except the changes made on the source code the commit contains short message with info about the changes made.",
    id: 21
},
    // Scope / Closure
{
    module: "scope-closure",
    question: "What is scope? Provide an example.",
    answer: "Scope determines the accessibility of variables, objects, and functions from different parts of the code. In JavaScript we have Global scope, Function scope and Block scope.",
    id: 22
},
{
    module: "scope-closure",
    question: "What is the difference between const, let and var?",
    answer: "In the context of scope, const and let are the same and have block scope and function scope where var has only function scope.",
    id: 23
},
{
    module: "scope-closure",
    question: "What is the difference between == and ===, and what is type coercion?",
    answer: "Both `==` and `===` are comparison operators used in logical statements to redermine equality or difference between variables or values.`===` compares values and types and `==` comperes only values(using type coercion if needed). Type coercion is the automatic or implicit conversion of values from one data type to another.Example: 5 == `5` (true), 5 === `5` (false).",
    id: 24
},
{
    module: "scope-closure",
    question: "What is variable and function hoisting?",
    answer: "Hoisting it the process of collecing variables by the compiler and later there will be a value attached to them.",
    id: 25
},
{
    module: "scope-closure",
    question: "What is hoisted and what is not?",
    answer: "Only the declaration is hoisted.Var variables and function declaration are accessible even before they are declared but const and let are in Temporal Dead Zone because they define block scope and are useble only after they are declered or initialized",
    id: 26
},
{
    module: "scope-closure",
    question: "What is lexical scope? What is lexing-time?",
    answer: "Lexical scope is the definition area of an expression. In other words, an item's lexical scope is the place in which the item got created (The place an item got invoked/called is not necessarily the item`s lexical scope. Instead, an item`s definition space is its lexical scope).",
    id: 27
},
{
    module: "scope-closure",
    question: "What is closure? Provide an example.",
    answer: `Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope. \r\n
    const testFunc = () => { \r\n
    const testVariable = 5; \r\n
    const test = (a) => a+=testVariable; \r\n
    "return test;}; \r\n
    in the example if we execute testFunc example we will actualy execute test which has closure on testVariable.`,
    id: 28
},
    // Module Pattern / FP intro
{
    module: "modulePattern-FPIntro",
    question: "What is functional programming?",
    answer: "Functional programing is a programing paradigm or pattern which treats computatuins as the evaluation of mathemathical functions and avoids changing-state and mutable data.",
    id: 29
},
{
    module: "modulePattern-FPIntro",
    question: "What is a pure function and what are side effects?",
    answer: "Pure functions: \r\n1.Never changes any of the parameters that get passed to it by reference. \r\n2.The return value of a pure function is not influenced by anything else than its input parameters. Given the same input it will always return the same output. \r\n3.During its execution, a pure function does not change anything outside of it (No side efects).\r\nSide effects we call if function or expression modifies some state of the program, which is outside of its own scope or any change in the system that is observable to the outside world (changing the file system, inserting a record into a database, making an http call, mutatuons, printing to the screen/logging, obtaining user input, querying the DOM, accessing system state).",
    id: 30
},
{
    module: "modulePattern-FPIntro",
    question: "What is a module and why would you use it?",
    answer: "Module is IIFE(Immediately Invoked Function Expression) which is executed immediately and only once, used in the module pattern prior to ES6.It has public and private part. All the variables and functions inside a function are in the same scope, so they could access each other returning only the public method(closure).",
    id: 31
},
{
    module: "modulePattern-FPIntro",
    question: "What is the revealing module pattern?",
    answer: "It is the same as module pattern in which we reveal public pointers to methods inside the Module`s scope. In the revealing module pattern it is easier to see what is exposed without all the code to be in the returned object.",
    id: 32
},
    // Pure array functions
{
    module: "pureArrayFunctions",
    question: "What are the benefits of using array methods (forEach, map, etc.) over loops?",
    answer: "Code looks cleaner, no need to write common logic`s for simple array operations, less places to make misstakes (start/end point,increment/decrement etc.",
    id: 33
},
{
    module: "pureArrayFunctions",
    question: "Implement filter, map and reduce.",
    answer: " GO GO GO !",
    id: 34
},
{
    module: "pureArrayFunctions",
    question: "Refactor an imperative loop using filter, map, reduce, etc.",
    answer: " GO GO GO ! AGAIN :D",
    id: 35
},
// Objects - Adcanced Topics
{
    module: "objectsAdvanced",
    question: "What is the main difference between reference copy and shallow copy?",
    answer: "Reference copy gives us another way to access the same object, with shallow copy a new object is created that has an exact copy of the velues in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied.",
    id: 36
},
{
    module: "objectsAdvanced",
    question: "What is the main difference between shallow and deep copy?",
    answer: "Deep copy copies all fields, and makes copies of dynamically allocated memory poited to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.",
    id: 37
},
{
    module: "objectsAdvanced",
    question: "How can you represent complex data? Give an example?",
    answer: "For complex data we use objects with key/value pairs and if needed a lot of nesting. Keys of object must be strings, but property values can be anything (another object or even array of objects). We must design the structure to be easy to use and in the same time to capture all the requered information.",
    id: 38
},
{
    module: "objectsAdvanced",
    question: "What are methods? Give an example.",
    answer: "JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.",
    id: 39
},
{
    module: "objectsAdvanced",
    question: "What are linked lists? Can you traverse a linked list?",
    answer: "Linked list we call a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next(sometimes even the previous, first, last etc.). It is a data structure consisting of a collection of nodes which together represent a sequence.",
    id: 40
},
]
let desiredQuestions = [];

const dropDown = document.querySelector("select");

const btnGetQ = document.querySelector(".getQ");

const qField = document.querySelector(".question");

const aField = document.querySelector(".answer");

const btnNext = document.querySelector(".btn-next-question")

const btnAnswer = document.querySelector(".btn-show-answer");

const removeEventListener = (element,funk)=>element.removeEventListener("click",funk);

const getQuestion = (x=0) =>qField.textContent = desiredQuestions[x].question;

const showAnswer = () => {
    let current = 0;
    for (let i = 0; i < desiredQuestions.length; i++) {
        if(desiredQuestions[i].question === qField.textContent)
            current = i;
    }
    aField.setAttribute('style', 'white-space: pre-wrap;');
    aField.textContent=desiredQuestions[current].answer;
}

const nextQuestion = () => {
    let current = 0;
    for (let i = 0; i < desiredQuestions.length; i++) {
        if(desiredQuestions[i].question === qField.textContent)
            current = i;
    }
    aField.textContent="";
    if(current < desiredQuestions.length-1)
        return getQuestion(current+1);
    else{
        qField.textContent="No more Questions from this module, select new module for more questions :)";
        btnNext.disabled = true;
        btnAnswer.disabled = true;
    }
};

btnGetQ.addEventListener("click",()=>{
    
    if(dropDown.value === "all")
        desiredQuestions = questions;
    else
       desiredQuestions = questions.filter((el)=>el.module===dropDown.value);

    qField.textContent = getQuestion();

    btnNext.addEventListener("click",nextQuestion);

    btnAnswer.addEventListener("click",showAnswer);

    btnNext.disabled = false;

    btnAnswer.disabled = false;
    
});

