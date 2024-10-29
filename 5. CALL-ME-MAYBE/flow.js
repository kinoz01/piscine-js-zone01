const flowww = funcs => (...args) => funcs.reduce((acc, func) => Array.isArray(acc) ? func(...acc) : func(acc), args)

function flow(funcs) {
    return function (...args) {
        let acc = funcs[0](...args)
        for (let i = 1; i < funcs.length; i++) {
            acc = Array.isArray(acc) ? funcs[i](...acc) : funcs[i](acc)
        }
        return acc
    }
}



const add = (a, b) => a + b; // Takes 2 arguments, returns a single number
const square = (x) => [x * x, 4]; // Takes 1 argument, returns two arguments
const multiply = (x, y) => x * y; // Takes 2 arguments
const pipeline = flowww([add, square, multiply]);

console.log(pipeline(2, 3, 4, 5)) // 100
