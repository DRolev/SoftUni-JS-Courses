function solve (input) {
    let index = 0;
    let tabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    let condition = false;

    for (i = 1; i <= tabs; i++) {
        let website = input[index];
        if (website == "Facebook"){
            salary -= 150;
        }
        if (website == "Instagram"){
            salary -= 100;
        }
        if (website == "Reddit"){
            salary -= 50;
        }
        index++; 

        if (salary <= 0) {
            condition = true
            console.log(`You have lost your salary.`);
            break;
        } 
    }
        if (!condition) {
            console.log(`${Math.round(salary)}`)
        }
}
solve(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])


