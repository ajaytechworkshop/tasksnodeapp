const mongoose = require('../db/mongoose');
const validator = require('validator');

const User = mongoose.model('User',{
  name:{
    type: String,
    required: true,
    trim: true
  },
  password: {
    type : String,
    required: true,
    minlength: 6,
    trim: true,
    validate(value){
      if(value.toLowerCase().includes('password')){
        throw new Error('Invalid Password');
      }
    }
  },
  age:{
    type: Number,
    validate(value){
      if(value < 0){
        throw new Error('Age is invalid..');
      }
    }
  },
  email: {
    type: String,
    required: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('Invalid Email ..');
      }
    },
    trim: true
  }
});

module.exports = User;
