function repainting(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);
   
    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint * 1.1) * 14.5;
    let thinnerPrice = thinner * 5;
    let bag = 0.40;

    let materials = nylonPrice + paintPrice + thinnerPrice + bag;
    let workers = (materials * 30 / 100) * hours;
    let total = materials + workers;

    console.log(total);

}
repainting(["5 ",
"10 ",
"10 ",
"1 "]
)