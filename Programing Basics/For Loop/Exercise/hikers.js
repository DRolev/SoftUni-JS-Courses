function hikers (input) {
    let index = 0;
    let totalGroups = Number(input[index]);
    index++;

    let musala = 0;
    let monblan = 0;
    let kilimandzharo = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeople = 0;

    for (let i = 0; i <= totalGroups; i++) {
        let participants = Number(input[index]);

        if (participants <= 5) {
            musala += participants;
            totalPeople += participants;
            index++;
        } else if (participants > 5 && participants <= 12) {
            monblan += participants;
            totalPeople += participants;
            index++;
        } else if (participants > 12 && participants <= 25) {
            kilimandzharo += participants;
            totalPeople += participants;
            index++;
        } else if (participants > 25 && participants <= 40) {
            k2 += participants;
            totalPeople += participants;
            index++;
        } else if (participants > 40) {
            everest += participants;
            totalPeople += participants;
            index++;
        }
    }
    console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimandzharo / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);
}
hikers (["5",
"25",
"41",
"31",
"250",
"6"])

