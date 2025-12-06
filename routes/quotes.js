const express = require("express");
const quotesRouter = express.Router();

const { quotes } = require('../data');
const { getRandomElement, validateQuote } = require('../utils');

quotesRouter.get("/random", (req, res) => {
    const randomQuote = getRandomElement(quotes);
    res.json({
        quote: randomQuote
    });
});

quotesRouter.get("/", (req, res) => {
    const person = req.query.person;
    if (!person) {
        return res.json({
            quotes
        });
        ;
    }
    //Get quote by person
    const foundQuotes = quotes.filter(q => q.person.toLowerCase() === person.toLowerCase());
    return res.json({
        quotes: foundQuotes
    });
});

quotesRouter.post("/", (req, res) => {
    const quoteToCreate = req.query;

    if (validateQuote(quoteToCreate)) {
        quotes.push(quoteToCreate);
        res.send({
            quote: quoteToCreate
        });
    } else {
        res.status(400).send();
    }
});

quotesRouter.get("/random", (req, res) => {

});

module.exports = quotesRouter;