const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    theatre_id : {type: mongoose.Schema.Types.ObjectId, ref : 'Theatre', required: true},
    movie_id : {type: mongoose.Schema.Types.ObjectId, ref : 'Movie', required : true},
    date : {type : String, required : true},
    time : {type : String, required : true}

});

module.exports = mongoose.model('Show', showSchema);