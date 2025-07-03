//  function sum(a, b){
//     return a+b
// }
//  function sub(a, b){
//     return a-b
// }

// module.exports={   /* method 1 */
//     sum,
//     sub
// }

// module.exports.sum = sum;  /* method 2 (make key and passed the value) PREFER THIS */
// module.exports.sub = sub;

export function sum(a, b){
    return a+b
}
export function sub(a, b){
    return a-b
}