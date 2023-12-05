function skiTrip(input) {
    let days = Number(input[0]);
    let room = input[1];
    let feedback = input[2];
    let price = 0;

    switch (room) {
        case "room for one person":
            price = (days - 1) * 18.00;
            break;
        case "apartment":
            price = (days - 1) * 25.00;
            if (days < 10) {
                price = price * 0.70;
            }else if (days >= 10 && days <= 15) {
                price = price * 0.65;
            }else if (days > 15) {
                price = price * 0.50;
            }
            break;
        case "president apartment":
            price = (days - 1) * 35.00;
            if (days < 10) {
                price = price * 0.90;
            }else if (days >= 10 && days <= 15) {
                price = price * 0.85;
            }else if (days > 15) {
                price = price * 0.80;
            }
            break;
    }

    if (feedback === "positive") {
        price = price * 1.25;
    }else if ( feedback === "negative") {
        price = price * 0.90;
    }

    console.log(price.toFixed(2));
}
skiTrip(["2",
"apartment",
"positive"])



