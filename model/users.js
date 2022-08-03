const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      created: {
        type: Date,
        required: true,
        default: Date.now,  
      }
  });
  
  // the first argument is the model name and the second one is the schema that we want to build a model on top of.
  module.exports = mongoose.model("User", UserSchema);