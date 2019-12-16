// Assign a function to a variable

const whatTimeIsIt = () => {
    console.log('It is:', new Date().toTimeString())
}
whatTimeIsIt();

/******************************* */ 

// pass a function as an argument
const sayHello = () => {
 return 'hello, '
}
const greeting = (helloFn, name) => {
    console.log(helloFn() + name)
}
// const greeting = function (helloFn, name) {
//     console.log(helloFn() + name)
// }
greeting(sayHello, 'javaScript')
//  Return a function
const sayHelloWorld = function () {
    return () => {
        console.log('Hello!')
    }
}
const innerFn = sayHelloWorld();
innerFn()

/******************************* */ 

// 1. Store the return value in variable and involke it:
// ```
// const loghello = sayHello();
// logHell();
// ```
// 3. Invoke the return value on the same line:
// ```
// sayHello()();
// ```
function getName() {
    const name = 'Tony'
    // console.log(name)
    return name;
}
function greet(getNameFn, greeting) {
    console.log(`${greeting}, ${getNameFn()}`);
}
// const greet = (getNameFn, greeting) => console.log(`${greeting} ${getNameFn()}`);
greet(getName, 'hello')
// console.log(greet)

// function makeAdder(num) {
//     return (other_num) => {
//         return num + other_num
//     }
// }
const makeAdder = (num) => 
(other_num) => other_num + num;

const tenAdder = makeAdder(10)
console.log(tenAdder(2))
console.log(tenAdder(43))

/******************************* */ 

// 01 - Identify
// document.body.addEventListener('click', () => {
//     console.log('the body was clicked!')
// })
// // Can also be written as:
// const bodyClick = function () {
//     console.log('The body was clicked!')
// }
// document.body.addEventListener('click', bodyClicked)

/******************************* */ 
// Promise

// fetch('https://www.reddit.com/r/javascript/.json')
//     .then(res => res.jsoon())
//     .then(result => {
//         console.log(result)
//     })
// // Can also be written as:
// const resJSON = res => res.json();
// const logResult = result => {
//     console.log(result)
// }
// fetch('https://www.reddit.com/r/javascript/.json')
// .then(resJSON)
// .then(logResult)

const numbersArray = [1, 2, 3, 4, 5];

for (let i = 0; i < numbersArray.length; i++) {
    const number = numbersArray[i];
    console.log(number);
}
numbersArray.forEach((number) => {
    console.log(number)
})

const numbers = [1, 2, 3, 4, 5 ];
numbers.forEach((number, index, array) => {
    console.log(number, index, array)
})

const flavors = ['chocolate', 'ginger', 'carrot', 'coffee', 'walnut', 'banana'];

for (let i = 0; i < flavors.length; i++) {
    console.log('I like ' + flavors[i] + ' cake');   
}

flavors.forEach((flavor) => {
    console.log(`I like ${flavor}`)
}) 

const nums = [2, 4, 6, 8]
for (let i = 0; i < nums.length; i++) {
    console.log('the number', nums[i], 'is at index', i)
}

// nums.forEach((num, index) => {
//     console.log(`the number ${num} is at index ${index}`)
// })

const evenNumbers = [2, 4, 6, 8]
for (let i = 0; i < nums.length; i++) {
    evenNumbers[i] = evenNumbers[i] * 2
}

console.log(evenNumbers)

evenNumbers.forEach((number, index, array) => {
    array[index] = number * 2
})
console.log(evenNumbers)

let products = [{
    name: 'Runnig shoes',
    price: 75
}, {
    name: 'golf shoes',
    price: 85
}, {
    name: 'Dress shoes',
    price: 95
}, {
    name: 'Walking shoes',
    price: 65
}, {
    name: 'Sandals',
    price: 55
}
]
products.forEach(product => {
    console.log(`My ${product.name} is ${product.price}`)
})

let numbers_1 = [1,2,3,4,5];
// 1. Initialize accumulater variable
let sum = 0;

// 2. Iterate over an array
for (let i = 0; i < numbers_1.length; i++) {
    const number = numbers_1[i];
    sum += number; // 3. Update the accumulator variables
}
console.log(sum)

let numbers_2 = [1,2,3,4,5]
let doubledNumbers = [] // 1.Initialize accumulator variable

// 2. Iterate over an array
for (let i = 0; i < numbers_2.length; i++) {
    const number = numbers_2[i];
    doubledNumbers.push(number * 2) // 3. Update the accumulator variable
}
console.log(doubledNumbers)

let numbers_3 = [1,2,3,4,5]
let sum1 = 0;

numbers_3.forEach((number) => {
    sum1 += number;
})
console.log(sum1)