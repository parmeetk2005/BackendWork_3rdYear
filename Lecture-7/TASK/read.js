const fs = require("fs");

fs.readFile("../users.txt", "utf-8", function(err, data){   
    if(err) console.log(err);
    let users = JSON.parse(data)
    fs.readFile("../users2.txt", "utf-8", function(err, data){   
        if(err) return console.log(err);  
        let users2 = JSON.parse(data)

        let allUsers = users.concat(users2);
        fs.writeFile("./result.txt", JSON.stringify(allUsers), function(err, data){
            if(err) console.log(err);
            console.log("All users written");
        });
    });
});




