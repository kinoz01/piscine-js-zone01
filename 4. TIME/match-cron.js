const matchCron = (cron, date) => {
    const dateSlice = [date.getMinutes(), date.getHours(), date.getDate(), date.getMonth()+1, date.getDay()]

    const part = cron.split(" ")
    for (let i = 0; i < part.length; i++) {
        if (part[i] === "*") continue
        if (dateSlice[i] !== Number(part[i])) return false
    }
    return true
}
