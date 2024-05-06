#! /usr/bin/env node

//This project is not GUI based. It is a console-based game. The video here shows how to develop the game in Java.

//You will take the requirements of the game from the video and develop the game in TypeScript and Node.js


import inquirer from "inquirer"

//classes palyer & opponent
class player{
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100
    }
}

class opponent{
    name: string;
    fuel: number = 100;
    constructor(name :string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    
    }


    //player name and select opponent
let newplayer = await inquirer.prompt([
    {
        name:"name",
        type: "input",
        message: "Please Enter your name:"
    }
])
//console.log(player.name)

 let newopponent = await inquirer.prompt([
   {
        name: "select",
         type: "list",
         message: "select your opponent",
         choices: ["Skeleton", "Alien", "Zombie"]
     }
 ])

 //console.log(newopponent.select);

///data collect user
 let p1 = new player (newplayer.name)
 let o1 = new opponent (newopponent.select)

 do{
    ///Skeleton
    if (newopponent.select == "Skeleton") {
    let ask = await inquirer.prompt([
        {
          name: "opt",
          type: "list",
          message: "What would you like to do ?",
          choices: ["Attack","Drink portion","Run for your Life.."]
        }
    ]);
    if(ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
                if(num > 0){
                 p1.fuelDecrease()
                 console.log(`${p1.name} fuel is ${p1.fuel}`);
                 console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                   console.log("You Loose, Better Luck Next Time");
                    process.exit()
                }
            }
           if(num <= 0) {
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(o1.fuel <= 0){
                    console.log("You Win");
                    process.exit() 

            }
        }
        if(ask.opt == "Drink portion") {
            p1.fuelIncrease()
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        if(ask.opt == "Run for your Life..") {
            console.log("You Loose, Better Luck Next Time");
            process.exit()
        }
    }
}

///Alien
if (newopponent.select == "Alien") {
    let ask = await inquirer.prompt([
        {
          name: "opt",
          type: "list",
          message: "What would you like to do ?",
          choices: ["Attack","Drink portion","Run for your Life.."]
        }
    ]);
    if(ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
                if(num > 0){
                 p1.fuelDecrease()
                 console.log(`${p1.name} fuel is ${p1.fuel}`);
                 console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                   console.log("You Loose, Better Luck Next Time");
                    process.exit()
                }
            }
           if(num <= 0) {
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(o1.fuel <= 0){
                    console.log("You Win");
                    process.exit() 

            }
        }
        if(ask.opt == "Drink portion") {
            p1.fuelIncrease()
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        if(ask.opt == "Run for your Life..") {
            console.log("You Loose, Better Luck Next Time");
            process.exit()
        }
    }
}

///Zombie
if (newopponent.select == "") {
    let ask = await inquirer.prompt([
        {
          name: "opt",
          type: "list",
          message: "What would you like to do ?",
          choices: ["Attack","Drink portion","Run for your Life.."]
        }
    ]);
    if(ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
                if(num > 0){
                 p1.fuelDecrease()
                 console.log(`${p1.name} fuel is ${p1.fuel}`);
                 console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                   console.log("You Loose, Better Luck Next Time");
                    process.exit()
                }
            }
           if(num <= 0) {
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(o1.fuel <= 0){
                    console.log("You Win");
                    process.exit() 

            }
        }
        if(ask.opt == "Drink portion") {
            p1.fuelIncrease()
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        if(ask.opt == "Run for your Life..") {
            console.log("You Loose, Better Luck Next Time");
            process.exit()
        }
    }
}

 }

    while(true)
