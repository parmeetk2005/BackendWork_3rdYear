const express = require("express");
const router = express.Router(); // small application
const Blogs = require('../model/blog');
const {postaddBlog, getreadBlog, getOneBlog, deleteOneBlog, updateOneBlog} = require("../controller/blogController");

router.post("/", postaddBlog);
router.get("/", getreadBlog);
router.get("/:id", getOneBlog);
router.delete("/:blogId", deleteOneBlog);
router.put("/:blogId/:userId", updateOneBlog);

// router.post("/", async(req, res) => {
//     let { title, body, userId } = req.body;
//     // console.log(title, body, userId);
//     let userExist = await User.findById(userId);
//     if(userExist){
//         let newBlog = new Blogs({
//         title : title,
//         body : body,
//         date : Date.now(),
//         userId: userId
//         });
//         await newBlog.save() // save the blog post to the database
//         userExist.blogs.push(newBlog._id); // add the blog post ID to the user's blogs array
//         await userExist.save(); // save the updated user document
//         res.json({
//             success: true,
//             data: newBlog,
//             message: "Blog post created successfully", 
//         })
//     }
// });

// router.get("/", async(req, res) => {
//     let AllBlogs = await Blogs.find();
//     res.json({
//         success: true,
//         data: AllBlogs,
//     })
// })
// router.get("/:id",async(req,res)=>{
//     let {id}=req.params
//     let blog = await Blogs.findOne({_id:id});
//     res.json({
//         success: true,
//         data: blog,
//     })
    
// })


// // delete blog
// router.delete("/:blogId", async (req, res) => {
//     let {blogId} = req.params;
//     let{userId} = req.body;
//     let blogExist = await Blogs.findById(blogId);
//     if(!blogExist) return res.json({
//         success: false,
//         message: "Blog does not exist"
//     })
//     if(blogExist.userId != userId) return res.json({
//         success: false,
//         message: "You are not allowed to delete this blog"
//     })
//     await Blogs.findByIdAndDelete(blogId);
//     let userExist = await User.findById(userId);
//     let blog = userExist.blogs.filter((id) => id != blogId);
//     userExist.blogs = blog;
//     await userExist.save();
//     res.json({
//         success: true,
//         message: "Blog deleted successfully",
//         data: userExist
//     })
// })


// //update
// router.put("/:blogId/:userId", async (req, res)=>{
//     let{blogId, userId}=req.params;
//     let{title, body}=req.body;

//     let blogExist=await Blogs.findById(blogId);
//     if(!blogExist){
//        return res.json({
//             success:false,
//             message:"Blog does not exist"
//         })
//     }
//       if(blogExist.userId!=userId){
//         return res.json({
//             success:false,
//             message:"You are not allowed to edit this blog"
//         })
//     }
//   let updatedBlog=  await Blogs.findByIdAndUpdate(blogId, { title, body}, {new:true});
//     res.json({
//         success:true,
//         message:"Blog edited successfully",
//         data:updatedBlog
//     })

// })


module.exports = router; // export the router to use in the main app file