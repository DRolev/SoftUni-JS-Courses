function moving (input) {
    let index = 0;
    let width = Number(input[0]);
    index++;
    let length = Number(input[1]);
    index++;
    let height = Number(input[2]);
    index++;
    let command = input[index];
    index++;
    let space = width * length * height;
    let totalBoxes = 0;
    let condition = false;

    while (command !== "Done") {
        let currentBoxes = Number(command);
        totalBoxes += currentBoxes;

        if ((space - totalBoxes) < 0) {
            let diff = (space - totalBoxes);
            console.log(`No more free space! You need ${Math.abs(diff)} Cubic meters more.`);
            condition = true;
            break;
        }

        command = input[index];
        index++;
    }
    if (!condition) {
    let spaceLeft = space - totalBoxes;
    console.log(`${spaceLeft} Cubic meters left.`)
    }
}
moving (["10", 
"1",
"2",
"4", 
"6",
"Done"])


