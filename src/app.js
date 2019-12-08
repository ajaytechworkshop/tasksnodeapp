const express = require('express');
const taskRouter  = require('./routers/taskrouter');


const app = express();
//Parse the request body to Json
app.use(express.json());
app.use(taskRouter);

//Port for running the app
const port = process.env.PORT || 6000;


app.listen(port,() => {
  console.log('Tasks node app is up and running on port..'+port);
});