function solve(a, b, c) {
    let sum = a + b + c;
    let sumAsString = String(sum);

    isFloat = false;

    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '.') {
            isFloat = true;
            break;
        }
    }
    console.log(`${sum} - ${isFloat? "Float": "Integer"}`);
}
solve(9, 100, 1); 