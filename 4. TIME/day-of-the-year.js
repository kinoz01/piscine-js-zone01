const dayOfTheYear = date => {
    const startYear = new Date(date)
    startYear.setMonth(0)
    startYear.setDate(1)
    return Math.round((date.getTime() - startYear.getTime()) / (1000 * 60 * 60 * 24) + 1)
}
