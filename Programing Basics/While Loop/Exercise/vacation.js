function vacation (input) {
    index = 0;
    let goal = Number(input[0]);
    index++;
    let money = Number(input[1]);
    index++;

    let days = 0;
    let streak = 0;
    let condition = false;

    while (money < goal) {
        let action = input[index];
        index++;
        let sum = Number(input[index]);
        index++;

        if (action === "spend") {
            money -= sum;
            if (money < 0) {
                money = 0;
            }
            streak ++;
            days ++;
        } else if (action === "save") {
            money += sum;
            streak = 0;
            days ++;
        }
        if (streak >= 5) {
            console.log("You can't save the money.");
            console.log(`${days}`);
            condition = true;
            break;
        }
    }
    if (!condition) {
    console.log(`You saved the money for ${days} days.`);
    }
}
vacation (["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])

