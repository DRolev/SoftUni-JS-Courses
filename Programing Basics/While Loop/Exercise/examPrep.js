function exam (input) {
    let index = 0;
    let failsAllowed = Number(input[0]);
    index++;
    let badGrades = 0;
    let goodGrades = 0;
    let totalGrades = 0;
    let lastProblem = 0;
    let condition = false;

    while (badGrades < failsAllowed) {
        let currentProblem = input[index];
        index++;
        let currentGrade = Number(input[index]);
        index++;

        if (currentGrade >= 4) {
            goodGrades += currentGrade;
            totalGrades ++;
            lastProblem = currentProblem;
        } else {
            badGrades ++;
        }
        if (input[index] === "Enough") {
            console.log(`Average score: ${(goodGrades / totalGrades).toFixed(2)}`);
            console.log(`Number of problems: ${totalGrades}`);
            console.log(`Last problem: ${lastProblem}`);
            condition = true;
            break;
        }
    }
    if (!condition) {
    console.log(`You need a break, ${badGrades} poor grades.`);
    }
}
exam (["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
