//task 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var name_1 = "Mehreen";
var name_2 = "Mehreen Shahzad";
var name_3 = "Miss Mehreen Shahzad";
// if(name_1 == name_3) {
//     console.log("names are equal")
// }
// else{ 
//     console.log("names are not aqual")
// // }
// if(name_1 != name_2){
//     console.log("names are equal")
// }
// //lowerCase function
// if(name_1 != name_3){
//     console.log("names are equal")
// }
var age_1 = 18;
var age_2 = 22;
// if(age_1 == 18) {
//     // console.log("eligible for vote")
// }
// if (age_1 != 22){
//     console.log("eligible for note vote older")
// }
// if(age_1 <= age_2){
//     console.log("younger")
// }
// if(age_2 >= age_1){
//     console.log("older")
// }
//&& || operator
// if(age_1 == 18 && age_2 == 22){
//     console.log("person is eligible for vote")
// }
// if(age_1 == 18 || age_2 != 22){
//     console.log("person is eligible not for vote")
// }
//array
var country = ["Pakistan", "SaudiArab", "Japan", "China"];
if (country.includes("Pakistan")) {
    console.log("Pakistan is in country list");
}
if (!country.includes("America")) {
    console.log("America is not includes in array");
}
