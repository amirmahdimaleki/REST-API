const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      email: {
        type: string,
        required: true
      }
  });
  
  // the first argument is the model name and the second one is the schema that we want to build a model on top of.
  module.exports = mongoose.model("User", UserSchema);