// let somefun = require("./index")
// console.log(somefun);
// let result1 = somefun.sum(2,3)
// let result2 = somefun.sub(6,5)
// console.log(result1, result2);
import { sum, sub } from "./file.mjs"; // named imports are in {}
let result1 = sum(2,3)
let result2 = sub(6,5)
console.log(result1, result2);