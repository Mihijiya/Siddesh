// Assignment 6: MongoDB E-Commerce Database

// Create Database
use EcommerceDB


// Products Collection
db.products.insertMany([
{product_id:1, name:"Laptop", price:60000, stock:10},
{product_id:2, name:"Smartphone", price:30000, stock:20},
{product_id:3, name:"Headphones", price:2000, stock:50}
]);


// Customers Collection
db.customers.insertMany([
{customer_id:101, name:"Rahul", email:"rahul@email.com"},
{customer_id:102, name:"Neha", email:"neha@email.com"},
{customer_id:103, name:"Amit", email:"amit@email.com"}
]);


// Orders Collection
db.orders.insertMany([
{order_id:1001, customer_id:101, product_id:1, quantity:1, date:"2026-03-01"},
{order_id:1002, customer_id:102, product_id:2, quantity:2, date:"2026-03-02"},
{order_id:1003, customer_id:103, product_id:3, quantity:3, date:"2026-03-03"}
]);


// Reviews Collection
db.reviews.insertMany([
{review_id:1, product_id:1, rating:5, comment:"Excellent laptop"},
{review_id:2, product_id:2, rating:4, comment:"Very good phone"},
{review_id:3, product_id:3, rating:4, comment:"Nice sound quality"}
]);


// Query 1: Find all products
db.products.find()


// Query 2: Find orders of a customer
db.orders.find({customer_id:101})


// Query 3: Total quantity sold per product
db.orders.aggregate([
{
$group:{
_id:"$product_id",
totalSold:{$sum:"$quantity"}
}
}
])


// Query 4: Average rating of products
db.reviews.aggregate([
{
$group:{
_id:"$product_id",
avgRating:{$avg:"$rating"}
}
}
])
