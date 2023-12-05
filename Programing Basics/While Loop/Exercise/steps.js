function solve (input) {
    let index = 0;
    let goal = 10000;
    let steps = 0;
    let command = input[index];
    index++

    while (command !== "Going home") {
        let currentSteps = Number(command);
        steps += currentSteps;

        if (steps >= goal) {
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "Going home") {
        let currentSteps = Number(input[index]);
        index++;
        steps += currentSteps;
    }
    let diff = Math.abs(goal - steps);
    if (goal <= steps) {
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }
}
solve (["1500",
"300",
"2500",
"3000",
"Going home",
"200"])




