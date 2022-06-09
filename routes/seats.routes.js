const express = require('express');
const router = express.Router();
const db = require('./../db');

app.get('/seats', (req, res) => {
    res.json(db.seats);
});
app.get('/seats/:id', (req, res) => {
    res.json(db.seats.find(el => el.id == req.params.id));
});
app.post('/seats', (req, res) => {
    const answer = { id: randGen(), day: req.body.day, seat: req.body.seat, client: req.body.client, email: req.body.email };
    console.log(answer);
    seats.push(answer);
    res.json({ message: 'OK' });
});
app.delete('/seats/:id', (req, res) => {
    db.seats = db.seats.filter(el => el.id != req.params.id);
    res.send({ message: 'OK' });
});
app.put('/seats/:id', (req, res) => {

    const existingElementSeats = db.seats.find(el => el.id == req.params.id);
    db.seats = db.seats.map(el => {
        if(el.id == req.params.id) {
            el.author = req.body.author; 
            el.text = req.body.text;
        }
        return el;
    });
    res.send({message: 'OK'});
});

module.exports = router;