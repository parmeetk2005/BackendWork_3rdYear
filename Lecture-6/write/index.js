const fs = require("fs");
fs.writeFile("../demo.txt", "g26 hello", function(err){
    if(err) return console.log(err);
    console.log("sucess1")
})

fs.writeFile("../demo2.txt", "We are COMPUTER SCIENCE STUDENT", function(err){
    if(err) return console.log(err);
    console.log("sucess2")
})