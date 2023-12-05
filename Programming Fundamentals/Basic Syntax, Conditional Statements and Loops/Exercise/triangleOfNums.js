function triangle(num) {
    let print = '';

    for (i = 1; i <= num; i++) {
        print = `${i} `;
        console.log(`${print}`.repeat(i));
    }
}
triangle(6)