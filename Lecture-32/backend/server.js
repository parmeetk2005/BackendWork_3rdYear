const { WebSocketServer } = require("ws")

const wss = new WebSocketServer({ port: 8888 })

const {v4: uuidv4}  = require ("uuid")      // npm i uuid@8 to change the version

// msg recieved from client and reply back to the same client
// wss.on("connection", function(socket){
//     console.log("User connected")
//     socket.on("message", function(message){
//         console.log("message received: " + message.toString())
//         if(message.toString() == "ping"){
//             console.log("sending pong")
//             socket.send("pong")
//         }
//     })
// } )




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



// let arr = [
//     {"room": "1234",
//      "users": []
//     }
// ]
// {
//     "1234":[s1, s2]
// }



let rooms = new Map();

wss.on("connection",(socket)=>{
    console.log("New user connected");
    socket.on("message", function(message){
        let parsedMessage = JSON.parse(message)
        let{type, payload} = parsedMessage;
        if(type == "join"){
            let {roomId} = payload;
            if(!rooms.get(roomId)){
                rooms.set(roomId, new Set());
            }
            rooms.get(roomId).add(socket);
            console.log(rooms);
            socket.roomId = roomId;
            socket.send("added to room");
        }
        else if(type == "chat"){
            let {message} = payload;
            let {roomId} = socket;
            let allClients = rooms.get(roomId);
            allClients.forEach(s =>{
                s.send(message);
            })
        }
        else if(type == "create"){
            let roomId = uuidv4();
            socket.send(JSON.stringify({
                type: " create",
                payload: {
                    roomId : roomId
                }
            }))
        }
    })
})







// IN EXPRESS:
// const express = require("express")
// const app = express()
// app.listen()