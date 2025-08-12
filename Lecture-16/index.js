// // mongodb stores data in bson form (binary json) and is non-relational database
// // mongoose is ODM (Object Data Modeling) to connect node.js(server) to mongodb and to perform CRUD operations through node.js

// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// app.use(express.json()); // Middleware to parse JSON bodies
// app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
// const Blogs = require("./model/blog.js");
// app.post("/blogs",async (req, res)=>{
//     let{title, body} = req.body;
//     let newBlog = new Blogs({
//         title: title,
//         body: body,
//         date: Date.now()
//     });
//     await newBlog.save() // Save the new blog post to the database
//     res.json({
//         success: true,
//         data: newBlog,
//         message:"Blog post created successfully"
//     })
//     // console.log(title, body);
//     // res.send("Blog post received");
// })

// app.get("/blogs",async (req, res)=>{
//     let allBlog = await Blogs.find(); // Find all blog posts in the database
//     res.json({
//         success: true,
//         data: allBlog,
//         // message: "Blog posts retrieved successfully"
//     })
// })
// app.get("/blogs/:id",async (req, res)=>{      // id took by params
//     let {id} = req.params;
//     let blog = await Blogs.findOne({_id: id});     // findOne we can find by multiple attributes
//     res.json({
//         success: true,
//         data: blog
//     });
// })

// app.listen(4445, () => {
//   console.log("Server is running on port 4445");
// });

// /* HOMEWORK */
// //create a user schema in user.js file
// //email,username,pwd
// ////blog vla route k niche  3 route bnane hia...app.post("/users") , app.get("/users") , app.get("/users/:id")
// //username,email,password


// // Using ES6 imports
// mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
//   .then(() => console.log('✅ Connected to MongoDB!'))


// //MONGO DB stores data in (bson) form...--binary json
// //to connect our server to mongo db we need to install mongoose
// //--key string
// //moonogose--odm (object document mapping) library so that we can use CRUD oparations
// //schema will bes stored in model folder..

// mongoose is ODM (Object Data Modeling) to connect node.js(server) to mongodb and to perform CRUD operations through node.js

const express = require('express');
const mongoose = require('mongoose');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Blogs= require('./model/user');
const User=require('./model/user');
app.post("/blogs", async(req, res) => {
    let { title, body} = req.body;
    let newBlog = new Blogs({
        title : title,
        body : body,
        date : Date.now()
    });

    await newBlog.save() // save the blog post to the database
    res.json({
        success: true,
        data: newBlog,
        message: "Blog post created successfully", 
    })
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
    try {
        let allUsers = await User.find();
        res.json({
            success: true,
            data: allUsers,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// Get a blog by ID
app.get("/blogs/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let blog = await Blog.findById(id); // shorter & safer
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.json({
            success: true,
            data: blog,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});





app.listen(4445, () => {
  console.log("Server is running on port 4445");
});

mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  .then(() => console.log('Connected to MongoDB!'))

  
//create a user schema in user.js file
//email,username,pwd
////blog vla route k niche  3 route bnane hia...app.post("/users") , app.get("/users") , app.get("/users/:id")