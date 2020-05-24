const express = require('express');
const router = express.Router();
const Theatre = require('../models/Theatre')

router.get('/', async (req, res) =>  {
    const data = await Theatre.find()
    res.send(data);
});

router.post('/create', async(req, res) => {
    try {
        const newTheatre = {
            theatre_name,
            theatre_location, 
            city,
            pincode
        } = req.body
        const savedTheatre = await Theatre.create(newTheatre)
        return res.json({
            theatre_id : savedTheatre._id,
            theatre_name : savedTheatre.theatre_name, 
            theatre_location : savedTheatre.theatre_location,
            city : savedTheatre.city,
            pincode : savedTheatre.pincode
        })
    } catch (error) {
        res.status(400).send({status : "failure", reason : "Some reason"})
    }
})

module.exports = router;