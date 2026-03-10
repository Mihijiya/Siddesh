-- Assignment 4: E-Commerce Database System

-- Create Database
CREATE DATABASE EcommerceDB;
USE EcommerceDB;

-- Products Table
CREATE TABLE products (
product_id INT PRIMARY KEY,
product_name VARCHAR(100),
price INT,
stock INT
);

-- Customers Table
CREATE TABLE customers (
customer_id INT PRIMARY KEY,
customer_name VARCHAR(100),
email VARCHAR(100)
);

-- Orders Table
CREATE TABLE orders (
order_id INT PRIMARY KEY,
customer_id INT,
order_date DATE
);

-- Order Items Table
CREATE TABLE order_items (
order_id INT,
product_id INT,
quantity INT
);

-- Reviews Table
CREATE TABLE reviews (
review_id INT PRIMARY KEY,
product_id INT,
rating INT,
comment VARCHAR(255)
);

-- Insert Products
INSERT INTO products VALUES
(1,'Laptop',60000,10),
(2,'Smartphone',30000,15),
(3,'Headphones',2000,50);

-- Insert Customers
INSERT INTO customers VALUES
(101,'Rahul','rahul@email.com'),
(102,'Neha','neha@email.com'),
(103,'Amit','amit@email.com');

-- Insert Orders
INSERT INTO orders VALUES
(1001,101,'2026-03-01'),
(1002,102,'2026-03-02'),
(1003,103,'2026-03-03');

-- Insert Order Items
INSERT INTO order_items VALUES
(1001,1,1),
(1001,3,2),
(1002,2,1),
(1003,3,3);

-- Query: Show all products
SELECT * FROM products;

-- Query: Orders with customer names
SELECT o.order_id, c.customer_name
FROM orders o
JOIN customers c
ON o.customer_id = c.customer_id;

-- Query: Products ordered by customers
SELECT c.customer_name, p.product_name
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id;

-- Query: Total quantity sold per product
SELECT product_id, SUM(quantity) AS total_sold
FROM order_items
GROUP BY product_id;

-- Query: Average rating of products
SELECT product_id, AVG(rating) AS avg_rating
FROM reviews
GROUP BY product_id;
