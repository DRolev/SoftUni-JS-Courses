function graduation (input) {
    let index = 0;
    let student = input[0];
    index++;
    let clas = 1;
    let avgGrade = 0;
    let fail = 0; 
    let bool = false;

    while ([index] <= 12) {
        let currentGrade = Number(input[index]);
        if (currentGrade >= 4) {
            avgGrade += currentGrade;
            clas ++;
        } else {
            fail ++;
        }
        if (fail > 1) {
            console.log(`${student} has been excluded at ${clas} grade`);
            bool = true;
            break;
        }
        index++;
    }
    if (!bool) {
        console.log(`${student} graduated. Average grade: ${(avgGrade / 12).toFixed(2)}`);
    }
}
graduation (["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])




