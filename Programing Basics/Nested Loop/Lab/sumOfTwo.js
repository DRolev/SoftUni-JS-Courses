function sumOfTwo (input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);
    let firstMatch = 0;
    let condition = false;

    outerloop: for (let i = start; i <=end; i++) {
        for (let j = start; j <= end; j++) {
            firstMatch++;
            if (i + j === magic) {
                console.log(`Combination N:${firstMatch} (${i} + ${j} = ${magic})`);
                condition = true;
                break outerloop;
            }
        }
    }
    if (!condition) {
    console.log(`${firstMatch} combinations - neither equals ${magic}`);
    }
}
sumOfTwo (["1",
"10",
"5"])






