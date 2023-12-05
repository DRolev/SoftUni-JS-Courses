function specialNumber(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;

        // Calculate the sum of digits of the number
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        // Check if the sum is 5, 7, or 11
        let special = sum === 5 || sum === 7 || sum === 11;

        // Capitalize the first letter of the boolean value
        let result = special ? "True" : "False";

        console.log(`${i} -> ${result}`);
    }
}

specialNumber(20);
