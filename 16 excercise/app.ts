//Task 16

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
 //guests to invite to dinner.
 
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
//that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list

 //• Print a new set of invitation messages, one for each person in your list.

 //start program excercise 15.
 
 let guest : string [] = ["Alia","Anum","Kehkasha","Manal","Anumta"];

//not attend party

let cannotAttend : string = "Alia"

console.log(cannotAttend + " " + "Can not attend Dinner");

//my new guest

let newGuest = "Muskan"
guest[guest.indexOf(cannotAttend)] = newGuest ;
 console.log(guest);

 //invited  guest big dinner start excercise 16

 guest.map((item) => console.log(`Dear ${item},I big found a bigger  Dinner`))

//16 part 1
 //biginning  array guest
 let guestBeginning : string = "Zainab"
 guest.unshift(guestBeginning)
 console.log(guest)

 //16 part 3
 //middle guest
 let middleName : string = "Fatima"
 let middle = guest.length/3
 guest.splice(middle ,0, middleName)
 console.log(guest)

 //16 part 4
 guest.push("Zeeshan")
 console.log(guest)

 //16 part 5
 guest.map((item) =>console.log(`Dear ${item},you are invited in the more people list on Dinner`))
