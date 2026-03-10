-- Employee Management System

CREATE DATABASE EmployeeDB;
USE EmployeeDB;

-- Departments Table
CREATE TABLE departments (
dept_id INT PRIMARY KEY,
dept_name VARCHAR(50)
);

-- Employees Table
CREATE TABLE employees (
emp_id INT PRIMARY KEY,
emp_name VARCHAR(50),
salary INT,
dept_id INT,
manager_id INT
);

-- Projects Table
CREATE TABLE projects (
project_id INT PRIMARY KEY,
project_name VARCHAR(50)
);
