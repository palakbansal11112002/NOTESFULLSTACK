const fs_mod= require("fs");
// fs_mod.writeFileSync("seca.txt","Hello Sec-A");
// fs_mod.writeFile("seca.txt","FS Module",()=>{
//     console.log("Handlling CallBack");
// });
// fs_mod.appendFileSync("seca.txt","Going to learn various functions in FS Module");
// console.log( (fs_mod.readFileSync("seca.txt")).toString());
// console.log(fs_mod.readFile("seca.txt","utf-8",(err,data)=>{
//     console.log(data);
// }));
console.log(fs_mod.unlinkSync("seca.txt"));