const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movie_name: { type: String, required: true, unique: true },
    movie_trailer: { type: String, required: true },
    movie_overview: { type: String },
    movie_poster : { type: String },
    length : { type: Number }
});

module.exports = mongoose.model('Movie', movieSchema);