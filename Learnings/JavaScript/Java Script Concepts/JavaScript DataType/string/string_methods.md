# string methods


```javascript
"cat".charAt(1); // gives value "a"

"cat"[1]; // gives value "a"


"😄".split(""); // ['\ud83d', '\ude04']; splits into two lone surrogates

// "Backhand Index Pointing Right: Dark Skin Tone"
[..."👉🏿"]; // ['👉', '🏿']
// splits into the basic "Backhand Index Pointing Right" emoji and
// the "Dark skin tone" emoji

// "Family: Man, Boy"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// splits into the "Man" and "Boy" emoji, joined by a ZWJ

// The United Nations flag
[..."🇺🇳"]; // [ '🇺', '🇳' ]
// splits into two "region indicator" letters "U" and "N".
// All flag emojis are formed by joining two region indicator letters


```


## Constructor

`String()`
- Creates String objects. When called as a function, it returns primitive values of type String.


## Static methods

`String.fromCharCode()`
- Returns a string created by using the specified sequence of Unicode values.


`String.fromCodePoint()`
- Returns a string created by using the specified sequence of code points.

`String.raw()`
- Returns a string created from a raw template string.


## Instance properties

`These properties are defined on String.prototype and shared by all String instances.`




`String.prototype.constructor`
- The constructor function that created the instance object. For String instances, the initial value is the String constructor.

- These properties are own properties of each String instance.

`length`
- Reflects the length of the string. Read-only.

Instance methods
`String.prototype.at()`
- Returns the character (exactly one UTF-16 code unit) at the specified index. Accepts negative integers, which count back from the last string character.

`String.prototype.charAt()`
- Returns the character (exactly one UTF-16 code unit) at the specified index.

`String.prototype.charCodeAt()`
- Returns a number that is the UTF-16 code unit value at the given index.

`String.prototype.codePointAt()`
- Returns a nonnegative integer Number that is the code point value of the UTF-16 encoded code point starting at the specified pos.

`String.prototype.concat()`
- Combines the text of two (or more) strings and returns a new string.

`String.prototype.endsWith()`
- Determines whether a string ends with the characters of the string searchString.

`String.prototype.includes()`
- Determines whether the calling string contains searchString.

`String.prototype.indexOf()`
- Returns the index within this string of the first occurrence of searchValue, or -1 if not found.

`String.prototype.isWellFormed()`
- Returns a boolean indicating whether this string contains any lone surrogates.

`String.prototype.lastIndexOf()`
- Returns the index within this string of the last occurrence of searchValue, or -1 if not found.

`String.prototype.localeCompare()`
- Returns a number indicating whether the reference string compareString comes before, after, or is equivalent to the given string in sort order.

`String.prototype.match()`
- Used to match regular expression regexp against a string.

`String.prototype.matchAll()`
- Returns an iterator of all regexp's matches.

`String.prototype.normalize()`
- Returns the Unicode Normalization Form of the calling string value.

`String.prototype.padEnd()`
- Pads the current string from the end with a given string and returns a new string of the length targetLength.

`String.prototype.padStart()`
- Pads the current string from the start with a given string and returns a new string of the length targetLength.

`String.prototype.repeat()`
- Returns a string consisting of the elements of the object repeated count times.

`String.prototype.replace()`
- Used to replace occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.

String.prototype.replaceAll()
- Used to replace all occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.

String.prototype.search()
- Search for a match between a regular expression regexp and the calling string.

`String.prototype.slice()`
- Extracts a section of a string and returns a new string.

`String.prototype.split()`
- Returns an array of strings populated by splitting the calling string at occurrences of the substring sep.

`String.prototype.startsWith()`
- Determines whether the calling string begins with the characters of string searchString.

`String.prototype.substr()` Deprecated
- Returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.

`String.prototype.substring()`
- Returns a new string containing characters of the calling string from (or between) the specified index (or indices).

`String.prototype.toLocaleLowerCase()`
- The characters within a string are converted to lowercase while respecting the current locale.

- For most languages, this will return the same as toLowerCase().

`String.prototype.toLocaleUpperCase()`
- The characters within a string are converted to uppercase while respecting the current locale.

- For most languages, this will return the same as toUpperCase().

`String.prototype.toLowerCase()`
- Returns the calling string value converted to lowercase.

`String.prototype.toString()`
- Returns a string representing the specified object. Overrides the Object.prototype.toString() method.

`String.prototype.toUpperCase()`
- Returns the calling string value converted to uppercase.

`String.prototype.toWellFormed()`
- Returns a string where all lone surrogates of this string are replaced with the Unicode replacement character U+FFFD.

`String.prototype.trim()`
- Trims whitespace from the beginning and end of the string.

`String.prototype.trimEnd()`
- Trims whitespace from the end of the string.

`String.prototype.trimStart()`
- Trims whitespace from the beginning of the string.

`String.prototype.valueOf()`
- Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.

`String.prototype[Symbol.iterator]()`
- Returns a new iterator object that iterates over the code points of a String value, returning each code point as a String value
