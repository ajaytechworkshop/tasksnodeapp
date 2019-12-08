const mongoose = require('mongoose');

//Database Connection URL
//const connectionUrl = 'mongodb+srv://mongouser:mongouser@mongoone-lz8dp.mongodb.net/test?retryWrites=true&w=majority';
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'tasksdb';

mongoose.connect(connectionUrl+'/'+databaseName,{
  useNewUrlParser:true,
  useCreateIndex:true
}).then(() => {
  console.log('Connected to Mongo Databse !!');
}).catch((err) => {
  console.log(err);
});

module.exports = mongoose;

