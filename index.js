// * import section

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const connectDB = require("./db/connect");

const app = express()
const PORT = process.env.PORT || 5000


app.get("/", (req, res)=>{
    res.send("REST API!")
})

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
  
      app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  start();