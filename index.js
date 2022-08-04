// * import section ***********************************************************

require('dotenv').config()
const express = require('express')
const session = require('express-session')
const connectDB = require("./db/connect");
const app = express()
const cors = require('cors')
// const session = require('./middleware/session')


// * middleware ****************************************************************

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(session({
    secret: ' Top secret',
    saveUninitialized: true,
    resave: false
}))
app.use( (req, res, next) => {
  res.locals.message = req.session.message
  delete req.session.message
  next();
})

app.set("view engine", "ejs")

// * route prefix ******************************************************************

app.use("", require('./routes/routes'))

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