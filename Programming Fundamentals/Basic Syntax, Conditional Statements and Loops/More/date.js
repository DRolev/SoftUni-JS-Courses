function getNextDay(year, month, day) {
    // Create a Date object using the provided year, month, and day
    let currentDate = new Date(year, month - 1, day); // Note: month is 0-indexed in Date object

    // Increment the date by 1 day
    currentDate.setDate(currentDate.getDate() + 1);

    // Extract the updated year, month, and day
    let nextYear = currentDate.getFullYear();
    let nextMonth = currentDate.getMonth() + 1; // Note: month is 0-indexed, so add 1
    let nextDay = currentDate.getDate();

    // Convert the components to strings
    let nextYearString = String(nextYear);
    let nextMonthString = String(nextMonth)
    let nextDayString = String(nextDay)

    // Combine the strings in the desired format
    let result = `${nextYearString}-${nextMonthString}-${nextDayString}`;

    // Return the result
    console.log(result);
}
getNextDay(2016, 9, 30);


