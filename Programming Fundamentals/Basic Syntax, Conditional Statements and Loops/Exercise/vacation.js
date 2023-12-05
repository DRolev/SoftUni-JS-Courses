function vacation(people, type, day) {
    let price = 0;

    switch (day) {
        case "Friday":
            if (type == "Students") {
                price = 8.45;
            } else if (type == "Business") {
                price = 10.90;
            } else {
                price = 15;
            }
            break;
        case "Saturday":
            if (type == "Students") {
                price = 9.80;
            } else if (type == "Business") {
                price = 15.60;
            } else {
                price = 20;
            }
            break;
        case "Sunday":
            if (type == "Students") {
                price = 10.46;
            } else if (type == "Business") {
                price = 16;
            } else {
                price = 22.50;
            }
            break;
        default:
            break;
    }
    let totalCost = people * price;
    if (type == "Students" && people >= 30) {
        totalCost *= 0.85;
    } else if (type == "Business" && people >= 100) {
        let discount = (people - 10) * price;
        totalCost = discount;
    } else if (type == "Regular" && (people >= 10 && people <= 20)) {
        totalCost *= 0.95;
    }
    console.log(`Total price: ${totalCost.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday"
)