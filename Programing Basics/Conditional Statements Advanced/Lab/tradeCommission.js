function tradeCommission(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commission = 0;

    switch (city) {
        case "Sofia":
            if (sales < 0) {
                console.log("error");
            }else if (sales >= 0 && sales <= 500) {
                console.log((commission = sales * 0.05).toFixed(2));
            }else if (sales > 500 && sales <= 1000) {
                console.log((commission = sales * 0.07).toFixed(2));
            }else if (sales > 1000 && sales <= 10000) {
                console.log((commission = sales * 0.08).toFixed(2));
            }else if (sales > 10000) {
                console.log((commission = sales * 0.12).toFixed(2));
            }
            break;
        case "Varna":
            if (sales < 0) {
                console.log("error");
            }else if (sales >= 0 && sales <= 500) {
                console.log((commission = sales * 0.045).toFixed(2));
            }else if (sales > 500 && sales <= 1000) {
                console.log((commission = sales * 0.075).toFixed(2));
            }else if (sales > 1000 && sales <= 10000) {
                console.log((commission = sales * 0.10).toFixed(2));
            }else if (sales > 10000) {
                console.log((commission = sales * 0.13).toFixed(2));
            }
            break;
        case "Plovdiv":
            if (sales < 0) {
                console.log("error");
            }else if (sales >= 0 && sales <= 500) {
                console.log((commission = sales * 0.055).toFixed(2));
            }else if (sales > 500 && sales <= 1000) {
                console.log((commission = sales * 0.08).toFixed(2));
            }else if (sales > 1000 && sales <= 10000) {
                console.log((commission = sales * 0.12).toFixed(2));
            }else if (sales > 10000) {
                console.log((commission = sales * 0.145).toFixed(2));
            }
            break; 

        default:
            console.log("error");
            break;
    }
}
tradeCommission(["Varna",
"3874.50"])




