DROP DATABASE IF EXISTS chat

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.
  Table 1: USERS
  Column 1: Users
  Column 2: User ID

  Table 2: MESSAGES
  Column 1: Messages
  Column 2: Message ID

  Table 3: ROOMS
  Column 1: Rooms
  Column 2: Room ID

  Table 4: USERS_MESSAGES
  Column 1: User ID
  Column 2: Message ID

  Table 5: ROOMS_MESSAGES
  Column 1: Room ID
  Column 2: Message ID
  */
);

/* Create other tables and define schemas for them here! 

CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);*/

CREATE TABLE Users (
  username varchar(255),
  userID int
)

CREATE TABLE Messages (
  message varchar(255),
  messageID int
)

CREATE TABLE Rooms (
  room varchar(255),
  roomID int
)
CREATE TABLE Users_Messages (
  userID int,
  messageID int
)

CREATE TABLE Rooms_Messages (
  roomID int,
  messageID int
)



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

