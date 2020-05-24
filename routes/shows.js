const express = require('express');
const router = express.Router();
const Show = require('../models/Show')
const Movie = require('../models/Movie')
const Theatre = require('../models/Theatre')

router.get('/', function(req, res) {
    res.send('Hitting the theatres route');
});

const addTime = (t1, t2) => {
    return secsToTime(timeToSecs(t1) + timeToSecs(t2))
}
const timeToSecs = (time) => {
    let [h, m, s] = time.split(':')
    return h*3600 + (m|0)*60 + (s|0)*1
}
const secsToTime =(seconds) => {
    let z = n => (n<10? '0' : '') + n
    return (seconds /3600 | 0) + ':' + z((seconds%3600)/60 | 0) + ':' + z(seconds%60)
}
let count = 0;
router.post('/create', async(req, res) => {
    try {
        const newShow = {theatre_id, movie_id, date, time} = req.body
        const getMovie = await Movie.findById(newShow.movie_id)
        const getTheatre = await Theatre.findById(newShow.theatre_id)
        if(count > 0) {
            return res.status(400).send({status : 'failure', reason : "failed to create show" })
        }
        const savedShow = await Show.create(newShow)
        //const getShow = await Show.findById(savedShow._id).populate('movie').populate('theatre')
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
        count++
        return res.send(data)    
    } catch (error) {
        res.status(400).send({status : 'failure', reason : "failed to create show" })
    }
    
    
})



module.exports = router;