function vegetableMarket(input) {
  let vegPrice = Number(input[0]);
  let fruitPrice = Number(input[1]);
  let vegKilos = Number(input[2]);
  let fruitKilos = Number(input[3]);

  let vegTotal = vegPrice * vegKilos;
  let fruitTotal = fruitPrice * fruitKilos;
  let totalEuro = (vegTotal + fruitTotal) / 1.94;

  console.log(totalEuro.toFixed(2));
}
vegetableMarket([1.5,
    2.5,
    10,
    10
    ]);
