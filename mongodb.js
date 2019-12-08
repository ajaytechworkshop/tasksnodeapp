const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

//Database Connection URL
//const connectionUrl = 'mongodb+srv://mongouser:mongouser@mongoone-lz8dp.mongodb.net/test?retryWrites=true&w=majority';
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'tasksdb';

//Connect to Mongo DB
MongoClient.connect(connectionUrl,{useNewUrlParser:true},(error,client) => {
  if(error){
    return console.log('Unable to connect to DB'); 
  }
  console.log('Connected to Mongo DB :-)');
});
