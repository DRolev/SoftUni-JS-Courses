function reader (input) {
    let index = 0;    
    while (true) {
        let words = input[index];
        index++;
        if (words === "Stop") {
            break;
        }
        console.log(words)
    }

}
reader(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])

