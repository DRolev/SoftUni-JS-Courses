function multiTable(input) {
    let n = Number(input[0]);
    let result = 0;

    for(i = 1; i <= 10; i++) {
        result = i * n;
        console.log(`${i} * ${n} = ${result}`);
    }
}
multiTable(["10"])