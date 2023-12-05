function housePainting(input){
    let houseHeight = Number(input[0]);
    let houseLenght = Number(input[1]);
    let roofHeight = Number(input[2]);

    let sideWall = houseHeight * houseLenght;
    let window = 1.5 * 1.5;
    let sideWalls = sideWall * 2 - window * 2;
    let backWall = houseHeight * houseHeight;
    let door = 1.2 * 2;
    let frontAndBack = backWall * 2 - door;
    let wallSurface = sideWalls + frontAndBack;
    let greenPaint = wallSurface / 3.4;

    let roofSides = (houseHeight * houseLenght) *2;
    let roofFronts = (houseHeight * roofHeight / 2) * 2;
    let roofSurface = roofSides + roofFronts;
    let redPaint = roofSurface / 4.3;

    
    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2))
}
housePainting([10.25, 15.45, 8.88])