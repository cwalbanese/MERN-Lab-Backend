const Contact = require('../models/contact');
const seedData = require('./seeds.json');

Contact.remove({})

  .then(() => Contact.collection.insert(seedData))

  .then(() => {
    process.exit();
  });
