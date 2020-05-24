const mongoose = require('mongoose');

const theatreSchema = new mongoose.Schema({
    theatre_name: { type: String, required: true, unique: true},
    theatre_location: { type: String, required: true },
    city: { type: String, required: true },
    pincode : { type: Number } 
});

module.exports = mongoose.model('Theatre', theatreSchema);