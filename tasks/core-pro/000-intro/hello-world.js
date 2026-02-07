"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = helloWorld;
exports.getOddNumbersUpTo = getOddNumbersUpTo;
exports.sumArray = sumArray;
function helloWorld() {
    return 'Hello, World!';
}
function getOddNumbersUpTo(n) {
    const oddNumbers = [];
    for (let i = 1; i <= n; i += 1) {
        if (i % 2 !== 0) {
            oddNumbers.push(i);
        }
    }
    return oddNumbers;
}
function sumArray(arr) {
    return arr.reduce((red, curr) => red + curr);
}
const n = 5;
let oddNumbers = getOddNumbersUpTo(n);
console.log(oddNumbers);
const sumOddNumbers = sumArray(oddNumbers);
console.log(sumOddNumbers);
