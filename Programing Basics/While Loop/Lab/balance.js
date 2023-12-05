function balance (input) {
    let deposit = input[0];
    let total = 0;
    let index = 1;

    while (deposit !== "NoMoreMoney") {
        let ammount = Number(deposit);
        if (ammount < 0) {
            console.log("Invalid operation!");
            break;
        }
        total += ammount;
        console.log(`Increase: ${ammount.toFixed(2)}`);
        deposit = input[index];
        index++;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
balance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
