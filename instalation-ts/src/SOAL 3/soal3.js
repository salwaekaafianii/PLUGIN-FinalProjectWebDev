"use strict";
function printTriangle(height) {
    for (let i = 1; i < height; i++) {
        let row = ' '.repeat(height - i) + '*'.repeat(i);
        console.log(row);
    }
}
printTriangle(7);
