function calculator(a, operator, b) {
    let result = 0;

    // if (operator == '+') {
    //     result = a + b;
    // } else if (operator == "-") {
    //     result = a - b;
    // } else if (operator == "*") {
    //     result = a * b;
    // } else {
    //     result = a / b;
    // }
    switch (operator) {
        case "+": result = a + b;            
        break;
        case "-": result = a - b;            
        break;
        case "*": result = a * b;            
        break;
        case "/": result = a / b;            
        break;
        default:
            break;
        }
        console.log(result.toFixed(2));
}
calculator(50, '/', 10)
