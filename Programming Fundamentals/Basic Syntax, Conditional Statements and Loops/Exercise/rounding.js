function rounding(num, rounder) {
    let rounded = Number(num);
    if (rounder > 15) {
        rounder = 15;
    }
    let result = Number(num.toFixed(rounder))
    console.log(`${parseFloat(result)}`);
}
rounding(10.5,3)