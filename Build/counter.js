"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const text = fs_1.default.readFileSync('Arts_Integration_in_Elementary_Curriculum__2nd_Edition.txt', 'utf8').toLowerCase();
let i = 0;
const amountthe = (text) => {
    const textlength = text.length;
    let manythe = 0;
    const start = new Date().getMilliseconds();
    while (i < textlength) {
        if (text[i] == 't') {
            if (text[i + 1] == 'h') {
                if (text[i + 2] == 'e') {
                    manythe += 1;
                }
            }
        }
        i++;
    }
    ;
    return {
        timesfound: manythe,
        timeinmiliseconds: new Date().getMilliseconds() - start
    };
};
//console.log(secuencesofletterfound(text[i])+"cantida de the"+plusone+"posicion"+i)
console.log(amountthe(text));
//using library indexof
const usingindexof = (text) => {
    let i = 0;
    const textlength = text.length;
    const start = new Date().getMilliseconds();
    let manythe = 0;
    while (i < textlength) {
        let isthe = text[i] + text[i + 1] + text[i + 2];
        const verifythe = isthe.indexOf("the");
        if (verifythe == 0) {
            manythe += 1;
        }
        ;
        i++;
    }
    ;
    return {
        timesfound: manythe,
        timeinmiliseconds: new Date().getMilliseconds() - start
    };
};
console.log(usingindexof(text));
//using regex
const usingregex = () => {
    const start = new Date().getMilliseconds();
    return {
        timesfound: (text.match(/the/gm) || []).length,
        timeinmiliseconds: new Date().getMilliseconds() - start
    };
};
console.log(usingregex());
