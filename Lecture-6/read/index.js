const fs = require("fs");

fs.readFile("../demo.txt", "utf-8", function(err, data){    // if we want the data in human read form then we pass second parameter as "utf-8"
    if(err) return console.log(err);  // if we dont write "utf-8" then it will return buffer data
    console.log(data);
})

fs.readFile("../demo2.txt", "utf-8", function(err, data){    
    if(err) return console.log(err);
    console.log(data);
})