const stream = require('stream');
const { action, shift: prevShift } = require('../helpers/arguments');
const cipher = require('./cipher.js');

/**
 * Transform function
 *
 * @param {Object} chunk
 * @param {string} encoding
 * @param {Function} fn
 */
function transform(chunk, encoding, fn) {
  const shift = action !== 'encode' ? -prevShift : +prevShift;

  try {
    fn(null, cipher(chunk.toString(), shift));
  } catch (err) {
    fn(err);
  }
}

const transformer = new stream.Transform({ objectMode: true });

transformer._transform = transform;

module.exports = { transformer };
