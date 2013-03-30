// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://twentyseven.info/hackru');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
});

