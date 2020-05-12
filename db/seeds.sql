-- Header space for easier readability

-- In this file, write insert queries to populate the tasks table with at least three entries.
-- Insert more than one row at a time
 INSERT INTO tasksTable (name)
 VALUES ("Learn Sequelize"),
 ("Understand Orm"),
 ("Eat Ice Cream");

 INSERT INTO tasksTable (name, completed)
 VALUES ("Workout", true),
 ("Eat Lunch", true),
 ("Make Bed", true)

-- Run the schema.sql and seeds.sql files into the mysql server from the command line

-- Now you're going to run these SQL files.

-- Make sure you're in the db folder of your app.


-- Start MySQL command line tool and login: mysql -u root -p.

-- With the mysql> command line tool running, enter the command source schema.sql. 
-- This will run your schema file and all of the queries in it 
-- in other words, you'll be creating your database.


-- Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.


-- Close out of the MySQL command line tool: exit.