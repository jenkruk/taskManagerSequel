-- Header space for easier readability

-- Write SQL queries in this file that do the following:
DROP DATABASE IF EXISTS taskManager_db
-- Create the taskManager_db.
CREATE DATABASE taskManager_db;
-- Switch to or use the taskManager_db.
USE taskManager_db;


-- Create a tasks table with these fields:
CREATE TABLE tasks
(
-- id: an auto incrementing int that serves as the primary key.
id int NOT NULL AUTO_INCREMENT,
-- task name: a string.
name varchar(255) NOT NULL,
-- completed: a boolean.
completed BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);