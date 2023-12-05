function pyramid (input) {
    let n = Number(input[0]);
    let current = 1;
    let condition = false;
    let printCurrentLine = "";

    for (let rows = 1; rows <= n; rows++) {
        for (let cols =1; cols <= rows; cols++) {
            if (current > n) {
                condition = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (condition) {
            break;
        }
    }
}
pyramid(["7"])