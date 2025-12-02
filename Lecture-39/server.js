const express = require('express');
const app = express();
const user = require('./model/user.model');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/api/users/register",async (req, res)=>{
    let {name, email, password} = req.body;
    let userExits = await user.findOne({email}); // mock
    if(userExits){
        return res.json({
            success: false,
            message: "User already exists"
        })
    }
    let newUser = await user.create({ // mock
        name,
        email,
        password
    });
    return res.json({
        success: true,
        message: "User registered successfully",
        data: newUser
    })
})
module.exports = app;
// app.listen(5050, () => {
//     console.log("Server is running");
// });