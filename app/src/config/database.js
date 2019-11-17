const mongoose = require('mongoose');

//TODO set connection string for docker instance
mongoose.connect('mongodb://localhost/DB_todo',
{useNewUrlParser: true, useUnifiedTopology:true});

module.exports = {
    mongo: mongoose.connection,
    ObjectId: mongoose.Types.ObjectId
}