function replace(str, char, result) {
    let res = str.replace('_', char);
    let output = res === result? "Matched": "Not Matched";
    console.log(output);

    // if (output == result) {
    //     console.log("Matched");
    // } else {
    //     console.log("Not Matched");
    // }
}
replace('Str_ng', 'i', 'String')