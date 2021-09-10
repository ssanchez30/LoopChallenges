function addTwoNums(num1, num2) {
    let result = num1 + num2;

    return result;

}

let n1 = 20;
let n2 = 30;

let result1 = addTwoNums(n1, n2);
console.log("Result1: ", result1);

let result2 = addTwoNums(40, 60);
console.log("Result2: ", result2);

let finalResult = addTwoNums(result1, result2);
console.log("Final Result: ", finalResult);



for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else {
        if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            if (i % 5 == 0) {
                console.log("Fizz");
            } else {
                console.log(i);
            }
        }
    }
}


function FizzBuzz(limit){

    for (let i = 1; i <= limit; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else {
            if (i % 3 == 0) {
                console.log("Fizz");
            } else {
                if (i % 5 == 0) {
                    console.log("Fizz");
                } else {
                    console.log(i);
                }
            }
        }
    }

}

FizzBuzz(20);
