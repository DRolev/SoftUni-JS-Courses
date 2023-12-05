function readingHours(pages, pagesPerHour, days) {
    let hoursNeeded = pages / pagesPerHour;
    let daysNeeded = hoursNeeded / days;
    console.log(daysNeeded);
}
readingHours(212, 20, 2)