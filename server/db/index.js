var Sequelize = require('Sequelize');

//Review ORM
var orm = new Sequelize('chat', 'root', '');


var User = orm.define('User', {
    username: Sequelize.STRING
});

var Message = orm.define('Message', {
    text: Sequelize: STRING,
    roomname: Sequelize.STRING
});

//define relationship between User & Messages (above)

//tells orm that a user can have many messages
User.hasMany(Message);
//tells orm where messages belong to; foreign key for users table lives in the messages table.
Message.belongsTo(User);

//synchronize database with our schema 
User.sync();
Message.sync();

//export as well
export.User = User;
exports.Message = Message;


// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".


// /* NOTES

// controllers depend on models;  models depend on the database.

// */


// var connection = mysql.createConnection ({
//   user: "root",
//   password: "",
//   database: "chat"
// });

// connection.connect();

// module.exports = connection;


