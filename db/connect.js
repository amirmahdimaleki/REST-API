const mongoose = require("mongoose");

const connectDB =async (url) => {
  try {
    await mongoose.connect(url);
    
  } catch (err) {
    console.log(err.message)
  }
};

module.exports = connectDB;