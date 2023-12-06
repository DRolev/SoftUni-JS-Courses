function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalPrice = 0;
    let lossCounter = 0;
    let brokenHelm = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmor = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            brokenShield++;
            if (brokenShield > 0 && brokenShield % 2 == 0) {
                brokenArmor++;
            }
            brokenHelm++;
            brokenSword++;
        } else if (i % 2 == 0) {
            brokenHelm++;
        } else if (i % 3 == 0) {
            brokenSword++;
        } 
    }
    let helmCost = brokenHelm * helmetPrice;
    let swordCost = brokenSword * swordPrice;
    let shieldCost = brokenShield * shieldPrice;
    let armorCost = brokenArmor * armorPrice;

    totalPrice = helmCost + swordCost + shieldCost + armorCost;

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
//gladiator(23, 12.50, 21.50, 40, 200);
gladiator(7, 2, 3, 4, 5);

// helm    sword
// 2 - 1
//         3 - 1
// 4 - 2

// 6 - 3    6 - 2

// 8 - 4
//         9 - 3
// 10 - 5

// 12 - 6    12 - 4




