function m1(req, res, next){
    console.log("Running middleware 1")
    req.userId = "4";
    return next();  // *
    console.log("after next 1")
}
function m2(req, res, next){
    console.log("Running middleware 2")
    console.log(req.userId);
    req.isAdmin = true;
    return next();  
    console.log("after next 2")
}


module.exports.m1 = m1;
module.exports.m2 = m2;  








/* 

middlewares we can run on like:

1) application level - this will run on every client req
2) path level - this will run on specific paths
3) router level - this will run on specific routes
4) error handling middleware - this will handle errors






4) built-in middleware - this will be provided by express
5) third-party middleware - this will be created by others

*/