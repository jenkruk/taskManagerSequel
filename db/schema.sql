-- Header space for easier readability

-- Write SQL queries in this file that do the following:
-- DROP DATABASE IF EXISTS taskManagerSequel_db;
-- Create the taskManager_db.
CREATE DATABASE taskManagerSequel_db;
-- Switch to or use the taskManager_db.
USE taskManagerSequel_db;


-- Create a tasks table with these fields:
CREATE TABLE tasksTable
(
-- id: an auto incrementing int that serves as the primary key.
id int NOT NULL AUTO_INCREMENT,
-- task name: a string.
name varchar(255) NOT NULL,
-- completed: a boolean.
completed BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);