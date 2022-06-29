
import { verify } from "crypto";
import fs from "fs";
import { start } from "repl";
const text = fs.readFileSync( 'Arts_Integration_in_Elementary_Curriculum__2nd_Edition.txt', 'utf8').toLowerCase();
let i=0;
type result = {
    timesfound:number;
    timeinmiliseconds:number;
}
const amountthe=(text:string):result=>{
const textlength=text.length;
let manythe=0;
const start = new Date().getMilliseconds();
while(i<textlength){
    if(text[i] =='t'){
        if (text[i+1] =='h'){
            if (text[i+2] =='e'){ 
                manythe+=1;  
    }}}
    i++
}; return {
    timesfound: manythe,
    timeinmiliseconds:new Date().getMilliseconds()-start

}}
//console.log(secuencesofletterfound(text[i])+"cantida de the"+plusone+"posicion"+i)
console.log(amountthe(text));

//using library indexof
const usingindexof=(text:string):result=>{
    let i=0;
    const textlength=text.length;
    const start = new Date().getMilliseconds();
    let manythe = 0;
    while(i<textlength){
        let isthe = text[i]+text[i+1]+text[i+2];
        const verifythe= isthe.indexOf("the");
        if(verifythe==0 ){
            manythe+=1;
        };
        i++;
    };
    return {
        timesfound: manythe,
        timeinmiliseconds: new Date().getMilliseconds()-start

    }
    
};
console.log(usingindexof(text));
//using regex
const usingregex =():result=>{
    const start = new Date().getMilliseconds();
    return{
        timesfound: (text.match(/the/gm)|| []).length,
        timeinmiliseconds:new Date().getMilliseconds()-start
    }
}
console.log(usingregex());