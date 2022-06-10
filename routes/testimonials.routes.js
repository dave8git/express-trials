const express = require('express');
const router = express.Router();
const db = require('./../db');

router.route('/testimonials').get((req, res) => {
    res.json(db.testimonials);
});

router.route('/testimonials/random').get((req, res) => {
    const index = Math.floor(Math.random() * (db.length));
    console.log(index);
    res.json(db.testimonials[index]);
});

router.route('/testimonials/:id').get((req, res) => {
    res.json(db.testimonials.find(el => el.id == req.params.id));
});

router.route('/testimonials').post((req, res) => {
    const answer = { id: randGen(), author: req.body.author, text: req.body.text };
    console.log(answer);
    testimonials.push(answer);
    res.json({ message: 'OK' });
});

router.route('/testimonials/:id').put((req, res) => {

    const existingElement = db.testimonials.find(el => el.id == req.params.id);
    db.testimonials = db.testimonials.map(el => {
        if(el.id == req.params.id) {
            el.author = req.body.author; 
            el.text = req.body.text;
        }
        return el;
    });
    res.send({message: 'OK'});
});

router.route('/testimonials/:id').delete((req, res) => {
    db.testimonials = db.testimonials.filter(el => el.id != req.params.id);
    res.send({ message: 'OK' });
});

module.exports = router;