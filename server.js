const express = require('express');
const path = require('path');
const cors = require('cors');
const randGen = require('@dave8git/randomid-generator');
let db = require('./db');
const { redirect } = require('express/lib/response');
const app = express();

//console.log(db.testimonials);
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

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
console.log(db.concerts);
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
app.put('/testimonials/:id', (req, res) => {

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
app.use((req, res) => {
    res.status(404).send('404 not found...');
});
app.listen(5000, () => {
    console.log('Server is runing on port: 5000');
});




