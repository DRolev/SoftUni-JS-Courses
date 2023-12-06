function solve(n) {
    let numAsString = String(n);
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    console.log(sum);
}
solve(245678);