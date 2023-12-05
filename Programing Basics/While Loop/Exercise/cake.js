function cake (input) {
    let index = 0;
    let length = Number(input[0]);
    index++;
    let width = Number(input[1]);
    index++;
    let command = input[index];
    index++;
    let totalPieces = length * width;
    let condition = false;

    while (command !== "STOP") {
        let piecesTaken = Number(command);
        totalPieces -= piecesTaken;

        if (totalPieces < 0) {
            let diff = Math.abs(totalPieces);
            console.log(`No more cake left! You need ${diff} pieces more.`)
            condition = true;
            break;
        }
        command = input[index];
        index++;
    }
    if (!condition) {
    console.log(`${totalPieces} pieces are left.`);
    }
}
cake (["10",
"10",
"20",
"20",
"20",
"20",
"21"])



