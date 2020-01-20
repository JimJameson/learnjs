
let num = 10;

// while (num < 55) {
//     console.log(num);
//     num ++;
// }

do {
    console.log(num);
    num++;
} while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}

let x = 5; 
console.log(++x);

console.log(null || undefined || 0);

let y = 1; 
let x = y = 2; 
console.log(2 && 3);

console.log(+"Infinity");

a = []; 
b = [];
console.log([ ] + false - null + true);
console.