import { count } from "console";

const fs = require('fs');

fs.readFile('text.txt', 'utf8', (err:any, data:any)=>{
    if(err){
        console.error(err);
        return;
    }
    let tocount = 0;
let i=0;
while(i<data.length){
const letterfound =validatethe(data[i], i);
console.log(letterfound);
console.log([...data]);
console.log(tocount);
i++;
}})



function validatethe(dataitem:string, i:number):number {
    let numberofletter=0;
if(dataitem =='t'){
numberofletter=0;
i=i+1
if(dataitem[i] =='h'){
    numberofletter=numberofletter+1;
    i=i+1
    if(dataitem[i] =='e'){
        numberofletter=numberofletter+1;
        console.log(numberofletter)
    };
};
}; 
return numberofletter;
}