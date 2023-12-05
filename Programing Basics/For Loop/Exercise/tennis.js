function tennis (input) {
    let index = 0;
    let tournaments = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;
    let currentPoints = 0;
    let finalPoints = 0;
    let totalGames = 0;
    let wins = 0;

    for (i = 0; i <= tournaments; i++) {
        let stage = input[index];
        if (stage == "W") {
            currentPoints += 2000;
            wins ++;
            totalGames ++;
            index++;
        }
        if (stage == "F") {
            currentPoints += 1200;
            totalGames ++;
            index++;
        } 
        if (stage == "SF") {
            currentPoints += 720;
            totalGames ++;
            index++;
        }
    }
    finalPoints = startingPoints + currentPoints;
    let averagePoints = currentPoints / totalGames;
    let winsPercent = (wins / totalGames) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winsPercent.toFixed(2)}%`);
}
tennis (["4",
"750",
"SF",
"W",
"SF",
"W"])



