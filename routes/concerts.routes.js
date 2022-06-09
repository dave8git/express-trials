const express = require('express');
const router = express.Router();
const db = require('./../db');

app.get('/concerts', (req, res) => {
    res.json(db.concerts);
}); 
app.get('/concerts/:id', (req, res) => {
    res.json(db.concerts.find(el => el.id == req.params.id));
});
app.post('/testimonials', (req, res) => {
    const answer = { id: randGen(), performer: req.body.performer, genre: req.body.genre, price: req.body.price, day: req.body.day, image: req.body.image };
    console.log(answer);
    db.testimonials.push(answer);
    res.json({ message: 'OK' });
});
app.delete('/concerts/:id', (req, res) => {
    db.concerts = db.concerts.filter(el => el.id != req.params.id);
    res.send({ message: 'OK' });
});
app.put('/concerts/:id', (req, res) => {

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