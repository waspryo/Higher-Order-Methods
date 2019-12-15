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