"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let tocount = 0;
    let i = 0;
    while (i < data.length) {
        const letterfound = validatethe(data[i], i);
        console.log(letterfound);
        console.log(tocount);
        i++;
    }
});
function validatethe(dataitem, i) {
    let numberofletter = 0;
    if (dataitem == 't') {
        numberofletter = 0;
        i = i + 1;
        if (dataitem[i] == 'h') {
            numberofletter = numberofletter + 1;
            i = i + 1;
            if (dataitem[i] == 'e') {
                numberofletter = numberofletter + 1;
                console.log(numberofletter);
            }
            ;
        }
        ;
    }
    ;
    return numberofletter;
}
