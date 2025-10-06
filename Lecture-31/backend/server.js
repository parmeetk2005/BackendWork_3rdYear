const { WebSocketServer } = require("ws")

const wss = new WebSocketServer({ port: 8888 })

// msg recieved from client and reply back to the same client
wss.on("connection", function(socket){
    console.log("User connected")
    socket.on("message", function(message){
        console.log("message received: " + message.toString())
        if(message.toString() == "ping"){
            console.log("sending pong")
            socket.send("pong")
        }
    })
} )




// Broadcast to all connected clients
// let allSocket = []
// wss.on("connection", function(socket){
//     console.log("User connected")
//     allSocket.push(socket)
//     socket.on("message", function(message){
//         console.log("message received: " + message.toString())
//         allSocket.forEach((s)=>{
//             s.send(message.toString());
//         })
//     })
// } )


// IN EXPRESS:
// const express = require("express")
// const app = express()
// app.listen()