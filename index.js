// * import section ***********************************************************

require('dotenv').config()
const express = require('express')
const session = require('express-session')
const connectDB = require("./db/connect");
const app = express()
const cors = require('cors')
const session = require('./middleware/session')


// * middleware ****************************************************************

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.uee(cors())
app.use(session({
    secret: ' Top secret',
    saveUninitialized: true,
    resave: false
}))
app.use(session)

app.set("view engine", "ejs")

// * routing ******************************************************************

app.get("/", (req, res)=>{
    res.send("REST API!")
})

// * app.listen (server start) ************************************************
const PORT = process.env.PORT || 5000;

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