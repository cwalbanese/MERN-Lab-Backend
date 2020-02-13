const mongoose = require('../db/connection');

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: String,
  email: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String
  },
  imageUrl: String,
  title: String,
  note: String
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
