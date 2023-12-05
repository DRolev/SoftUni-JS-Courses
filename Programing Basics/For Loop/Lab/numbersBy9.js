function numbersBy9(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = 0;
    let allNumbers = "";

    for (i = n; i <= m; i++) {
        if (i % 9 === 0) {
            sum += i;
            allNumbers += `${i} \n`;
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(allNumbers);
}
numbersBy9(["100", "200"])