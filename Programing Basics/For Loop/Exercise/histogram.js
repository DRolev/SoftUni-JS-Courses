function histogram(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;

    for(i = 0; i < n; i++) {
        let currentNum = Number(input[index]);
        index++;

        if (currentNum < 200 ) {
            p1Count += 1;
        }else if (currentNum >= 200 && currentNum <= 399) {
            p2Count += 1;
        }else if (currentNum >= 400 && currentNum <= 599) {
            p3Count += 1;
        }else if (currentNum >= 600 && currentNum <= 799) {
            p4Count += 1;
        }else if (currentNum >= 800 && currentNum <= 1000) {
            p5Count += 1;
        }
    }
    let p1 = p1Count / n * 100;
    console.log(`${p1.toFixed(2)}%`);
    let p2 = p2Count / n * 100;
    console.log(`${p2.toFixed(2)}%`);
    let p3 = p3Count / n * 100;
    console.log(`${p3.toFixed(2)}%`);
    let p4 = p4Count / n * 100;
    console.log(`${p4.toFixed(2)}%`);
    let p5 = p5Count / n * 100;
    console.log(`${p5.toFixed(2)}%`);
}
histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])

