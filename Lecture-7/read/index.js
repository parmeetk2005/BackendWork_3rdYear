const fs = require("fs");
const {read} = require("../IOoperations/util.js");
// fs.readFile("../users.txt", "utf-8", function(err, data){   
//     if(err) return console.log(err);  
//     console.log(data);
// })

// access value at 0 index
// fs.readFile("../users.txt", "utf-8", function(err, data){
//     if(err) return console.log(err);  
//     let users = JSON.parse(data); 
//     console.log(users[0]); 
//     console.log(users[0].name); 
// })


async function readFile(filepath) {
    let data = await read(filepath);
    console.log(data);
}
readFile("../users.txt");

