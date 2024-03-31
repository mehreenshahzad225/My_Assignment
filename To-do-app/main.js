import inquirer from "inquirer";
// let fruitChaat = ["Banana","Apple","Orange"]
// //pop
// // fruitChaat.pop();
// // console.log(fruitChaat)
// fruitChaat = fruitChaat.concat(['Melon','Kiwi'])
// console.log(fruitChaat)
//loops
// let ramdanDays = 0;
// while(ramdanDays <= 30){
//     console.log("fasting")
//     console.log("prayr")
// }
// 
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in your Todos ?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to addd more ?",
            default: "false",
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
