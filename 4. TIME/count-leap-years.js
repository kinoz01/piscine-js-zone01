const countLeapYears = date => {
    let year = date.getFullYear()
    let c = 0
    for (let i = 1; i < year; i++) {
        if (i % 100 === 0 && i % 400 !== 0) continue
        if (i % 4 === 0) c++
    }
    return c
}
