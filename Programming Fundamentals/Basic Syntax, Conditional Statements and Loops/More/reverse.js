function reverse(data) {
    let dataToString = String(data);
    let reversed = '';

    for (let i = dataToString.length - 1; i >= 0; i--) {
        reversed += dataToString[i];
    }
    console.log(reversed);
}
reverse("1234");