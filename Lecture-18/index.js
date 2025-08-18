//MONGO DB stores data in (bson) form...--binary json
//to connect our server to mongo db we need to install mongoose
//--key string
//mongoose--odm (object document mapping) library so that we can use CRUD oparations
//schema will bes stored in model folder..
// mongoose is ODM (Object Data Modeling) to connect node.js(server) to mongodb and to perform CRUD operations through node.js


// MAPPING:
/* 
    ONE TO ONE
    ONE TO MANY
    MANY TO MANY
    MANY TO ONE
*/


const express = require('express');
const mongoose = require('mongoose');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Blogs= require('./model/blog');
const User=require('./model/user');
app.post("/blogs", async(req, res) => {
    let { title, body, userId } = req.body;
    // console.log(title, body, userId);
    let userExist = await User.findById(userId);
    if(userExist){
        let newBlog = new Blogs({
        title : title,
        body : body,
        date : Date.now(),
        userId: userId
        });
        await newBlog.save() // save the blog post to the database
        userExist.blogs.push(newBlog._id); // add the blog post ID to the user's blogs array
        await userExist.save(); // save the updated user document
        res.json({
            success: true,
            data: newBlog,
            message: "Blog post created successfully", 
        })
    }
});

app.get("/blogs", async(req, res) => {
    let AllBlogs = await Blogs.find();
    res.json({
        success: true,
        data: AllBlogs,
    })
})
app.get("/blogs/:id",async(req,res)=>{
    let {id}=req.params
    let blog = await Blogs.findOne({_id:id});
    res.json({
        success: true,
        data: blog,
    })
    
})

//user vla routes started
app.post("/users",async(req,res)=>{
    let {email, username, password} = req.body;
    let newUser= new User({
        email:email,
        username:username,
        password:password
    })
    await newUser.save();
    res.json({
        success:true,
        body: newUser,
        message:"new user added successfully"
    })
})

// Get all users
app.get("/users", async (req, res) => {
        let allUsers = await User.find();
        res.json({
            success: true,
            data: allUsers,
        });
});

// Get a user by ID
app.get("/users/:id",async(req,res)=>{
    let {id}=req.params
    let userExist = await User.findOne({_id:id}).populate("blogs");    // populate function retrieves the full blog documents
    if(userExist){ 
        res.json({
            success: true,
            data: userExist,
        });
    } 
    
})

// delete blog
app.delete("/blogs/:blogId", async (req, res) => {
    let {blogId} = req.params;
    let{userId} = req.body;
    let blogExist = await Blogs.findById(blogId);
    if(!blogExist) return res.json({
        success: false,
        message: "Blog does not exist"
    })
    if(blogExist.userId != userId) return res.json({
        success: false,
        message: "You are not allowed to delete this blog"
    })
    await Blogs.findByIdAndDelete(blogId);
    let userExist = await User.findById(userId);
    let blog = userExist.blogs.filter((id) => id != blogId);
    userExist.blogs = blog;
    await userExist.save();
    res.json({
        success: true,
        message: "Blog deleted successfully",
        data: userExist
    })
})


//update
app.put("/blogs/:blogId/:userId", async (req, res)=>{
    let{blogId, userId}=req.params;
    let{title, body}=req.body;

    let blogExist=await Blogs.findById(blogId);
    if(!blogExist){
       return res.json({
            success:false,
            message:"Blog does not exist"
        })
    }
      if(blogExist.userId!=userId){
        return res.json({
            success:false,
            message:"You are not allowed to edit this blog"
        })
    }
  let updatedBlog=  await Blogs.findByIdAndUpdate(blogId, { title, body}, {new:true});
    res.json({
        success:true,
        message:"Blog edited successfully",
        data:updatedBlog
    })

})



app.listen(4445, () => {
  console.log("Server is running on port 4445");
});

mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  .then(() => console.log('Connected to MongoDB!'))


  
