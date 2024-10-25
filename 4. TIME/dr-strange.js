const addWeek = date => {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday',] 
    const epoch = new Date('0001-01-01')
    const D = new Date(date)
    const daysPassed = Math.round((D.getTime() - epoch.getTime())/(1000*60*60*24))

    return weekDays[daysPassed % 14]
}


const timeTravel = ({ date, hour, minute, second }) => {
    date.setHours(hour)
    date.setMinutes(minute)
    date.setSeconds(second)
    return date
}
