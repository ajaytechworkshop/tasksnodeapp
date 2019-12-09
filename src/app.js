const express = require('express');
const cors = require('cors');
const taskRouter  = require('./routers/taskrouter');


const app = express();
//Port for running the app
const port = process.env.PORT || 4000;

//CORS
app.options('*',cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Parse the request body to Json
app.use(express.json());
app.use(taskRouter);
app.use(cors());

app.listen(port,() => {
  console.log('Tasks node app is up and running on port..'+port);
});