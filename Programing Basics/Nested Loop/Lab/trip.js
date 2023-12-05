function trip (input) {
    let index = 0;
    let command = input[index];
    index++;
    let savedMoney = 0;

    while (command !== "End") {
        let destination = command;
        command = input[index];
        index++;
        let cost = Number(command);
        command = input[index];
        index++;

        for (i = 0; savedMoney <= cost; i++) {
        let money = Number(command);
        savedMoney += money;
        command = input[index];
        index++;
            if (savedMoney >= cost) {
                console.log(`Going to ${destination}!`);
                savedMoney = 0;
                break;
            }
        }
    }
}
trip (["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

