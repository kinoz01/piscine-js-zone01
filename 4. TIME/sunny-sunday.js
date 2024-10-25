function sunnySunday(date) {

    const firstMonday = new Date("0001-01-01")
    const newDaysofWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const daysPaseed = (date.getTime() - firstMonday.getTime()) / (1000 * 60 * 60 * 24)
    return newDaysofWeek[daysPaseed % 6]
}