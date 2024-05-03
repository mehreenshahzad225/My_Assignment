#! /usr/bin/env node

import inquirer from "inquirer"


//The app will show the students multiple choice questions and promt the user to reply. In the end it will 
//show the students the result of the quiz.

const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "q1.what is the correct way to check if two values are not equal in typescript",
       choices: ["a == b","a === b","a = b","a !== b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "q2.which of the following characters is commonly allowed in variable names in typescript",
       choices: ["$","@","#","&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "q3.which operator is commonly used for string concatination  in typescript",
       choices: ["+","-","*","/"]
    },
    {
        name: "question_4",
        type: "list",
        message: "q4.In typescript ,which symbol is commonly used to terminate a statement",
       choices: [",",";",".",":"]
    },
    {
        name: "question_5",
        type: "list",
        message: "q5.which method of Inquirer .js is used to start the prompt interface and receive user input ?",
       choices: ["start()", "prompt()", "run()", "init()"]
    }

]);

let score: number = 0;

switch(quiz.question_1) {
    case "a !== b":
        console.log("1.correct!");
        ++score;
        break;
        default:
            console.log("1.Incorrect");
}  
switch(quiz.question_2) {
    case "$":
        console.log("2.correct!");
        ++score;
        break;
        default:
            console.log("2.Incorrect");
}  
switch(quiz.question_3) {
    case "+ ":
        console.log("3.correct!");
        ++score;
        break;
        default:
            console.log("3.Incorrect");
}  
switch(quiz.question_4) {
    case ";":
        console.log("4.correct!");
        ++score;
        break;
        default:
            console.log("4.Incorrect");

} switch(quiz.question_5) {
    case "prompt()":
        console.log("5.correct!");
        ++score;
        break;
        default:
            console.log("5.Incorrect");
} 

console.log(`Score: ${score}`);


  
  
  
  
  
  
  
  
  
  