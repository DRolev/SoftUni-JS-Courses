function swimmingWorldRecord(input) {
    let currentRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneM = Number(input[2]);

    let distanceTime = distance * timeForOneM;
    let fatigue = Math.floor(distance / 15) * 12.5;
    let totalTime = distanceTime + fatigue;

    if (totalTime < currentRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
    if (totalTime >= currentRecord) {
        let diff = totalTime - currentRecord;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }

}
swimmingWorldRecord(["55555.67", "3017", "5.03"])

