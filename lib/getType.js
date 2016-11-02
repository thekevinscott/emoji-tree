const isEmoji = require('./isEmoji');
const TYPES = {
  EMOJI: 'emoji',
  TEXT: 'text',
};

module.exports = function getType(str) {
  //console.log('str', str, isEmoji(str));
  if (isEmoji(str)) {
    return TYPES.EMOJI;
  }

  return TYPES.TEXT;
};
