var models = require('../models');
var bluebird = require('bluebird');

var userFields = ['username'];
var messageFields = ['message', 'username', 'roomname'];

module.exports = {
  messages: {
    get: function (req, res) {

      //Sequelize - findAll
      Message.findAll()
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
      var params = [ req.body[text], req.body[username], req.body[roomname] ] 
      models.messages.post(params, function(err, results) {
        res.json(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        //TODO: error;
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body[username]]
      models.users.post(params, function (err, results) {
        res.json(results);
      });

    }
  }
};

