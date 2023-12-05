function building (input) {
    let y = Number(input[0]);
    let x = Number(input[1]);

    for (let floor = y; floor > 0; floor--) {
        let buff = "";
        for (let room = 0; room < x; room++) {
            if (y === floor) {
            buff += `L${floor}${room} `;
            } else if (floor % 2 === 0) {
                buff += `O${floor}${room} `;
            } else {
                    buff += `A${floor}${room} `;
            }
        }
        console.log(buff);
    }
}
building (["9", "5"])