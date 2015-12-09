# babel-plugin-be-polite-dstaley

Please be polite dstaley.

## Installation

```sh
$ npm install babel-plugin-be-polite-dstaley
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["be-polite-dstaley"]
}
```

### Via CLI

```sh
$ babel --plugins be-polite-dstaley script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: [require("babel-plugin-be-polite-dstaley")]
});
```
