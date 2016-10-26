This parses an incoming string and outputs an array denoting whether each character of the string is an emoji or not.

```
const emojiTree = require('emoji-tree');
emojiTree('Poo: 💩');

// outputs
[ { text: 'P', type: 'text' },
  { text: 'o', type: 'text' },
  { text: 'o', type: 'text' },
  { text: ':', type: 'text' },
  { text: ' ', type: 'text' },
  { text: '💩', type: 'emoji' } ]
```

Supports flags, skin colors, and other tricky emoji bits.

## Installing

```
npm install emoji-tree
```

