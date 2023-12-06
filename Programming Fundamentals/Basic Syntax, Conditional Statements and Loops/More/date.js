function getNextDay(year, month, day) {
    let currentDate = new Date(year, month - 1, day); 

    currentDate.setDate(currentDate.getDate() + 1);

    let nextYear = currentDate.getFullYear();
    let nextMonth = currentDate.getMonth() + 1; 
    let nextDay = currentDate.getDate();

    let nextYearString = String(nextYear);
    let nextMonthString = String(nextMonth)
    let nextDayString = String(nextDay)

    let result = `${nextYearString}-${nextMonthString}-${nextDayString}`;

    console.log(result);
}
getNextDay(2016, 9, 30);


