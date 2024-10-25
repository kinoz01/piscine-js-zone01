const firstDayWeek = (week, year) => {
    if (week === 1) return `01-01-${year}`

    const msInDay = 1000 * 60 * 60 * 24 // Milliseconds in a day
    const startOfYear = new Date(`${year}-01-01`)
    const offset = startOfYear.getDay() === 0 ? 6 : startOfYear.getDay() - 1

    const firstMonday = new Date(startOfYear.getTime() - (offset * msInDay))

    const resultDate = new Date(firstMonday.getTime() + (week - 1) * 7 * msInDay)
    return resultDate.toISOString().replace(/T.*/g, '').split('-').reverse().join('-')
}
