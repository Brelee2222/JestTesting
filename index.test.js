const sum = require("./index");

let a = 5;
let b = 4;

const numbers = [
    9,
    13,
    22,
    35,
    57
];

test("fibonacci sequence : ", () => {
    for(const expectedNumber of numbers) {
        const c = b;
        b = sum(a, b);
        a = c;

        expect(b).toBe(expectedNumber);
    }
});