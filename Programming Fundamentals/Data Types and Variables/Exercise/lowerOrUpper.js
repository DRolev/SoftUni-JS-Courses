function lowerOrUpper(letter) {
    let value = letter.charCodeAt(0);
    if (value < 97) {
        console.log("upper-case");
    } else {
        console.log("lower-case");
    }
}
lowerOrUpper('a')