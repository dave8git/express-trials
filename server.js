const express = require('express');
const path = require('path');
const cors = require('cors');
const randGen = require('@dave8git/randomid-generator');
let db = require('./db');
const { redirect } = require('express/lib/response');
const app = express();
const testimonials = require('./routes/testimonials.routes');
const concerts = require('./routes/concerts.routes');
const seats = require('./routes/seats.routes');

//console.log(db.testimonials);
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use('/api', testimonials);
app.use('/api', concerts);
app.use('/api', seats);

app.use((req, res) => {
    res.status(404).send('404 not found...');
});
app.listen(5000, () => {
    console.log('Server is runing on port: 5000');
});




