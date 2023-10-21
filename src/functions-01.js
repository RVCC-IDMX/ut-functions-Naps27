/* eslint-disable no-unused-vars */
/*
 * functions-01.js
 * Language: javascript
 * Test: tests/functions-01.test.js
 * Path: src/functions-01.js
 *
 *
 */

/**
 * accepts a string of a person's first and last names and
 * returns a string with "lastname, firstname"
 * @param {string} str - the string with first and last names
 * @returns {string} - the string as last name, first name
 * example: "John Smith" returns "Smith, John"
 * example: 'Buzz Lightyear' returns 'Lightyear, Buzz'
 */
function nameShuffle(str) {
  const nameArray = str.split(' ');

  if (nameArray.length >= 2) {
    const lastName = nameArray.pop();
    const firstName = nameArray.join(' ');
    const shuffledName = `${lastName}, ${firstName}`;
    return shuffledName;
  }
}

/**
 * returns true if a pair of strings is a "strange pair",
 * and false otherwise.
 * @param {string} str1 - the first string to compare
 * @param {string} str2 - the second string to compare
 * @returns {boolean}
 * A strange pair is when the first letter of one string is
 * the last letter of the other string
 *
 * example: 'ratio', 'orator' returns true
 * example: 'cupid', 'dionysus' returns false
 * example: 'yahtzee', 'easy' returns true
 * example: '&', '&' returns true
 */
function isStrangePair(str1, str2) {
  if (
    str1.charAt(0) === str2.charAt(str2.length - 1)
    && str2.charAt(0) === str1.charAt(str1.length - 1)
  ) {
    return true;
  }
  return false;
}

/**
   * Returns the number from a string with a % sign at the end
   * @param {string} percent - string with an ending % character
   * @returns {number} - the number of the percent
   * example: '10%' returns 0.1
   * example: '100%' returns 1
   * example: '98.6%' returns 0.986
   */
function convertToDecimal(percent) {
  const number = parseFloat(percent.replace('%', ''));
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(number)) {
    return number / 100;
  }
}

/**
   * Returns true if two arrays sum up to the same number
   * @param {array} a1 - first array of numbers to compare
   * @param {array} a2 - second array of numbers to compare
   * @returns {boolean}
   * example: [1, 2, 3, 4], [4, 3, 2, 1] returns true
   * example: [0, 0, 0, 0, 0], [1, 1, 1, 1] returns false
   * example: [1, 2, 3, 4], [4, 3, 2, 1, 5] returns false
   */
function checkSameSum(a1, a2) {
  const sumA1 = a1.reduce((acc, val) => acc + val, 0);
  const sumA2 = a2.reduce((acc, val) => acc + val, 0);
  return sumA1 === sumA2;
}

/**
   * Saves the username for later use
   * @param {string} name - a username
   * @returns {function} - a function that returns the username
   * example: saveUsername('John') returns a function that returns 'John'
   * must use a closure to save the username
   */
function saveLogin(name) {
  function getUsername() {
    return name;
  }
  return getUsername;
}

module.exports = {
  nameShuffle,
  isStrangePair,
  convertToDecimal,
  checkSameSum,
  saveLogin,
};
