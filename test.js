var parser = require('./lib');

parser.default.parseDirectory(`${__dirname}/test/fixtures/vietnameseDialog`, (err, result) => {
    console.log('Result:', err, JSON.stringify(result))
  });
