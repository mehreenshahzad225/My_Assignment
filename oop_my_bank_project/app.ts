#! /usr/bin/env node

//Learning Object Oriented Programming with TypeScript MyBank Console App
//In this project you are going to follow this video which explains object oriented programming using C# and write the same code in TypeScript.

import { faker } from "@faker-js/faker";
import chalk from "chalk";

import inquirer from "inquirer"

chalk
//class customer

class Customer{
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    mobNumber : number;
    accNumber : number;

    constructor (
        fName:string,
        lName:string,
        age:number,
        gender:string,
        mob:number,
        acc:number,

    ) {

        this.firstName = fName;
        this.lastName =lName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mob;
        this.accNumber = acc;
        

    }
 }

 //interface bankaccount
 interface BankAccount{
    accNumber : number,
    balance : number,
 }
 //class Bank
 class Bank {
    customer : Customer[] = [];
    account : BankAccount[] = [];

    addCustomer(obj:Customer){
      this.customer.push(obj);
    }

    addAccountNumber(obj:BankAccount) {
      this.account.push(obj);
    }
    transaction(accObj: BankAccount) {
      let NewAccounts = this.account.filter(acc => acc.accNumber !==accObj.accNumber);
      this.account = [...NewAccounts, accObj];
    }
 }

 let myBank = new Bank();

 //console.log(myBank);

 //customer create
 for(let i: number = 1; i<=3; i++ ){
    let fName = faker.person.firstName("female");
    let lName = faker.person.lastName();
    let num = parseInt(faker.phone.number("3##########"));
    const cus = new Customer(fName,lName, 25 * i, "female", num , 1000 + i); //1001,1002
   // console.log(cus);
   myBank.addCustomer(cus);
   myBank.addAccountNumber({accNumber: cus.accNumber,balance:100 * i});
 }

 //console.log(myBank);

 //Bank functionality

 async function bankService(bank:Bank) {
  do{ let service = await inquirer.prompt({
      type: "list",
      name: "select",
      message: "Please Select the Service",
      choices: ["View Balance", "Cash Withdraw" , "Cash Deposit",]

   });

   //view Balance
      if(service.select == "View Balance") {
      let res = await inquirer.prompt({
         type: "input",
         name: "num",
         message: "Please Enter your Account Number:"
      });
      let account = myBank.account.find((acc)=>acc.accNumber == res.num)
      if(!account) {
         console.log(chalk.red.bold.italic("Invaid Account Number"));
      }
      if (account) {
         let name =  myBank.customer.find((item)=> item.accNumber == account?.accNumber);
         console.log(`Dear ${chalk.green.italic(name?.firstName)} ${chalk.green.italic(name?.lastName)} 
         your Account Balance is ${chalk.bold.blueBright(`$${account.balance}`)}`);
      }

   }

   //Cash Withdraw
   if(service.select == "Cash Withdraw") {
      let res = await inquirer.prompt({
         type: "input",
         name: "num",
         message: "Please Enter your Account Number:"
      });
      let account = myBank.account.find((acc)=>acc.accNumber == res.num);
      if(!account) {
         console.log(chalk.red.bold.italic("Invaid Account Number"));
      }
      if(account) {
         let ans = await inquirer.prompt({
            type: "number",
            name: "rupee",
            message: "Please Enter your Amount:"

         });
         if(ans.rupee > account.balance){
            console.log(chalk.red.bold("Mojuda balance nakafi hai...."))
         }
         let newBalance = account.balance - ans.rupee
         //transaction method call
         bank.transaction({accNumber:account.accNumber,balance: newBalance});
        /// console.log(newBalance);
      }

 }
   //Cash deposite
 if(service.select == "Cash Deposit") {
      let res = await inquirer.prompt({
         type: "input",
         name: "num",
         message: "Please Enter your Account Number:"
      });
      let account = myBank.account.find((acc)=>acc.accNumber == res.num);
      if(!account) {
         console.log(chalk.red.bold.italic("Invalid Account Number"));
 }
 if(account) {
         let ans = await inquirer.prompt({
            type: "number",
            name: "rupee",
            message: "Please Enter your Amount:"

         });
         let newBalance = account.balance + ans.rupee;
         //transaction method call
         bank.transaction({accNumber:account.accNumber,balance: newBalance});
          //console.log(newBalance);
      }

}}
  
  while(true)
 }

bankService(myBank);
