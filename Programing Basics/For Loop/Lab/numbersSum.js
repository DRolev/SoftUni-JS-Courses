function numbersSum(input) {
    let number = input[0];
    let sum = 0;

    for (i = 0; i < number.length; i++) {
        let current = Number(number[i]);
        sum += current;
    }
    console.log(`The sum of the digits is:${sum}`);
}
numbersSum(["12345"])