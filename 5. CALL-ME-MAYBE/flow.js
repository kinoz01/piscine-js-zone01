const floww = funcs => (...args) => funcs.reduce((acc, func) => Array.isArray(acc) ? func(...acc) : func(acc), args)

const add = (a, b) => a + b; // Takes 2 arguments, returns a single number
const square = (x) => [x * x, 4]; // Takes 1 argument, returns two arguments
const multiply = (x, y) => x * y; // Takes 2 arguments
const pipeline = floww([add, square, multiply]);
console.log(pipeline(2, 3, 4, 5)) // 100
