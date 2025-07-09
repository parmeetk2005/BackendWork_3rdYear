/* callback hell example */ 


// function buyproduct(product_name,cb){
//     //do some async operation
//     setTimeout(() => {
//     console.log("all the I/O is completed and order detailed");
//         cb();
// },0)
// }
// buyproduct("iphone16", function(){
//     console.log("product bought successfully");
// })



let product = [{
    name:"samsung",
    amount:70000,
    quantity:10
},
{
    name:"iPhone16",
    amount:100000,
    quantity:0
}]

function buyproduct(product_name,cb){
    //do some async operation
    let isProduct =  product.filter((p)=> p.name == product_name)[0];   
    if(!isProduct){
        return cb("Product is not available", null);    // use return here or write "cb(null,isProduct.amount);" in else
    }
    cb(null,isProduct.amount);
}

let availableamount = 80000000;  // it will deduct the amount if amount is 200000 from bank but if amount is 8000 then it will print "bank balance is low" and not deduct the amount
function deductbankamount(amount, cb){
    // do some transacrtions
    if(amount > availableamount){
        return cb("bank balance is low", null)
    }
    else{
        availableamount -= amount;
        cb(null,"amount deducted")     // if the developer bymistake call the callback hell twice the program will crash,i.e; mount is deducted twice
        cb(null,"amount deducted")    
    }
}
buyproduct("iPhone16", function(err, amount){
    if(err){
        console.log(err);
    }
    console.log(amount);
    deductbankamount(amount, function(err, message){
        if(err){
            return console.log(err);
        }
        console.log(message);
    })
})


/* 1) callback hell
   2) no control in our hand because we are just using the code developer has written
   TO RESOLVE THIS WE USE " PROMISES "
*/


   // fs is default module in nodejs
// const fs = require("fs");







