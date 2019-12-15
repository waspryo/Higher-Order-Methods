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

