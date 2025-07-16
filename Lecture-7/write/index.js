let users = [
    {
        name: "JM",
        age: "19",
        address: "patiala",
    },
    {
        name: "RM",
        age: "17",
        address: "ambala",
    }
]
const fs = require("fs");
const {write} = require("../IOoperations/util.js");
write("../users.txt", users)
    .then((message) => console.log(message))
    .catch((err) => console.log(err));
module.exports = users;

// when we did not write stringify the outout was  [ object, object ] because it was not converted to json format
// when we write stringify the output is in json format which is human readable
