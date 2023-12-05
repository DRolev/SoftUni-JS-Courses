function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let singleClothesPrice = Number(input[2]);

    let decor = budget * 0.10;
    let totalClothesPrice = singleClothesPrice * extras;
    
    if (extras > 150) {
        totalClothesPrice = totalClothesPrice * 0.90;
    }

    let moviePrice = decor + totalClothesPrice;
    let moneyLeft = Math.abs(budget - moviePrice);

    if (moviePrice > budget) {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${moneyLeft.toFixed(2)} leva more.`);
    } 
    if (moviePrice <= budget) {
       console.log(`Action!`)
       console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
  
}
godzillaVsKong(["9587.88", "222", "55.68"])


