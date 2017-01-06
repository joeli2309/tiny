// call the packages needed
const express = require('express');
const bodyParser = require('body-parser');
const app = express(); //define app using express

const port = process.env.PORT || 3000;// set port

// configure app to use bodyParser() and parse text as json

app.use(bodyParser.urlencoded({
  extended: true,
}));

// will allow us to get the data from post
app.use(bodyParser.json());

// this will create routes
app.use('/api/url/', require('./routes/api.js')(express));

// set server listen port
exports.server = app.listen(port, () => {
  console.log('Server Active On', port);
});
