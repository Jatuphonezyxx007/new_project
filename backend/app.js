const express = require('express');
const Quote = require('inspiration-quotes');

const app = express();

app.get('/', (req, res) => {
    res.send(Quote.getQuote());
})

app.listen(5000, () => {
    console.log('Server Started successfully');
})