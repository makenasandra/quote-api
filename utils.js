const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

function validateQuote(quoteObject) {
  const person = quoteObject.person;
  const quote = quoteObject.quote;
  if (!person) {
    return false;
  }
  if (!quote) {
    return false;
  }

  if (typeof(person) !== "string"|| person.length < 2) {
    return false;
  }

  if (typeof(quote) !== "string" || quote.length < 4) {
    return false;
  }

  return true;
}

module.exports = {
  getRandomElement,
  validateQuote
};
