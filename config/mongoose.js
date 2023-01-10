const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contact');

const db = mongoose.connection;

db.on('error', console.error.bind('error in database'));

db.once('open', function(){
    console.log('Successfully connected to the database');
})