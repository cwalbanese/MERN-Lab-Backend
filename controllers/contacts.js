const express = require('express');
const Contact = require('../models/contact.js');
const router = express.Router();

router.get('/contacts', (req, res) => {
  Contact.find({}).then(contacts => res.json(contacts));
});

router.get('/contacts/:id', (req, res) => {
  Contact.find({ _id: req.params.id }).then(contact => res.json(contact));
});

router.post('/contacts', (req, res) => {
  Contact.create(req.body).then(contact => res.json(contact));
});

router.put('/contacts/update/:id', (req, res) => {
  Contact.findOneAndUpdate(
    {
      _id: req.params.id
    },
    { $set: req.body },
    { new: true }
  ).then(contact => res.json(contact));
});

router.delete('/contacts/delete/:id', (req, res) => {
  Contact.deleteOne({ _id: req.params.id }).then(contact => res.json(contact));
});

module.exports = router;
