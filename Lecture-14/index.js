// create server
const express = require("express")
const app = express();
const fs = require("fs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.json()); // Middleware to parse JSON bodies
app.get("/users", (req, res) => {
    fs.readFile("./users.json", "utf-8", function(err,data) {
        if(err) res.send(err)
        let allUsers = JSON.parse(data);
        res.json(allUsers);
    })
})
app.post("/addusers", (req, res) => {
    try {
        let name = req.body.name;
        let username = req.body.username;
        let newuser = {
            id: Math.floor(Math.random()*1000000),
            name: name,
            username: username,
            role: "user"
        }
        let alluser=[];
        let data = fs.readFileSync("./users.json", "utf-8" );
        if(data){
            alluser = JSON.parse(data);
        }
        alluser.push(newuser);
        fs.writeFileSync("./users.json", JSON.stringify(alluser));
        res.json({
            message: "User added successfully",
        });
    } 
    catch (error) {
        return res.send(error);
    }
})
app.listen(3000,()=>{
    console.log("server started")
})