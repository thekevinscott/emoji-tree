const toArray = require('lodash/toArray');
const getType = require('./getType');

module.exports = function parse(str) {
  return toArray(str).map(text => {
    return {
      text,
      type: getType(text),
    };
  });
};
