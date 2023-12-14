export const useDate = () => {

    const date = new Date()
    
    return{
        day: date.toLocaleString('en-US', {weekday: 'long'}),
        dayNumber: date.toLocaleString("en-US", { day: "numeric" }),
        week: Math.ceil(date.getDate() / 7),
        month: date.toLocaleString("en-US", { month: "long" }),
        year: date.toLocaleString("en-US", { year: "numeric" }),
    }

}
