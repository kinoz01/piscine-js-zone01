const map = (arr, func) => {
    let res  = []
    for (let i=0; i < arr.length; i++) {
        res.push(func(arr[i], i, arr))
    }
    return res
}

const flatMap = (arr, func) => [].concat(...map(arr, func))
