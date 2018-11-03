const mongoose = require('mongoose');
const http = require('http');
const Schema = mongoose.Schema;

let Team = mongoose.model('User');
let db = mongoose.connection;
let dbUrl = 'mongodb://heroku_34smc82j:836jqr8ffo6erv8ngmc6h32afn@ds249233.mlab.com:49233/heroku_34smc82j';
db.on('error', function () {
  console.log('error');
});
mongoose.connect(dbUrl, function (err) {
  if (err) {
    return console.log('there was a problem' + err);
  }
  console.log('connected!');
  var team = new Team({
    name: 'Jehovah'
  });
  team.save(function (error, data) {
    if (error) {
      console.log(error);
    }
    db.close();
    process.exit();
  });
});