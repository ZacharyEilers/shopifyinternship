
const DateHelper = {
    fromDashedString: (dashed: string) => {
        let dateObj = new Date(dashed)
        dateObj.setTime(dateObj.getTime() + 6 * 60 * 60 * 1000)
        return dateObj
    },
    toDashedString: (date: Date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    },
}
export default DateHelper