function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let aptPrice = 0;
    let studioPrice = 0;

    if (month == "May" || month == "October") {
        aptPrice = nights * 65.00;
        studioPrice = nights * 50.00;
        if (nights > 7 && nights < 14) {
            studioPrice = studioPrice * 0.95;
        }else if (nights > 14) {
            aptPrice = aptPrice * 0.90;
            studioPrice = studioPrice * 0.70;
        }
    }else if (month == "June" || month == "September") {
        aptPrice = nights * 68.70;
        studioPrice = nights * 75.20;
        if (nights > 14) {
            aptPrice = aptPrice * 0.90;
            studioPrice = studioPrice * 0.80;
        }
    }else if (month == "July" || month == "August") {
        aptPrice = nights * 77.00;
        studioPrice = nights * 76.00;
        if (nights > 14) {
            aptPrice = aptPrice * 0.90;
        }
    }    
    console.log(`Apartment: ${aptPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}  
hotelRoom(["August",
"20"])


