function spiceMustFlow(yield) {
    let spiceExtracted = 0;
    let days = 0;

    while (yield >= 100) {
        spiceExtracted += yield;
        if (spiceExtracted >= 26) {
            spiceExtracted -= 26;
        }
        yield -= 10;
        days++;
    }
    if (spiceExtracted >= 26) {
        spiceExtracted -= 26;
    }

    console.log(days);
    console.log(spiceExtracted);
}
spiceMustFlow(111);
//spiceMustFlow(450);