function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination;
    let place;
    let spending = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            spending = budget * 0.30;
            place = "Camp";
        }else if (season == "winter") {
            spending = budget * 0.70;
            place = "Hotel";
        }
    }else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            spending = budget * 0.40;
            place = "Camp";
        }else if (season == "winter") {
            spending = budget * 0.80;
            place = "Hotel";
        }
    }else if (budget > 1000) {
        destination = "Europe";
        place = "Hotel";
        spending = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${spending.toFixed(2)}`);
}
journey(["1500", "summer"])