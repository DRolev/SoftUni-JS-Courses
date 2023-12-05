function englishName(num) {
    let lastDigit = Math.abs(num % 10);
    const digitNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    console.log(digitNames[lastDigit]);
}
nglishName(0);