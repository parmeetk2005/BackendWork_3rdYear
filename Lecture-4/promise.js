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


