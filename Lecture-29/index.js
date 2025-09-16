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
// addUser("kaurparmeet0911@gmail.com", "Parmeet Kaur", "1234").then(()=>{
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
// addTweet("My first tweet", 1).then(()=>{
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
getUserTweet("1").then((data)=>{
    console.log(data)
});




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
updateUserTweet("1", "1", "Updated tweet").then(()=>{
    console.log("Tweet is updated")
})