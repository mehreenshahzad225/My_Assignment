#! /usr/bin/env node
import inquirer from "inquirer"

const answerMe: {
      Sentence : string
} = await inquirer.prompt([
    {
      name : "Sentence",
      type :  "input",
      message : "Pleae entrt your sentnce to word count:",
    }
])
const word = answerMe.Sentence.trim().split(" ")
console.log(word)

console.log(`your sentence word count is ${word.length}`)