function basketballEquipment(input) {

    annualMembership = Number(input[0]);

    let jordans = annualMembership - (annualMembership * 40 / 100);
    let shorts = jordans - (jordans * 20 / 100);
    let ball = shorts * 0.25;
    let accesories = ball * 0.20;

    let total = annualMembership + jordans + shorts + ball + accesories;

    console.log(total);

}
basketballEquipment(['550'])