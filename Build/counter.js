"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const text = fs_1.default.readFileSync('Arts_Integration_in_Elementary_Curriculum__2nd_Edition.txt', 'utf8');
let i = 0;
const amountthe = (text) => {
    const textlength = text.length;
    let manythe = 0;
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
    return manythe;
};
//console.log(secuencesofletterfound(text[i])+"cantida de the"+plusone+"posicion"+i)
console.log(amountthe(text));
