function vacationBooksList(input) {

    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let requiredDays = Number(input[2]);

    let totalTime = pages / pagesPerHour;
    let hoursPerDay = totalTime / requiredDays;

    console.log(hoursPerDay);
}
vacationBooksList(["212 ",
"20 ",
"2 "]
)