const express = require('express')
const app = express()

app.get('/', (req, res) => {      // end point for get req
    // res.send('Hello World')
    // res.send("<h1> Ok </h1>")  // this will not work as res.send can only be called once
    // res.sendFile("./index.html")   // this will error give the absolute file path
    // res.sendFile(__dirname + '/index.html') // __dirname gives the absolute path of the current directory
    // res.json({
    //     name : "Parmeet Kaur",
    //     age : 19,
    // })
    res.end("hi")
})

//path variables
// 1) query parameters
app.get("/watch",(req, res)=>{
    // console.log(req.query.v)      // id with show in terminal
    let videoId = req.query.v;
    let nID = req.query.n;
    res.send("ig got it" + " " + videoId + " " + nID)  // send the response back to the client
})

// 2) params
app.get("/watch/:v/video/:n",(req, res)=>{         // after : everything will be value of v
    console.log(req.params.v)      // id with show in terminal
    console.log(req.params.n)      // id with show in terminal
    res.send("got it!!!")
})



app.listen(3000, function(){                              // listen starts the server on port 3000
    console.log('Server is running on port 3000')
})            