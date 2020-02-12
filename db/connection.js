const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contacts', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

module.exports = mongoose;
