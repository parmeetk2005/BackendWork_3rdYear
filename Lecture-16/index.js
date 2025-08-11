// mongodb stores data in bson form (binary json) and is non-relational database
// mongoose is ODM (Object Data Modeling) to connect node.js(server) to mongodb and to perform CRUD operations through node.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
const Blogs = require("./model/blog.js");
app.post("/blogs",async (req, res)=>{
    let{title, body} = req.body;
    let newBlog = new Blogs({
        title: title,
        body: body,
        date: Date.now()
    });
    await newBlog.save() // Save the new blog post to the database
    res.json({
        success: true,
        data: newBlog,
        message:"Blog post created successfully"
    })
    // console.log(title, body);
    // res.send("Blog post received");
})

app.get("/blogs",async (req, res)=>{
    let allBlog = await Blogs.find(); // Find all blog posts in the database
    res.json({
        success: true,
        data: allBlog,
        // message: "Blog posts retrieved successfully"
    })
})
app.get("/blogs/:id",async (req, res)=>{      // id took by params
    let {id} = req.params;
    let blog = await Blogs.findOne({_id: id});     // findOne we can find by multiple attributes
    res.json({
        success: true,
        data: blog
    });
})

app.listen(4445, () => {
  console.log("Server is running on port 4445");
});

/* HOMEWORK */
//create a user schema in user.js file
//email,username,pwd
////blog vla route k niche  3 route bnane hia...app.post("/users") , app.get("/users") , app.get("/users/:id")
//username,email,password


// Using ES6 imports
mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  .then(() => console.log('✅ Connected to MongoDB!'))