#! /usr/bin/env node

import inquirer from "inquirer"

// This project is a simple console based Student Management System. In this project you will be learning how
//  to add new students, how to generate a 5 digit unique studentID for each student, how to enroll students in 
//  the given courses. Also, you will be implementing the following operations enroll, view balance, 
//  pay tuition fees, show status, etc. The status will show all the details of the student including
//   name, id, courses enrolled and balance.This is one of the best projects to implement
//    the Object Oriented Programming concepts.

const randomNumber: number = Math.floor(10000 + Math.random() * 90000)
  //console.log(randomNumber);

let myBalance: number = 0
let answer = await inquirer.prompt([
  {
    name: "student",
    type: "input",
    message: "Enter student name:",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "Please enter a non-empty value user.";
    }
  },
  {
    name: "courses",
    type: "list",
    message: "Select the course to enrolled",
    choices: ["Javascript","Typescript","HTML","CSS","Python"]


  }
]);

const tutionFees: {[key: string]: number} = {
  "Javascript": 2000,
   "Typescript": 6000,
   "HTML": 2500,
   "CSS": 5000,
   "Python": 10000,

};
console.log(`\nTutionFees: ${tutionFees[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);

let paymentType = await inquirer.prompt([
  {
    name: "payment",
    type: "list",
    message: "Select payment method",
    choices: ["Bank Transfer","Easypaisa","Jazzcash"]
  },
  {
    name: "amount",
    type: "input",
    message: "Transfer Money",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;               //successful
      }
      return "Please enter a non empty value"; //error
    }
  }
]);

console.log(`\nYou select payment method ${paymentType.payment}`);

const myTutionFees = tutionFees[answer.courses];

const paymentAmount = parseFloat(paymentType.amount)

if(myTutionFees === paymentAmount) {
  console.log(`Congratulation, you have successfully enrolled in ${answer.courses}.\n`);
 
  let ans = await inquirer.prompt([
    {
      name: "select",
      type: "list",
      message: "What would you like to do next",
      choices: ["View status" ,"Exit"]
    }
  ])

  if(ans.select === "View status") {
    console.log("\n*****Status******\n");
    console.log(`Student Name: ${answer.students}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Course: ${answer.courses}`);
    console.log(`Tution Fees paid: ${paymentAmount}`);
    console.log(`Balance: ${myBalance += paymentAmount}`);

  }else{
    console.log("\nExiting Student Management System\n");
  }


}else{
  console.log("Invalid amount due to course \n");
}