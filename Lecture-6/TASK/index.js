const fs = require("fs");

fs.readFile("../demo.txt", 'utf8', (err, data1) => {
    if (err) return console.error('Error reading demo.txt:', err);

    // read second file
    fs.readFile("../demo2.txt", 'utf8', (err, data2) => {
        if (err) return console.error('Error reading demo2.txt:', err);

        console.log(data1); // demo.txt file data
        console.log(data2); // demo2.txt file data
    });
});