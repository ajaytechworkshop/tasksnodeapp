const express = require('express');
const cors = require('cors');
const taskRouter  = require('./routers/taskrouter');


const app = express();
//Port for running the app
const port = process.env.PORT || 6000;

//Parse the request body to Json
app.use(express.json());
app.use(taskRouter);
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port,() => {
  console.log('Tasks node app is up and running on port..'+port);
});