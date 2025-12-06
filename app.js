const express = require('express');
const cors = require('cors');
const app = express();


const quotesRouter = require('./routes/quotes');

app.use(cors());
app.use(express.static('public'));

app.use("/api/quotes", quotesRouter);

// export app for use in main.js and for testing
module.exports = {
  app
};

