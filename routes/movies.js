const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

router.get('/', async(req, res) =>  {
    const data = await Movie.find()
    res.send(data);
});

router.post('/create', async (req, res) => {
    try {
        const newMovie = {
            movie_name, 
            movie_trailer,
            movie_overview,
            movie_poster,
            length} = req.body;
        const savedMovie = await Movie.create(newMovie)
        return res.json({
            movie_id : savedMovie._id,
            movie_name : savedMovie.movie_name, 
            movie_trailer : savedMovie.movie_trailer,
            movie_overview : savedMovie.movie_overview,
            movie_poster : savedMovie.movie_poster,
            length : savedMovie.length})
    } catch (error) {
        return res.status(400).send({status : 'failure', reason : "movie_name should be unique" })
    }
   
})

module.exports = router;