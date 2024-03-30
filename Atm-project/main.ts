#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 10000;//Dollar
let myPin = 2341;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            type: "number",
            message: "Please sir enter your pin number",
        }
    ]
);
// console.log(pinAnswer.pin)

if(pinAnswer.pin === myPin) {
    console.log("correct your pin code!!!")
    let operationAns = await inquirer.prompt(
        [
            {
              name: "operation",
              type: "list",
              message: "Please select any one option:",
              choices: ["withdraw","check balance","fast cash"],
            }
        ]
    );
    
    // console.log(operationAns)
    
    if (operationAns.operation === "withdraw") {
                    let amountAnswer = await inquirer.prompt([
                        {
                            name: "amount",
                            message: "Enter your withdrawal amount:",
                            type: "number",
                        }
                    ]);
        
                    if (myBalance >= amountAnswer.amount) {
                        myBalance -= amountAnswer.amount;
                        console.log(`Your current balance is: ${myBalance}`);
                    } else {
                        console.log("Insufficient balance!!");
                    }

          } else if (operationAns.operation === "check balance") {
                console.log(`Your current balance is: ${myBalance}`);


            } else if (operationAns.operation=== "fast cash") {
                let amountAnswer = await inquirer.prompt([
                    {
                        name: "amount",
                        message: "Select the withdrawal amount:",
                        type: "list",
                        choices: ["500", "1000", "2000", "3400", "6000", "10000"],
                    }
                ]);

             myBalance -= amountAnswer.amount
             console.log(`your available balance is: ${myBalance}`) ;  
            
                 } else {
            console.log("Invalid pin number!!");
                 }
                }