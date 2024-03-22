//Task 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of 
//invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who 
//can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.


let guest : string [] = ["Alia","Anum","Kehkasha","Manal","Anumta"];

//not attend party

let cannotAttend : string = "Alia"

console.log(cannotAttend + " " + "Can not attend Dinner");

//my new guest

let newGuest = "Muskan"
guest[guest.indexOf(cannotAttend)] = newGuest ;
 console.log(guest);

 //invited message guest

 guest.map((item) => console.log(`Dear ${item},you are invited to the Diner`))