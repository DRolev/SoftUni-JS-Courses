function sortNums(a, b, c) {
    let numbers = [a, b, c];

    numbers.sort((a, b) => b - a);

    numbers.forEach(numbers => console.log(numbers));

}
sortNums(0, 0, 2);