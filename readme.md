# Signoff
[_Signoff_](https://www.npmjs.com/package/signoff) will validate and ensure your email inputs are rigorously RFC compliant without the excess.

_________________________

## API
### signoff(`string`)
```js
var signoff = require('signoff');
```
_________________________
&nbsp;
## Notes
With a plethora of email validation utilities available it's remarkable how many fail to fully adhere to the relevant RFC specifications, neglect to accommodate valid formatting idiosyncrasies such as domain literals and quoted strings, are superfluously laden with excess code or suffer from all of these issues concurrently. [_Signoff_](https://www.npmjs.com/package/signoff) distinguishes itself by meticulously addressing these common pitfalls, testing entries against a series of rigorous criteria derived from all the pertaining RFC specifications and providing a robust solution. It tests the length and structure of the entry against _RFC 5321_ and _RFC 5322_, scrutinizes the handle in accordance with _RFC 5321_ accounting for quoted strings while adhering to RFC 5322, and inspects the domain through the lens of _RFC 1035_ in consideration for domain literals, honoring both IPv4 and IPv6 formats, following §4.1.2 of _RFC 5321_ and _RFC 4291_, respectively.


## Installation
With [npm](http://npmjs.org) do
```bash
$ npm install signoff
```

## License
(MIT)

Copyright (c) 2024 David H. &lt;email6@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.