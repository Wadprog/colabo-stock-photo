require('dotenv').config();
// Dependencies
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const config = require('config');
const express = require('express');
const passport = require('passport');
const PassportLocal = require('passport-local');
const methodOverride = require('method-override');
// Custom dependencies
const User = require('./models/user');
const { connectDB } = require('./helper');

const app = express();
// Configuring the server
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'error.log'),
  { flags: 'a' }
);

app.use(
  morgan('combined', {
    stream: accessLogStream,
    skip: (req, res) => res.statusCode < 400,
  })
);

// setting up passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new PassportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// connecting to database
//connectDB();

// Serving the routes
// app.use('/api/login', require('./routes/auth'));

/* Handling all errors */
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const { status = 500, message = 'Something went wrong ' } = err;
  return res.status(status).json({ message });
});

const serverConfig = config.get('serverConfig');
const { log } = console;
// Starting the server
const PORT = process.env.PORT || serverConfig.PORT;
app.listen(PORT, () =>
  log(`Server is listening in ${serverConfig.NAME} environment on port ${PORT}`)
);
