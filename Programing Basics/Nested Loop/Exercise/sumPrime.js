function sumPrime(input) {
    let index = 0;
    let command = input[index];
    index++;

    let sumOfPrime = 0;
    let sumOfNonPrime = 0;

    while (command !== "stop") {
        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log('Number is negative.');
            command = input[index];
            index++;
            continue;
        }
        if (currentNum === 1) {
            sumOfPrime += num;
            command = input[input];
            index++;
            continue;
        }
        let isPrime = true;
        for (let i = 2; i < currentNum; i++) {
            if (currentNum % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            sumOfPrime += currentNum;
        } else {
            sumOfNonPrime += currentNum;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumOfPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNonPrime}`);
}
sumPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])



