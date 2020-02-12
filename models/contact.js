const mongoose = require('../db/connection');

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: Number,
  email: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: Number
  },
  imageUrl: String
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
