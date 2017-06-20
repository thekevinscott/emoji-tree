const toArray = require('lodash/toArray');
const getType = require('./getType');

module.exports = function parse(str) {
  return toArray(str).map(function(text) {
    return {
      text: text,
      type: getType(text),
    };
  });
};
