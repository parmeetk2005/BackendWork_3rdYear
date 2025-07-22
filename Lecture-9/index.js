// const express = require('express');
// const fs = require('fs');
// const app = express();
// app.use(express.json()); // middleware to parse JSON data from the request body
// let user = { name, email }; // create a user object with name and email
// console.log(user);

// // app.post("/home", (req, res) => {
// //     console.log(req.body); // this will log the data we got from the client
// // });

// // app.get('/', (req, res) => {
// //     res.send('Hello World'); 
// // }); 

// // app.post('/contacts', (req, res) => {
// //     res.send('Hello from POST request');
// // }); 


// // assume that we got 2 data from the client
// // 1) name
// // 2) email
// // we will send the response back to the client with the data we got and show the data json format

//  // console.log(req.body); // this will log the data we got from the client
//     // // res.send('Hello from POST request'); // this will send the response back to the client
//     // // res.json({name: req.body.name, email: req.body.email}); // this will send the response back to the client in json format
// app.post('/home', (req, res) => {
//     let name = req.body.name;
//     let email = req.body.email;
//     res.json({
//         name: name,
//         email: email
//     });
//     console.log(arr.push(req.body));
//     console.log(arr);
//     fs.writeFile("./data.txt",JSON.stringify(arr),(err)=>{
//         if(err){
//             return console.log(err);
//         }
//         console.log("done")
//     })
// });

// app.listen(3000, function(){
//     console.log('Server is running on port 3000')
// })  
// let arr = [];



const { json } = require("body-parser");
const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello")
})
// let obj = {
//     name,
//     age:20,
// }

app.post("/user",(req,res)=>{
    // let{name,age} = req.body;
    // res.json({name,age});
    let arr = [];
    let name = req.body.name;
    let age = req.body.age;
    let user = {name,age};
    
    fs.readFile("./data.txt","utf-8",(err,data)=>{
   
    if(!err&&data!=""){
        arr = JSON.parse(data)
    }
    console.log(arr.push(user));
    
   
    console.log(arr);
    fs.writeFile("./data.txt",JSON.stringify(arr,null,2),(err1)=>{
        if(err1){
            return console.log(err1);
        }
        console.log("done")
    })
    

    })
  res.send("user added")
})
app.post("/register",(req,res)=>{
     })

app.listen(3000,()=>{
    console.log("server started");
})
