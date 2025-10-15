const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const {Queue, Worker} = require('bullmq');
let codeQueue = new Queue("code-queue",{
    connection:{
        host:"localhost",
        port:6379,
    },
})

app.post("/api/submission",async function(req,res){
    let {qId,code,language}=req.body;
    //offload the job to message queue so that a worker can do the task.
    //bull is a library to create a message queue
    let result=await codeQueue.add("code-queue",{
    })
    // console.log(result.id);
    // console.log(result.data);
    res.json({
        submissionId:result.id
    })
});

let worker = new Worker("code-queue", function(result){
    // console.log(job.data);
    let {qId, code, language} = result.data;
    // run code against all testcase and return the response
    setTimeout(()=>{
        console.log({
            qId : qId,
            status : "success",
            time : "4ms",
            beat : "top 10%"
        })
        return {
            qId : qId,
            status : "success",
            time : "4ms",
            beat : "top 10%"
        }
    },5000)
},{
    connection :{
        host:"localhost",
        port:6379,
    },
})
worker.on("error", function(err){
    console.log(err);
});


app.listen(3030,function(){
    console.log("server started at 3030")
})