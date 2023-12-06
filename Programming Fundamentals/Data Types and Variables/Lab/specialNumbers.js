function specialNumber(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        let special = sum === 5 || sum === 7 || sum === 11;
        
        let result = special ? "True" : "False";

        console.log(`${i} -> ${result}`);
    }
}

specialNumber(20);
