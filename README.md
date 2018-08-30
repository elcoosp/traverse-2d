<p align="center">
  <img src="https://i.imgur.com/h2tkxgj.png"/>
</p>

# Traverse-2d

[![Node version](https://img.shields.io/node/v/traverse-2d.svg?style=flat)](http://nodejs.org/download/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/elcoosp/traverse-2d/issues)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Known Vulnerabilities](https://snyk.io/test/github/elcoosp/traverse-2d/badge.svg)](https://snyk.io/test/github/elcoosp/traverse-2d)

Higher order generators for 2D arrays traversing

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

‼️ **Not currently on npm**
`npm i -S traverse-2d`

## Usage

This library provide a Traverser function which return an object with 4 methods to traverse a matrix :

- `fromTopLeft`
- `fromTopRight`
- `fromBottomLeft`
- `fromBottomRight`

They all take a matrix and return a generator

```javascript
import Traverser from "traverser-2d"

const matrix = [[0, 1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Take a yielder function called on each move,
// a column and row predicate to check if not out of bounds
// default function are provided for all arguments
const T = Traverser()
const traversed = [...T.fromTopLeft(matrix)] // return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Support

Please [open an issue](https://github.com/elcoosp/traverse-2d/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/elcoosp/traverse-2d/compare/).
