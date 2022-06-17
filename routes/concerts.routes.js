const express = require('express');
const randGen = require('@dave8git/randomid-generator');
const router = express.Router();
const db = require('./../db');

router.route('/concerts').get((req, res) => {
    res.json(db.concerts);
}); 
router.route('/concerts/:id').get((req, res) => {
    res.json(db.concerts.find(el => el.id == req.params.id));
});
router.route('/testimonials').post((req, res) => {
    const answer = { id: randGen(), performer: req.body.performer, genre: req.body.genre, price: req.body.price, day: req.body.day, image: req.body.image };
    console.log(answer);
    db.testimonials.push(answer);
    res.json({ message: 'OK' });
});
router.route('/concerts/:id').delete((req, res) => {
    db.concerts = db.concerts.filter(el => el.id != req.params.id);
    res.send({ message: 'OK' });
});
router.route('/concerts/:id').put((req, res) => {

    const existingElementConcerts = db.concerts.find(el => el.id == req.params.id);
    db.concerts = db.concerts.map(el => {
        if(el.id == req.params.id) {
            el.author = req.body.author; 
            el.text = req.body.text;
        }
        return el;
    });
    res.send({message: 'OK'});
});

module.exports = router;