/*

    You are going to have 3 numbers.
    Print them from highest to lowest.

    Example:
    24, 11, 35



*/

let num1 = 24;
let num2 = 11;
let num3 = 35;


if (num1 >= num2) {
    if (num1 >= num3) {
        if (num2 >= num3) {
            console.log(num1, num2, num3);
        } else {
            console.log(num1, num3, num2);
        }
    } else {
        console.log(num3, num1, num2);
    }

} else {
    if (num2 >= num3) {
        if (num1 >= num3) {
            console.log(num2, num1, num3);
        }
        else{
            console.log(num2, num3, num1);
        }
    }
    else{
        console.log(num3, num2, num1)
    }

}



