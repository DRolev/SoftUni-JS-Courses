function yardGreening(input) {

    let yardPrice = input[0] * 7.61
    let discount = 0.18 * yardPrice;
    let finalPrice = yardPrice - discount; 
    
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
    }
    yardGreening([100])