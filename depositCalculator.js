function depositCalculator(input) {
  let cash = Number(input[0]);
  let depositTime = Number(input[1]);
  let interestRate = Number(input[2]);

  let anualInterest = cash * (interestRate / 100);
  let monthlyInterest = anualInterest / 12;
  let total = monthlyInterest * depositTime + cash;

  console.log(total);
}
depositCalculator(["200 ", "3 ", "5.7 "]);
