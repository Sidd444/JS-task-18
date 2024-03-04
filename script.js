console.log("Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.");

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

console.log("\nQ2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators.");

function getGrade(score) {
    return score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';
}

console.log(getGrade(85)); // Output: B

console.log("\nQ3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.");

const car = {
    companyName: 'Toyota',
    model: 'black',
    year: 2020
};

function changeYear(newYear) {
    car.year = newYear;
}

changeYear(2022);
const { model, year } = car;
console.log(`Model: ${model}, Year: ${year}`); // Output: Model: black, Year: 2022

console.log("\nQ4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.");

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = numArray.filter(num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
});
console.log(primeNumbers); // Output: [2, 3, 5, 7]

console.log("\nQ5 - State different use cases of map, filter and reduce functions.");
console.log("Map: Transforming each element of an array, e.g., converting Fahrenheit to Celsius.");
console.log("Filter: Filtering elements of an array based on a condition, e.g., finding all even numbers.");
console.log("Reduce: Aggregating elements of an array into a single value, e.g., calculating the sum of all numbers.");

console.log("\nQ6 - Write an asynchronous function using async-await to fetch data from an API (you can use the JSONPlaceholder API) and log the result.");

async function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error fetching data:', error));
}

fetchData();

console.log("\nQ7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.");

const person = {
    name: 'John Doe',
    address: {
        city: 'New York',
        zip: '10001'
    }
};

console.log(person.contact?.phone); // Output: undefined (if contact property is missing)
