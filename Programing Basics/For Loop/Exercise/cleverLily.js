function cleverLily(input) {
    let age = Number(input[0]);
    let machinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    
    let money = 0;
    let toyCount = 0;
    let bdayMoney = 10;

    for( i = 1; i <= age; i++) {
        if (i % 2 !== 0 ) {
            toyCount ++;
        }else {
            money += bdayMoney;
            bdayMoney += 10;
            money--;
        }
    }
    money += toyCount * toyPrice;
    let diff = Math.abs(money - machinePrice)

    if (money >= machinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    }else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily(["21",
"1570.98",
"3"])

