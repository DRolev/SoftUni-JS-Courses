function suppliesForSchool(input) {

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3]);

    let penPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let detergentPrice = detergent * 1.20;

    let bill = penPrice + markersPrice + detergentPrice;
    let total = bill - (bill * discount / 100);

    console.log(total);
}
suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]
)