const isFriday = d => d.getDay() === 5
const isWeekend = d => d.getDay() === 0 ||  d.getDay() === 6
const isLeapYear = d => d.getFullYear() % 4 === 0
const isLastDayOfMonth = d => {
    const nextDay = new Date(d)
    nextDay.setDate(d.getDate()+1)
    return nextDay.getMonth() !== d.getMonth()
}
