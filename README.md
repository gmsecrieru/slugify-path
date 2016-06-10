# slugify-path
Slugify paths into cool permalinks, mostly for static site generation purposes. You can plug it in during Markdown -> HTML conversion to achieve friendly URLs for static contents.


## Install
`npm install --save slugify-path`

## Usage
`slugify-path` aims to convert a given file path into a friendly URL, making it possible to filter each _piece_ of this path with a given regular expression or string to compare. A _piece_ is delimited by a path separator which defaults to `/`.

Assuming you have `1.5 Getting Started with Javascript/Introduction/README.md` as the path you want to convert, but you want to get rid of that section numbers and that `.md` from your Markdown files:

```js
// ES2015
import slugifyPath from 'slugify-path';

const greatContentPath = '1.5 Getting Started with Javascript/Introduction/README.md';
const permalink = slugifyPath(greatContentPath, /^\S* |\.md$/);

console.log(permalink); // getting-started-with-javascript/introduction/readme

// ES5
var slugifyPath = require('slugify-path').default;

var greatContentPath = '1.5 Getting Started with Javascript/Introduction/README.md';
var permalink = slugifyPath(greatContentPath, /^\S* |\.md$/);

console.log(permalink); // getting-started-with-javascript/introduction/readme

```

You can also use a given string for replacement...

```js
console.log(slugifyPath(greatContentPath, 'README.md')) // 1-5-getting-started-with-javascript/introduction/
```

...or change the path delimiter to whatever works best for you

```js
console.log(slugifyPath('this|path|was oddly splitted|but it|Just works', null, '|')); // this|path|was-oddly-splitted|but-it|just-works
```


