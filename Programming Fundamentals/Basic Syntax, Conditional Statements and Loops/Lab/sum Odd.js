function solve(nums) {
    
    let lines = Number(nums);
    let sumOfNums = 0;
  
    for (let i = 1; i <= lines; i++) {
      let numberToPrint = i * 2 - 1;
      sumOfNums += numberToPrint;
      console.log(numberToPrint);
    }
    console.log(`Sum: ${sumOfNums}`);
}
solve(5);
