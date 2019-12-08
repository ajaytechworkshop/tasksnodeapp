const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.listen(port,() => {
  console.log('Tasks node app is up and running on port..'+port);
});