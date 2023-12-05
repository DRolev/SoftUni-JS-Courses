function shoping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let cpus = Number(input[2]);
    let rams = Number(input[3]);

    let videoCardsPrice = videoCards * 250;
    let cpuPrice = videoCardsPrice * 0.35;
    let cpuTotal = cpus * cpuPrice;

    let ramPrice = videoCardsPrice * 0.10;
    let ramTotal = rams * ramPrice;

    let totalCost = videoCardsPrice + cpuTotal + ramTotal;

    if (videoCards > cpus) {
        totalCost = totalCost * 0.85;
    }

    let moneyLeft = Math.abs(budget - totalCost);
    
    if (budget >= totalCost) {
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    }
    if (budget < totalCost) {
        console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva more!`);
    }

}
shoping(["920.45", "3", "1", "1"])
