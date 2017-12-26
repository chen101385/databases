var models = require('../models');
var bluebird = require('bluebird');

var userFields = ['username'];
var messageFields = ['message', 'username', 'roomname'];

module.exports = {
  messages: {
    get: function (req, res) {

      //Sequelize - findAll
        //include is, by default, an (left) outer join
          //in ORM: join = inner-join
      Message.findAll({ include: [user] })
        .complete(function(err, results) {
          res.json(results);
        });
      // // a function which handles a get request for all messages
      // //use an 'errorback'/'error-first' callback/'node-style' callback
      // models.messages.get(function(err, results) {
      //   //send back as json data via EXPRESS
      //   //TODO: error
      //   res.json(results);
      // });
    },
    post: function (req, res) {
      //must provide parameters (param); mySQL adapter requires params to be an array
      //in controller, our data for a post request comes from the body, in key-value pairs;


      //User.findOrCreate - find a user or, if doesn't exist, create one
      User.findOrCreate({username: req.body[username]});
        .complete(function(err, user) {
          let params = {
            text: req.body[text],
            //need to convert username --> userID 
            //DELETED - username: req.body[username]
            userid: user.id,
            roomname: req.body[roomname]
          };
          //interact directly with ORM Message object
          Message.create(params)
            //invoke a .complete callback when ORM is FINISHED
            .complete(function (err, results) {
              //EXPRESS - res.sendStatus(statusCode) - sets response HTTP status code & sends string representation as response body. 
              res.sendStatus(201);
            });
        });
      } 
    // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //nothing to include in parens, since only interacting with users
      User.findAll()
        .complete(function (err, results) {
          res.json(results);
        });
    },
    post: function (req, res) {
      //post request - only creating (not finding)
      User.create({ username: req.body[username] });
          //invoke a .complete callback when ORM is FINISHED
          .complete(function(err, results) {
            //EXPRESS - res.sendStatus(statusCode) - sets response HTTP status code & sends string representation as response body. 
            res.sendStatus(201);
          });
    }
  }
};

