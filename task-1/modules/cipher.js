const { ENCRYPTION, ALPHABET } = require('../constants');

/**
 * Get next index for char
 *
 * @param {number} index
 * @param {number} shift
 *
 * @return {number}
 */
const getNextIndex = (index, shift) => {
  let result = (index + shift) % ALPHABET.length;

  return (result < 0 && (result += ALPHABET.length)) || result;
};

/**
 * Cipher function
 *
 * @param {string} text
 * @param {number} shift
 *
 * @return {string}
 */
module.exports = (text = ENCRYPTION, shift) =>
  text
    .split('')
    .map(char => {
      const lowerCaseChar = char.toLowerCase();
      const index = ALPHABET.indexOf(lowerCaseChar);

      if (index < 0) {
        return char;
      }

      const nextChar = ALPHABET[getNextIndex(index, shift)];

      return lowerCaseChar === char ? nextChar : nextChar.toUpperCase();
    })
    .join('');
