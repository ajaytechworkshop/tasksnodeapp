const mongose = require('../mongoose');

const Task = mongose.model('Tasks',{
  name : {
    type: String,
    required: true,
    trim: true
  },
  descritption: {
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