const fs = require('fs');
const path = require('path');
const {
  NO_ACTION,
  WRONG_SHIFT,
  NO_SHIFT,
  WRONG_ACTION
} = require('../messages');
const { shift, action, input, output } = require('../helpers/arguments');

/**
 * Error handler
 *
 * @param {Error} error
 * @param {string} successMsg
 *
 * @return {undefined}
 */
const errorHandler = (error, successMsg = '') => {
  if (error) {
    process.stderr.write(`${error.message}\n`);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  } else if (successMsg) {
    console.log(successMsg);
  }
};

/**
 * Get success message
 *
 * @return {string}
 */
const successMsg = () => `Great job! Your ${action}d file is here:\n
 ${path.resolve(output)}`;

/**
 * Check the arguments
 *
 * @return {undefined}
 */
const checkArguments = () => {
  if (!action) {
    errorHandler(new Error(NO_ACTION));
  }

  if (!shift) {
    errorHandler(new Error(NO_SHIFT));
  }

  if (typeof shift !== 'number') {
    errorHandler(new Error(WRONG_SHIFT));
  }

  if (action !== 'encode' && action !== 'decode') {
    errorHandler(new Error(WRONG_ACTION));
  }

  if (input) {
    fs.access(input, fs.constants.R_OK, errorHandler);
  }

  if (output) {
    fs.access(output, fs.constants.W_OK, errorHandler);
  }
};

module.exports = {
  checkArguments,
  errorHandler,
  successMsg
};
