function filter(arr, func) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result
}

const reject = (arr, func) => filter(arr, (...args) => !func(...args))

const partition = (arr, func) => [filter(arr, func), reject(arr, func)]
