
import fs from "fs";
const text = fs.readFileSync( 'Arts_Integration_in_Elementary_Curriculum__2nd_Edition.txt', 'utf8');
let i=0;
const amountthe=(text:string):number=>{
const textlength=text.length;
let manythe=0;
while(i<textlength){
    if(text[i] =='t'){
        if (text[i+1] =='h'){
            if (text[i+2] =='e'){ 
                manythe+=1;  
    }}}
    i++
}; return manythe}
//console.log(secuencesofletterfound(text[i])+"cantida de the"+plusone+"posicion"+i)
console.log(amountthe(text));
