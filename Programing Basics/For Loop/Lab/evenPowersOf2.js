function evenPowersOf2(input) {
    let n = Number(input[0]);
    let num = 2;

    for (let i = 0; i <= n; i++) {
        let result = Math.pow(num, i)
        if (i % 2 === 0) {
            console.log(result);
        }
    }
}
evenPowersOf2(["7"])