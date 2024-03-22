//task 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city, country) {
    return "".concat(city, ",").concat(country);
}
var c1 = cityCountry('Lahore', 'Pakistan');
var c2 = cityCountry('tokyo', 'Japan');
var c3 = cityCountry('peris', 'France');
console.log(c1);
console.log(c2);
console.log(c3);
