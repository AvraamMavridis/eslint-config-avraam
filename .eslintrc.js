module.exports = {
  "extends": "airbnb-base",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    }
  },

  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest": true,
    "jasmine": true
  },

  "rules": {
    "comma-dangle": 0,
    "indent": ["error", 2, { "SwitchCase": 2 }],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "ignore",
      "asyncArrow": "ignore"
    }],
    "arrow-body-style": 0,
    "array-bracket-spacing": ["error", "always"],
    "space-before-blocks": ["error", "always"],
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "object-curly-spacing": ["error", "always"],
    "one-var-declaration-per-line": 0,
    "one-var": 0,
    "no-unused-expressions": 0,
    "no-trailing-spaces": "error",
    "no-case-declarations": 0,
    "arrow-parens": 0,
    "import/no-named-as-default": 0,
    "no-const-assign": "error",
    "no-this-before-super": "error",
    "no-undef": "error",
    "no-unreachable": "warn",
    "no-unused-vars": "error",
    "constructor-super": "warn",
    "valid-typeof": "warn",
    "no-nested-ternary": 0,
    "prefer-spread": 0,
    "template-curly-spacing": [2, "always"]
  }
};
