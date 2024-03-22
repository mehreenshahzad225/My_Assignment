//task 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the
//  shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function makeShirt(size, text) {
    console.log("you order a ".concat(size, "shirt that says ").concat(text));
}
makeShirt('large', '"I love typescript"');
makeShirt('medium', '"I need a bag shirt"');
