const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient()
async function addUser(email, name, password) {
    let newUser = await prisma.user.create({
        data:{
            email: email,
            name: name,
            password: password
        }
    })
    return newUser
}
// addUser("ppreet2009@gmail.com", "Preet", "1234").then(()=>{
//     console.log("User added")
// })
// .catch((err)=>{
//     console.log(err)
// })

async function addTweet(content, userId){
    await prisma.tweet.create({
        data:{
            content: content,
            userId: userId
        }
    })
}
// addTweet("today was CC practical", 7).then(()=>{
//     console.log("Tweet added")
// })
// .catch((err)=>{
//     console.log(err)
// })




// find all tweet by user whose id is 1
async function getUserTweet(userId){
    let tweets = await prisma.tweet.findMany({
        where:{
            userId: Number (userId)    // id is converted into number because in db it is integer
        }
    })
    return tweets
}
// getUserTweet("1").then((data)=>{
//     console.log(data)
// });




// user whose id is 1 wants to update his tweet --> tweet id is 1
async function updateUserTweet(tweetId, userId, UpdatedContent){
    let tweet = await prisma.tweet.findUnique({
        where:{
            id: Number(tweetId)
        }
    })
    if(!tweet){
        return "tweet does not exist"
    }
    if(tweet.userId != Number(userId)){
        return "User can not update this tweet"
    }
    await prisma.tweet.update({
        where:{
            id: Number(tweetId)
        },
        data:{
            content: UpdatedContent
        }
    })
}
// updateUserTweet("1", "1", "Updated tweet").then(()=>{
//     console.log("Tweet is updated")
// })



// user wants to delete his tweet
// async function deleteUserTweet(tweetId, userId) {
//     let tweet = await prisma.tweet.findUnique({
//         where: {
//             id: Number(tweetId)
//         }
//     })
//     if (!tweet) {
//         return "Tweet does not exist"
//     }
//     if (tweet.userId !== Number(userId)) {
//         return "User cannot delete this tweet"
//     }
//     await prisma.tweet.delete({
//         where: {
//             id: Number(tweetId)
//         }
//     })

//     return "Tweet deleted successfully"
// }

// deleteUserTweet("1", "1").then((msg) => {
//     console.log(msg)
// })




/* Wants to delete user */
// async function deleteUser(userId){
//     await prisma.user.delete({
//         where:{
//             id: Number(userId)
//         }
//     })
//     return "User deleted"
// }
// deleteUser("1").then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


async function getUsers(){
    let allusers = await prisma.user.findMany({
        // select:{
        //     name: true,
        //     email: true,
        //     tweet: {
        //         select:{
        //             content: true
        //         }
        //     }
        // }
        include:{
        tweet: {
            select:{
                content: true
            }
        }
    }
})

    return allusers;
    
}
getUsers().then((data)=>{
    console.log(JSON.stringify(data, null, 2))
})