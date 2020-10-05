const fs = require('fs');
const { pipeline } = require('stream');
const {
  errorHandler,
  checkArguments,
  successMsg
} = require('../helpers/utils');
const { input, output } = require('../helpers/arguments');
const { transformer } = require('./transformer');

/**
 * Start the app
 */
module.exports = () => {
  checkArguments();

  let source;
  let target;

  if (input) {
    source = fs.createReadStream(input);
  } else {
    source = process.stdin;
  }

  if (output) {
    target = fs.createWriteStream(output, { flags: 'a' });
  } else {
    target = process.stdout;
  }

  pipeline(source, transformer, target, err => errorHandler(err, successMsg()));
};
