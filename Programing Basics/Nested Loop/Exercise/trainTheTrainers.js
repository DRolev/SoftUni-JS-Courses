function trainTheTrainers(input) {
    let index = 0;
    let jurry = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let finalAvg = 0;
    let presCount = 0;


    while (command !== "Finish") {
        let presentation = command;
        let currentGradeSum = 0;
        presCount++;

        for (let i = 0; i < jurry; i++) {
            let grade = Number(input[index]);
            index++;
            currentGradeSum += grade;
        }
        let currentAvg = currentGradeSum / jurry;
        finalAvg += currentAvg;
        console.log(`${presentation} - ${currentAvg.toFixed(2)}.`);
        command = input[index];
        index++;
    }
    console.log(`Student's final assessment is ${(finalAvg / presCount).toFixed(2)}.`);
}
trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])
