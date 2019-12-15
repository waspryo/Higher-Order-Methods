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
