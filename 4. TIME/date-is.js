const isValid = date => date !== 'Invalid Date' && !isNaN(date) && date !== ''
const isAfter = (d1, d2) => d1 > d2
const isBefore = (d1, d2) => d1 < d2
const isFuture = date => isValid(date) && date > Date.now()
const isPast = date => isValid(date) && date < Date.now()
