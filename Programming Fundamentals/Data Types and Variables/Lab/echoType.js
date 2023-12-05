function solve(echo) {
    let type = typeof (echo);

    if (type == "object") {
        console.log(type);
        console.log("Parameter is not suitable for printing");
    } else {
        console.log(type);
        console.log(echo);
    }
}
solve('Hello, JavaScript!');
// solve(18);
// solve(null)