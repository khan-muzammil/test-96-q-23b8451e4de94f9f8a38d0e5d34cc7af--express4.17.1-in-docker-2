const express = require('express');
const router = express.Router();
const Show = require('../models/Show')
const Movie = require('../models/Movie')
const Theatre = require('../models/Theatre')
const ObjectID = require('mongodb').ObjectID; 

router.get('/', function(req, res) {
    res.send('Hitting the theatres route');
});

router.post('/create', async(req, res) => {
    try {
        const newShow = {theatre_id, movie_id, date, time} = req.body
        const savedShow = await Show.create(newShow)
        //const getShow = await Show.findById(savedShow._id).populate('movie').populate('theatre')
        const getMovie = await Movie.findById(newShow.movie_id)
        const getTheatre = await Theatre.findById(newShow.theatre_id)
        getMovie.movie_id = getMovie._id
        delete getMovie._id
        getTheatre.theatre_id = getTheatre._id
        delete getTheatre._id
        const data = {
            "movie" : getMovie,
            "theatre" : getTheatre,
            "shows" : [
                {
                    "date" : savedShow.date,
                    "time" : savedShow.time
                }
            ]
        }
        return res.send(data)    
    } catch (error) {
        res.status(400).send({status : 'failure', reason : "failed to create show" })
    }
    
    
})



module.exports = router;