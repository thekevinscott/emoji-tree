'use strict';
require('chai').should();
const EmojiData = require('emoji-data');
const emojiTree = require('../index');

describe('Parsing emoji', function() {
  it('should match a poo', function() {
    const text = '💩';
    emojiTree(text).should.deep.equal([
      {
        text: text,
        type: 'emoji',
      },
    ]);

  });

  it('should parse text', function() {
    const text = 'abc';
    emojiTree(text).should.deep.equal([
      {
        text: 'a',
        type: 'text',
      },
      {
        text: 'b',
        type: 'text',
      },
      {
        text: 'c',
        type: 'text',
      },
    ]);
  });

  it('should parse text', function() {
    const text = 'abc💩';
    emojiTree(text).should.deep.equal([
      {
        text: 'a',
        type: 'text',
      },
      {
        text: 'b',
        type: 'text',
      },
      {
        text: 'c',
        type: 'text',
      },
      {
        text: '💩',
        type: 'emoji',
      },
    ]);
  });

  it('should match two poos', function() {
    const text = '💩💩';
    emojiTree(text).should.deep.equal([
      {
        text: '💩',
        type: 'emoji',
      },
      {
        text: '💩',
        type: 'emoji',
      },
    ]);

  });

  describe('Valid emoji', function() {
    // this is a list of phrases known to give trouble
    const troublePhrases = [
      '💩',

      // good hourglass
      '⌛',
      // bad hourglass,
      '⌛️',

      '⏳',
      '⌛️',
      '🇨🇳',
      '🀄',

      '©',
      '®',
      '8️⃣',
      '🗣',
      '🌮',
      '🌯',
      '🌈',

      '🕵️🏽‍♀️',
      '🥗', // salad
    ];

    troublePhrases.map(function(emoji) {
      it('should check phrase: '+emoji, function() {
        const text = emoji;
        emojiTree(text).should.deep.equal([
          {
            text: text,
            type: 'emoji',
          },
        ]);

      });
    });

    describe('All Emojis', function() {
      const allEmoji = EmojiData.all().concat(EmojiData.all_with_variants());
      allEmoji.map(function(emoji) {
        const unified = EmojiData.unified_to_char(emoji.unified);
        //console.log(unified);
        it('should check phrase: '+unified, function() {
          emojiTree(unified).should.deep.equal([
            {
              text: unified,
              type: 'emoji',
            },
          ]);
        });
      });
    });


  });

  describe('Skin color', function() {
    [
      '👍🏻',
      '👍🏼',
      '👍🏽',
      '👍🏾',
      '👍🏿',
    ].map(function(emoji) {
      it('should get 1 emoji for ' + emoji, function() {
        emojiTree(emoji).should.deep.equal([
          {
            text: emoji,
            type: 'emoji',
          },
        ]);
      });
    });
  });

  describe('Unicode 9', function() {
    const unicode9Emojis = [
      '🤣',
      '🤤',
      '🤦',
      '🦍',
      '👩‍🎨',
      '👩‍🚒',
      '👨‍⚖️',
    ];

    unicode9Emojis.map(function(emoji) {
      it('should get 1 emoji for ' + emoji, function() {
        emojiTree(emoji).should.deep.equal([
          {
            text: emoji,
            type: 'emoji',
          },
        ]);
      });
    });
  });
});
