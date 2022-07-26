
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
    answer: "",
    id: 2
},
    // Functions / Exceptions
{
    module: "functions-exceptions",
    question: "What is a function? What types of functions are there?",
    answer: "",
    id: 3
},
{
    module: "functions-exceptions",
    question: "What is the difference between function expression, fat arrows and function declaration?",
    answer: "",
    id: 4
},
{
    module: "functions-exceptions",
    question: "What is an immediately-invoked function expression? Why use it?",
    answer: "",
    id: 5
},
    // NPM / ES Modules
{
    module: "npm-ESModules",
    question: "What is NPM? What are the benefits of using it?",
    answer: "",
    id: 6
},
{
    module: "npm-ESModules",
    question: "What is the package.json file?",
    answer: "",
    id: 7
},
{
    module: "npm-ESModules",
    question: "What are NPM scripts?",
    answer: "",
    id: 8
},
{
    module: "npm-ESModules",
    question: "What are ES Modules?",
    answer: "",
    id: 9
},
    // ESNext / ESLint
{
    module: "esnext-eslint",
    question: "What are the benefits of including 'use strict' at the beginning of a JavaScript source file?",
    answer: "",
    id: 10
},
{
    module: "esnext-eslint",
    question: "What are template strings? What are their benefits?",
    answer: "",
    id: 11
},
{
    module: "esnext-eslint",
    question: "What are destructuring assignments?",
    answer: "",
    id: 12
},
    //  Objects and destructuring
{
    module: "obj-destructuring",
    question: "What are objects? Provide an example.",
    answer: "",
    id: 13
},
{
    module: "obj-destructuring",
    question: "What do we use objects for?",
    answer: "",
    id: 14
},
{
    module: "obj-destructuring",
    question: "What are the differences between primitive and reference types? Give code examples.",
    answer: "",
    id: 15
},
{
    module: "obj-destructuring",
    question: "What is destructuring?",
    answer: "",
    id: 16
},
    // Git
{
    module: "git",
    question: "What is git? What are the benefits of using it?",
    answer: "",
    id: 17
},
{
    module: "git",
    question: "What is GitLab? What are the benefits of using it?",
    answer: "",
    id: 18
},
{
    module: "git",
    question: "How is GitLab different from git?",
    answer: "",
    id: 19
},
{
    module: "git",
    question: "Which are the global configurations you need to set in order to use git? What is their role?",
    answer: "",
    id: 20
},
{
    module: "git",
    question: "What is a commit? What information does it contain?",
    answer: "",
    id: 21
},
    // Scope / Closure
{
    module: "scope-closure",
    question: "What is scope? Provide an example.",
    answer: "",
    id: 22
},
{
    module: "scope-closure",
    question: "What is the difference between const, let and var?",
    answer: "",
    id: 23
},
{
    module: "scope-closure",
    question: "What is the difference between == and ===, and what is type coercion?",
    answer: "",
    id: 24
},
{
    module: "scope-closure",
    question: "What is variable and function hoisting?",
    answer: "",
    id: 25
},
{
    module: "scope-closure",
    question: "What is hoisted and what is not?",
    answer: "",
    id: 26
},
{
    module: "scope-closure",
    question: "What is lexical scope? What is lexing-time?",
    answer: "",
    id: 27
},
{
    module: "scope-closure",
    question: "What is closure? Provide an example.",
    answer: "",
    id: 28
},
    // Module Pattern / FP intro
{
    module: "modulePattern-FPIntro",
    question: "What is functional programming?",
    answer: "",
    id: 29
},
{
    module: "modulePattern-FPIntro",
    question: "What is a pure function and what are side effects?",
    answer: "",
    id: 30
},
{
    module: "modulePattern-FPIntro",
    question: "What is a module and why would you use it?",
    answer: "",
    id: 31
},
{
    module: "modulePattern-FPIntro",
    question: "What is the revealing module pattern?",
    answer: "",
    id: 32
},
    // Pure array functions
{
    module: "pureArrayFunctions",
    question: "What are the benefits of using array methods (forEach, map, etc.) over loops?",
    answer: "",
    id: 33
},
{
    module: "pureArrayFunctions",
    question: "Implement filter, map and reduce.",
    answer: "",
    id: 34
},
{
    module: "pureArrayFunctions",
    question: "Refactor an imperative loop using filter, map, reduce, etc.",
    answer: "",
    id: 35
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

