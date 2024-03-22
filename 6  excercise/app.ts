//Task 6
//tripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of 
//the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
 //so the whitespace around the name is displayed. Then print the name after striping the white spaces.

//white space name

let personName : string = "\n\t Aiza Shahzad \t\n";

console.log(personName);

//trim name

let stripped : string = personName.trim();

console.log(stripped);