function fishMarket(input){
    let skumriyaPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let palamud = Number(input[2]);
    let safrid = Number(input[3]);
    let midi = Number(input[4]);

    let palamudPrice = skumriyaPrice + skumriyaPrice * 0.60;
    let palamudTotal = palamud * palamudPrice;
    let safridPrice = cacaPrice + cacaPrice * 0.80;
    let safridTotal = safrid * safridPrice;
    let midiPrice = midi * 7.50;
    let total = palamudTotal + safridTotal + midiPrice

    console.log(total.toFixed(2));
}
fishMarket([5.55,
    3.57,
    4.3,
    3.6,
    7    
    ])