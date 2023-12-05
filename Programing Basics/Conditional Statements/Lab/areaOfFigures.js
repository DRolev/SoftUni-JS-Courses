function areaOfFigures(input) {
    let figure = input[0];
    let side1 = Number(input[1]);
    let side2 = Number(input[2]);
   
    if (figure == "square") {
        let area = side1 * side1;
        console.log(area.toFixed(3));
    }
    if (figure == "rectangle") {
        let area = side1 * side2;
        console.log(area.toFixed(3));    
    }
    if (figure == "circle") {
        let area = Math.PI * Math.pow(side1, 2);
        console.log(area.toFixed(3));    
    }
    if (figure == "triangle") {
        let area = (side1 / 2) * side2;
        console.log(area.toFixed(3));    
    }
}
areaOfFigures(["triangle","4.5","20"])

