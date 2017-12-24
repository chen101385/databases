DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;



/* Create other tables and define schemas for them here! 

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
mysql -u root < server/schema.sql

CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);
*/
CREATE TABLE Messages (
 MessageID int NOT NULL AUTO_INCREMENT,
 Message varchar(200) NOT NULL,
 UserID int NOT NULL,
 PRIMARY KEY (MessageID),
 FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Users (
  UserID int NOT NULL AUTO_INCREMENT,
  USERNAME varchar(40) NOT NULL,
  PRIMARY KEY (UserID)
);

CREATE TABLE Rooms (
  RoomID int NOT NULL AUTO_INCREMENT,
  Room varchar(20) NOT NULL,
  MessageID int NOT NULL,
  PRIMARY KEY (RoomID),
  FOREIGN KEY (MessageID) REFERENCES Messages(MessageID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

