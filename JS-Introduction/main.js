
/* Primitive data types: 
number, 
string, "" '' ``
boolean, true/false
null, 
undefined, no initial value ex. let name or var age
 */

let fullName = "Sergio Sanchez";  // in the block code
var age = 20;                 // more global in the whole program
let amIAStudent = true;
let hobby = null;
let country = undefined;
let state

console.log("Name: "+fullName);

console.log("Name: ", fullName);
console.log("Age", age);
console.log("Student", amIAStudent);
console.log("Hobby", hobby);
console.log("Country", country);
console.log("State: ",  state);

fullName = "Sergio Sanchez Trejos";
console.log("Updated name: ", fullName);

const PI = 3.1416;  // constantes
console.log("PI value: ", PI);
// PI = 123;  NO ES POSIBLE
console.log("PI value updated: ", PI);

/* 
Operators
    Arithmethic: + - / * % ()
    Relational: == === != !== > < >= <= || && !
*/

/*

Order of operators
1. ()
2. !
3. * / %
4. + - 
5. > < >= <= == === != !==
6. || &&
7. ++ -- += -= *= /= %=
8. =

*/

/*
++ adds 1 unit to the variable
-- subs 1 unit to the variable
+= adds that many to a variable Ex. num=10; num+=5; Value 15   num = num+5
-= subs that many to a variable Ex. num=10; num-=5; Value 5   num = num-5
*= multiplies that many to a variable Ex. num=10; num*=3; Value 30   num = num*3
/+ divides that many to a variable Ex. num=100; num/=10; Value 10   num = num/10
%=

*/


let result = 10 + 5 * 2 / 3;
console.log("Result: ", result)

result = (10+5)* 2/3;
console.log("Result updated: ", result);


let result2 = 10 % 3;
console.log("Modulus operator: ", result2);

let compare = 40 > 20;
console.log("Compare: ", compare)

let num1 = 40;
let num2 = '40';
let num3 = 50;
let num4 = 100;

compare = num1 == num2;

let compare2 = num1 === num2  // compara el numero y el tipo que es

console.log("Compare: ", compare);
console.log("Compare2: ", compare2);

/*

For the && operator
true + true = true
true + false = false
false + true = false
false + false = false


for the || operator
true + true = true
true + false = true
false + true = true
false + false = false


*/


compare = num1 < num2 && num3 > num4;
        // true      &&       true

compare = !(num1 > num2);
            // ! true
            // false

