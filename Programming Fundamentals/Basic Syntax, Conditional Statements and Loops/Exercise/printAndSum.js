function printAndSum(start, end) {
    let row = '';
    let sum = 0;

    for (i = start; i <= end; i++) {
        row += `${i} `;
        sum += i;
    }
    console.log(`${row}`);
    console.log(`Sum: ${sum}`);
}
printAndSum(50, 60)