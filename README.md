# eslint-config-stylelint

[![NPM version](https://img.shields.io/npm/v/eslint-config-stylelint.svg)](https://www.npmjs.org/package/eslint-config-stylelint)
[![Build Status](https://github.com/stylelint/eslint-config-stylelint/workflows/CI/badge.svg)](https://github.com/stylelint/eslint-config-stylelint/actions)

> Stylelint org's shareable config for ESLint.

For consistent JavaScript across Stylelint's repos.

## Installation

```console
$ npm install eslint-config-stylelint --save-dev
```

## Usage

Add this to your ESLint config:

```json
{
  "extends": ["stylelint"]
}
```

### For Jest

Install the plugin additionally:

```console
$ npm install eslint-plugin-jest --save-dev
```

Then, update your config:

```diff json
{
-  "extends": ["stylelint"]
+  "extends": ["stylelint", "stylelint/jest"]
}
```

## [Changelog](CHANGELOG.md)
