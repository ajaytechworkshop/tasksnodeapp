const mongose = require('../db/mongoose');

const Task = mongose.model('Tasks',{
  name : {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  date:{
    type: Date,
  },
  done:{
    type: Boolean,
    required: false,
    default: false
  }
});

module.exports = Task;