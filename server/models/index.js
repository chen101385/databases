var db = require('../db');

/*
GET - retrieve/fetch all messages

POST - store a message on the database 

***REFACTOR CODE to work with my tables & IN GENERAL***

*/

module.exports = {
  messages: {
    get: function (callback) {
    // a function which produces all the messages
    //want to get ID, TEXT, ROOMNAME, USERNAME
    //outer join enforces a 'looser' selection criteria (left outer join)
    //include message.id, messages.text & messages.roomid in FULL from MESSAGES
    //have a messages.userID for each row, only filling out those that have an equal counterpart on users.id, the remainder are NULL.
      var queryStr = "select messages.id, messages.text, messages.roomname users.username from messages \
                      left outer join users on (messages.userid = users.id) \
                      order by messages.id desc";
      db.query(queryStr, function (err, results) {
        callback(results);
      });

    },
    post: function (params, callback) {
    // a function which can be used to insert a message into the database
      var queryStr = "insert into messages(text, userid, roomname) \
                      values (?, (select id from users where username = ? limit 1), ?)";
      db.query(queryStr, function (err, results) {
        callback(results);
      });

    } 
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      //fetch all users
      var queryStr = "select * from users";
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    },
    post: function (callback, params) {
      //create a user 
      //insert into users(username) values (?) = argument to the query function itself
      var queryStr = "insert into users(username) values (?)";
      db.query(queryStr, params, function (err, results) {
        callback(results);
      });
    }
  }
};

