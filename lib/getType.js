const isEmoji = require('./isEmoji');
const TYPES = {
  EMOJI: 'emoji',
  TEXT: 'text',
};

module.exports = function getType(str) {
  if (isEmoji(str)) {
    return TYPES.EMOJI;
  }

  return TYPES.TEXT;
};
