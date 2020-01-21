// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     //let num = 10;
//     console.log(num);
// }

// showFirstMessage("Привет, мир");
// console.log(num);



// let calc = function (a, b) {
//     return (a + b);
// }

let calc = (a, b) => a + b;

console.log(calc(1,2));

console.log(calc(2,3));

function returnVar() {
    let num = 50;
    return num;
}

let anotherNum = returnVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.1px";

// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));
