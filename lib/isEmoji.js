const emojiRegex = require('./emojiRegex');
module.exports = function isEmoji(str) {
  return emojiRegex.test(str);
};
