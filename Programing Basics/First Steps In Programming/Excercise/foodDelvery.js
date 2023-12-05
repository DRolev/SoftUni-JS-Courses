function foodDelivery(input) {

    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let veggiMenu = 8.15;
    let deliveryFee = 2.50;

    let chickenPrice = chickenMenu * Number(input[0]);
    let fishPrice = fishMenu * Number(input[1]);
    let veggiPrice = veggiMenu * Number(input[2]);
    
    let menuTotal = chickenPrice + fishPrice + veggiPrice;
    let dessert = menuTotal * 20 / 100;
    let bill = menuTotal + dessert + deliveryFee;

    console.log(bill)
}
foodDelivery(["80",
"7",
"2"]
)