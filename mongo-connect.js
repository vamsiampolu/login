var mongoose = require('mongoose');
module.exports = function mongoConnect(url) {
  'use strict';
  mongoose.connect(url);

  //take a look here to figure out how to handle mongoose connection:
  //http://theholmesoffice.com/mongoose-connection-best-practice/
  mongoose.connection.on('error', function(err){
    if(err) {
      console.error(err);
    }
  });
  mongoose.connection.on('connected', function(){
    console.log('connection established');
  });

  mongoose.connection.on('disconnected', function(){
    console.log('Disconnected from mongo db');
  });

  mongoose.connection.on('SIGINT', function(){
    //sigint represents the termination of the app
    mongoose.connection.close(function(){
      console.log('Connection to mongo db has been closed because the app terminated');
      /*eslint ignore*/
      process.exit(0);
    });
  });

};

