const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Always require and configure neat the top
require('dotenv').config();
// Connect to the database (after the dotenv)
require('./config/database');
require('./config/multer_S3');

const userRouter = require('./routes/api/users')
const sneakerRouter = require('./routes/api/sneakers')
const bannerRouter = require('./routes/api/banners')

const app = express();

app.use(logger('dev'));
app.use(express.json());

if( process.env.NODE_ENV !== 'development'){
  app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
  app.use(express.static(path.join(__dirname, 'build')));
}


// API routes here
app.use('/api/users', userRouter)
app.use('/api/sneakers', sneakerRouter)
app.use('/api/banners',bannerRouter)


// "Catch all" route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});

