// create server
const express = require("express")
const app = express();
const fs = require("fs");
app.use(express.static(__dirname + "/public"));


app.get("/users", (req, res) => {
    fs.readFile("./users.json", "utf-8", function(err,data) {
        if(err) res.send(err)
        let allUsers = JSON.parse(data);
        res.json(allUsers);
    })
})

app.listen(3000,()=>{
    console.log("server started")
})