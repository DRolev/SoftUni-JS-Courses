function cinema(input) {
    let priceType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;

    if (priceType == 'Premiere') {
        income = (rows * columns) * 12.00;
    }else if (priceType == 'Normal') {
        income = (rows * columns) * 7.50;
    }else if (priceType == 'Discount') {
        income = (rows * columns) * 5.00;
    }
    
    console.log(`${income.toFixed(2)} leva`);

}
cinema(["Discount",
"12",
"30"])

