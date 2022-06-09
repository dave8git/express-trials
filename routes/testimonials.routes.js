const express = require('express');
const router = express.Router();
const db = require('./../db');

app.get('/testimonials', (req, res) => {
    res.json(db.testimonials);
});

app.get('/testimonials/random', (req, res) => {
    const index = Math.floor(Math.random() * (db.length));
    console.log(index);
    res.json(db.testimonials[index]);
});

app.get('/testimonials/:id', (req, res) => {
    res.json(db.testimonials.find(el => el.id == req.params.id));
});

app.post('/testimonials', (req, res) => {
    const answer = { id: randGen(), author: req.body.author, text: req.body.text };
    console.log(answer);
    testimonials.push(answer);
    res.json({ message: 'OK' });
});

app.put('/testimonials/:id', (req, res) => {

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

app.delete('/testimonials/:id', (req, res) => {
    db.testimonials = db.testimonials.filter(el => el.id != req.params.id);
    res.send({ message: 'OK' });
});

module.exports = router;