// create a server
const express = require('express');
const { m1, m2 } = require('./middleware/firstMiddleWare');
const { m3 } = require('./middleware/pathLevel');
const userRoutes = require('./routes/userRoutes');
const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(m1);
// app.use(m2);

app.use("/api/users", userRoutes);




// middleware- function which runs on client request before controller function
// can modify request object
// middleware will run in the order it is called


// NOTE: next() and return() is not same, after completing the middleware, the remaining func/code will work unlike return()


app.get("/health", m3, (req, res, next)=>{
    console.log("Running controller function");    // controller function is also kind of mmiddleware and we can call next it in
    // next();       // * *
    return res.json({
        status : "ok",
        message : "server running okay"
    })
    // console.log("after response")
})

app.use(m2); // it will not run until and unless next is not called in controller function
app.get("/home", (req,res)=>{
    console.log("Running home end point")
    res.json({
        success : true,
        message : " welcome to home page"
    })
})





app.listen(5775, () => {
  console.log("Server is running");
});