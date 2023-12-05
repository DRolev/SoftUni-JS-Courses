function amazing(num) {
    let numAsString = String(num);
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }

    let sumAsString = String(sum);
    let isAmazing = false;

    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '9') {
            isAmazing = true;
            break;
        }
    }
    if (isAmazing) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}
amazing(999)