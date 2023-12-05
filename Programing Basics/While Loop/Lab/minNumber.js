function min (input) {
    let index = 0;
    let num = Number(input[index]);
    index++;

    while (input[index] !== "Stop") {
        let newNum = Number(input[index]);
        if (newNum < num) {
            num = newNum;
        }
        index++;
    }
    console.log(`${num}`);
}
min(["100",
"99",
"80",
"70",
"Stop"])
