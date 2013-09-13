# clean-whitespace
normalize whitepsace characters to \t \n and space

## usage
```js
var cleanWhitespace = require('clean-whitespace')

var clean = cleanWhitespace(gnarlyStringsUsersCopyAndPastedFromWord)

var options = {tab: '  '}
var spaces = cleanWhitespace('\t\t', options)
  // => '    '

```

Cleans and normalizes whitespace, handling line breaks, characters, whitespace, and invisible characters.

### Options
The second parameter is an options object with any of the following:

- **tab** : string, default '\t' - replacement for tab characters
- **tabSpace** : number - if specified, matches `tabSpace` repeated spaces as a tab character, eg:

    ```js
    cleanWhitespace('  hi', {tabSpace: 2}) // => '\thi'
    ```

- **space** : string, default ' ' - replacement for space characters
- **line** : string, default '\n' - replacement for linebreak characters
- **invisible** : string, default '' - replacement for invisible characters


## api

### `cleanWhitespace(String, options? : Object) => String`
Cleans extended whitespace characters from strings.

## installation

    $ npm install clean-whitespace


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license
MIT. (c) MMXIII AgileMD http://agilemd.com
