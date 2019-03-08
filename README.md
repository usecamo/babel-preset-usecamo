# babel-preset-usecamo

[![npm version](https://img.shields.io/npm/v/babel-preset-usecamo.svg)](https://npmjs.com/package/babel-preset-usecamo)
[![travis-ci build status](https://travis-ci.com/usecamo/babel-preset-usecamo.svg?branch=master)](https://travis-ci.com/usecamo/babel-preset-usecamo)
[![appveyor build status](https://ci.appveyor.com/api/projects/status/cdx50479rfjuenpv/branch/master?svg=true)](https://ci.appveyor.com/project/jasonnam/babel-preset-usecamo/branch/master)

Babel shareable preset by Camo.

## Installation

### install-peerdeps

Install with [`install-peerdeps`](https://npmjs.com/package/install-peerdeps):

```sh
npx install-peerdeps --dev babel-preset-usecamo
```

### npm

Install with npm:

```sh
npm install --save-dev babel-preset-usecamo
```

Next, install the correct versions of each package, which are listed by the command:

```sh
npm info "babel-preset-usecamo@latest" peerDependencies
```

## Usage

### Config Files

```javascript
'use strict';

module.exports = {
  presets: [
    'usecamo'
  ]
};
```

### CLI

```sh
babel script.js --presets usecamo
```

## License

babel-preset-usecamo is released under the MIT license. [See LICENSE](https://github.com/usecamo/babel-preset-usecamo/blob/master/LICENSE) for details.
