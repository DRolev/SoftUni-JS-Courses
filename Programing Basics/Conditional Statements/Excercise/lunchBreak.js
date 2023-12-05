function lunchBreak(input) {
    let series = input[0];
    let episodeLength = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunch = breakDuration * 1/8;
    let rest = breakDuration * 1/4;
    let timeToWatch = breakDuration - lunch - rest;
    let timeLeft = Math.abs(timeToWatch - episodeLength);

    if (timeToWatch >= episodeLength) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    }
    if (timeToWatch < episodeLength) {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(timeLeft)} more minutes.`);
    }
    
}
lunchBreak(["Teen Wolf",
"48",
"60"])

