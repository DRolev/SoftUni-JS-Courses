function oscars (input) {
    let index = 0;
    let actor = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let juries = Number(input[index]);
    index++;

    let condition = false;

    for (i = 0; i < juries; i++) {
        let currentJury = input[index];
        index++;
        let currentPoints = Number(input[index]);
        index++;

        let result = (currentJury.length * currentPoints / 2);
        points += result;

        if (points > 1250.5) {
            condition = true;
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }

    if (!condition) {
        let diff = Math.abs(points - 1250.5);
        console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
