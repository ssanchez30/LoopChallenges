/*
    if (condition/expresion){
        // Do something here if it is true
    }
    else{
        // Do something if it is false, but could be optional, this means not use else
    }


*/

let weather = "rainy";

if (weather === " sunny") {
    console.log("It is a good day to go to the beach");
}

if (weather === " sunny") {
    console.log("It is a good day to go to the beach");
} else {
    console.log("It is raining, not good to go to the bech =(");
}


if (weather === " sunny") {
    console.log("It is a good day to go to the beach");
} else {
    if (weather === "rainy") {
        console.log("It is raining, not good to go to the bech =(");
    } else {
        if (weather === "cloudy") {
            console.log("Might not be a good day to go to the beach, as it may rain later")
        }
        else {
            console.log("It might be windy, maybe we could go to the beach");
        }
    }
}

let examGrade = 88;

if (examGrade >= 70) {
    console.log("Congratulations you passed!");
    if (examGrade === 100) {
        console.log("You nailed the exam!!!");
    }
}
else {
    console.log("You didnt pass today, but you may attempt it a second time!");
}

