function fishTank(input) {

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let usedSurface = Number(input[3]);

    let tankVolume = lenght * width * height;
    let waterVolume = tankVolume / 1000;
    let requiredWater = waterVolume * (1 - usedSurface / 100);

    console.log(requiredWater);

}
fishTank(["85 ",
"75 ",
"47 ",
"17 "]
)