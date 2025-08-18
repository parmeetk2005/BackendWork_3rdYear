const express = require("express");
const router = express.Router(); // small application
const User = require("../model/user");
const { postcreateUser, getAllUsers, getUserById } = require("../controller/usersController");


router.post("/", postcreateUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);

//user vla routes started
// router.post("/",async(req,res)=>{
//     let {email, username, password} = req.body;
//     let newUser= new User({
//         email:email,
//         username:username,
//         password:password
//     })
//     await newUser.save();
//     res.json({
//         success:true,
//         body: newUser,
//         message:"new user added successfully"
//     })
// })


// // Get all users
// router.get("/", async (req, res) => {
//         let allUsers = await User.find();
//         res.json({
//             success: true,
//             data: allUsers,
//         });
// });

// // Get a user by ID
// router.get("/:id",async(req,res)=>{
//     let {id}=req.params
//     let userExist = await User.findOne({_id:id}).populate("blogs");    // populate function retrieves the full blog documents
//     if(userExist){ 
//         res.json({
//             success: true,
//             data: userExist,
//         });
//     } 
// })

module.exports = router; // export the router to use in the main app file