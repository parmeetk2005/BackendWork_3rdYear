/* PROMISES
   it is an object which represents eventual completion (or failure) of an asynchronous operation and its resulting value.
   control is in our hand, we can resolve or reject the promise.
*/


let p = new Promise((resolve, reject) => {
    resolve("wada pura kiya")
    
});
console.log(p);
p.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})



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
function buyproduct(product_name) {
    return new Promise((resolve, reject) => {
        let isProduct = product.filter((p) => p.name == product_name)[0];   
        if (!isProduct) {
            return reject("Product is not available");
        }
        resolve(isProduct.amount);
    });
}

buyproduct("iPhone16").then((amount)=>{
    console.log(amount);
})
.catch((err)=>{
    console.log(err);
})





// let p = new Promise((resolve,reject) => {
//     resolve("Promise Fulfilled.");
// });
// // console.log(p);

// p.then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


//promise = No Inversion of control.
let products=[{
    name:"Samsung",
    amount:70000,
    quantity:10
},
{
    name:"Iphone",
    amount:100000,
    quantity:0
}]

function buyProduct(productName){
    return new Promise((resolve, reject)=>{
        let isProduct=products.filter((p)=>p.name==productName)[0]; 
        if(!isProduct){
            reject("Product is not available");
        }else {
            resolve(isProduct.amount);
        }

    })
}
let balance=200000;
function deductMoney(amount){
return new Promise((resolve, reject)=>{
    if(amount>balance){
        reject("insufficient balance");
    }else{
        balance-=amount;
        resolve("Product purchased");
    }
})
}


// Promise chaining.It is used to execute multiple promises into synchronous way.
// buyProduct("Iphone").then((amount) => deductMoney(amount))
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

// if we have es module then we can use await without async.
// to use es module whether rename the file to mjs or add type attribute to package.json as module.
// to avoid promise chaining we use async await.
// we wrap it up all in async function to make is asynchronously this will make all the other code to run usually and make the synchronous code inside it into an asynchronous code

// async converts the function into promise 
async function domyTask() {
    
try{
 let amount=await buyProduct("Iphone");
 let mes=await deductMoney(amount);
 console.log(mes);
}catch(error){
    console.log(err);
}
}
console.log(domyTask());
console.log("Start");
