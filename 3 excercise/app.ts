//Task 3

let personName : string = "Shahzad";
 console.log("lowercase:",personName.toLowerCase());

 console.log("uppercase:",personName.toUpperCase());

 console.log("titlecase:",personName.replace(/\b\w/g,c => c.toUpperCase()));
 