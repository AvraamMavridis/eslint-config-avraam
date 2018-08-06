# eslint-config-avraam

[![Greenkeeper badge](https://badges.greenkeeper.io/AvraamMavridis/eslint-config-avraam.svg)](https://greenkeeper.io/)

## To install

1. Install shared config `npm install --save-dev eslint-config-avraam`.
2. Install peerDependencies

```bash
(
  export PKG=eslint-config-avraam;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

1. Create a `.eslintrc.js` file and make sure that it contains the following:

```bash
module.exports = {
  "extends": "avraam",
  "rules": {
    "require-jsdoc": "warn"
  }
}
```
