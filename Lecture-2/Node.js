const fs = require ("fs");
console.log("fs");
console.log("hi");
function add(a, b){
    return a+b;
}
function sub(a, b){
    return a-b;
}
function mul(a, b){
    return a*b;
}
fs.readFile("demo.txt", "utf-8", (data) => { // when file is read then this call back is executed
    console.log(data);
});
add(2, 3);
sub(5, 6);
mul(3, 2);
console.log("exit");

// process -> set of tasks, running program
// single-single task is run by thread
// java, c++ is multi thread language
// node.js is single thread language
// single thread is by default sychronous, and in single thread: thread block can happen
// can perform non blocking i/o operations
// event loop is a mechanism that allows node.js to perform non-blocking i/o operations

