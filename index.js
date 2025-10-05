// JavaScript Coding Challenge

// 1. Create a function named 'createPerson' that returns an object named 'person' using object literal syntax. The object should have properties 'name' and 'age', with your name and age as the values.

function createPerson () {
    const person = {
        name: 'Quinn',
        age: 26
    }
    return person
}

// 2. Create a function 'logPersonProperties' that takes a 'person' object as an argument and returns the 'name' and 'age' properties of the 'person' object using dot notation.

const person = {
    name: 'Quinn', 
    age: 26
}

function logPersonProperties (person) {
console.log(person.name);
console.log(person.age);
}

// 3. Create a function 'modifyAge' that takes a 'person' object and a new age as arguments, modifies the 'age' property of the 'person' object to the new age, and returns the updated object.

function modifyage (person, age) {
    person.age = age + 1;
    return person;
}


// 4. Create a function 'addJob' that takes a 'person' object and a job as arguments, adds a new property 'job' to the 'person' object with the job as its value, and returns the updated object.


function addJob (person,job) {
    person.job = job;
    return person;
}

// 5. Create a function 'deleteAge' that takes a 'person' object as an argument, deletes the 'age' property from the 'person' object, and returns the updated object.

function deleteage(person) {
    delete person.age;
    return person;
}

// 6. Create a function 'addGreet' that takes a 'person' object as an argument, adds a method 'greet' to the 'person' object that returns a greeting message using the 'name' property, and calls the 'greet' method.

function addGreet (person) {
    person.greet = 'Hello my nname is ' + person.name;
    return person;
}

// 7. Create a function 'createNumbersArray' that returns an array named 'numbers' with five numbers of your choice.

function createNumbersArray () {
    const numbers = new Array(1, 2, 3, 4, 5)
    console.log(numbers);
}

    
// 8. Create a function 'logFirstAndThird' that takes a 'numbers' array as an argument and returns the first and third elements of the 'numbers' array using their indices.

let numbers = [1, 2, 3, 4, 5]

function logFirstAndThird (numbers) {
    let y;
    let x;    
    y = numbers[0];
    x = numbers[2];
    let output = 'First number is ' + y  +', third number is ' + x;
    return output 
}

logFirstAndThird(numbers)


// 9. Create a function 'modifySecond' that takes a 'numbers' array and a new number as arguments, modifies the second element of the 'numbers' array to the new number, and returns the updated array.

function modifySecond (array, number) {
    array[1] = number;
    return array;
}

modifySecond(numbers)


// 10. Create a function 'logLength' that takes a 'numbers' array as an argument and returns its length.

function logLength(array) {
    let x = array.length;
    return x;
}

logLength(numbers)


// 11. Create a function 'iterateWithFor' that takes a 'numbers' array as an argument and uses a for loop to iterate over the 'numbers' array and return each element.

function iterateWithFor (array) {
    for (let x = 0; x < array.length; x++) {
        console.log(array[x]);
    }
}

iterateWithFor(numbers);

// 12. Create a function 'iterateWithWhile' that takes a 'numbers' array as an argument and uses a while loop to iterate over the 'numbers' array and return each element.

let x = 0;

function iterateWithWhile(array) {
    while (x < array.length) {
        console.log(array[x]);
        x++;
    }
}

iterateWithWhile(numbers);



// 13. Create a function 'iterateWithForOf' that takes a 'numbers' array as an argument and uses a for...of loop to iterate over the 'numbers' array and return each element.

function iterateWithForOf (array) {
    for (array of array) {
        console.log(array);
    }
}

iterateWithForOf(numbers);

// 14. Create a function 'createJSON' that takes a 'person' object as an argument, creates a JSON string named 'json' representing the 'person' object, and returns the JSON string.

const person1 = {
    name: 'Quinn',
    age: 26,
}

function createJSON (object) {
    const jsonString = '{"name":object[name],"age":object[age]}' 
        console.log(jsonString)
}

createJSON (person1)

// 15. Create a function 'parseJSON' that takes a 'json' string as an argument, parses the 'json' string into a JavaScript object, and returns the object.

const string = '{"name": 'Quinn Holmes', "age": '26'}'

function parseJson (json) {
    const obj = JSON.parse(json);
    console.log(obj)
}

parseJson(string)



// 16. Create a function 'stringifyPerson' that takes a 'person' object as an argument, stringifies the 'person' object into a JSON string, and returns the string.

function stringifyPerson (person) {
    const jsonString = JSON.stringify(person);
    console.log(person);
}

stringifyPerson(person);