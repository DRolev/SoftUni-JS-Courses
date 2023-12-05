function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;

    let student = 0;
    let standard = 0;
    let kid = 0;

    while (command !== "Finish") {
        let movie = command;
        let seats = Number(input[index]);
        index++;
        let tempCommand = input[index];
        index++;

        let ticketsSold = 0;

        while (tempCommand !== "End") {
            let ticket = tempCommand;
            ticketsSold++;

            switch (ticket) {
                case "student": student++; break;
                case "standard": standard++; break;
                case "kid": kid++; break;
            }
            if (seats <= ticketsSold) {
                break;
            }
            tempCommand = input[index];
            index++;
        }
        let seatsTaken = ticketsSold / seats * 100;
        console.log(`${movie} - ${seatsTaken.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    let totalTickets = student + standard + kid;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(student / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid / totalTickets * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

