function line (input) {
    let num = Number(input[0]); 
    let counter = 1;

    while (counter <= num) {
        console.log(counter);
        counter = 2 * counter + 1;
    }
    
}
line(["8"])