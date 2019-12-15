// Assign a function to a variable

const whatTimeIsIt = () => {
    console.log('It is:', new Date().toTimeString())
}
whatTimeIsIt();

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