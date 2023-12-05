function trainingLab(input){
    let length = Number(input[0]);
    let width = Number(input[1]);

    let desksInRow = Math.trunc((width * 100 - 100) / 70);
    let rows = Math.trunc(length * 100 / 120);
    let workPlaces = rows * desksInRow - 3;

    console.log(workPlaces.toFixed(0));
}
trainingLab([15, 8.9])