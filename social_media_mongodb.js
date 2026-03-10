// Assignment 5: Social Media Database using MongoDB

// Create Database
use SocialMediaDB


// Users Collection
db.users.insertMany([
{user_id:1, name:"Rahul", email:"rahul@email.com"},
{user_id:2, name:"Neha", email:"neha@email.com"},
{user_id:3, name:"Amit", email:"amit@email.com"}
]);


// Posts Collection
db.posts.insertMany([
{post_id:101, user_id:1, content:"Hello World", date:"2026-03-01"},
{post_id:102, user_id:2, content:"My first post", date:"2026-03-02"},
{post_id:103, user_id:3, content:"Learning MongoDB", date:"2026-03-03"}
]);


// Comments Collection
db.comments.insertMany([
{comment_id:1, post_id:101, user_id:2, text:"Nice post"},
{comment_id:2, post_id:101, user_id:3, text:"Great"},
{comment_id:3, post_id:102, user_id:1, text:"Interesting"}
]);


// Likes Collection
db.likes.insertMany([
{like_id:1, post_id:101, user_id:2},
{like_id:2, post_id:101, user_id:3},
{like_id:3, post_id:102, user_id:1}
]);


// Followers Collection
db.followers.insertMany([
{user_id:1, follower_id:2},
{user_id:1, follower_id:3},
{user_id:2, follower_id:1}
]);


// Query 1: Find all users
db.users.find()


// Query 2: Find posts by a specific user
db.posts.find({user_id:1})


// Query 3: Count likes on each post
db.likes.aggregate([
{
$group:{
_id:"$post_id",
totalLikes:{$sum:1}
}
}
])


// Query 4: Users with most followers
db.followers.aggregate([
{
$group:{
_id:"$user_id",
followers:{$sum:1}
}
},
{
$sort:{followers:-1}
}
])
