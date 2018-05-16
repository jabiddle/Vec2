# vec2

> A fast, simple, 2D vector class in Javascript

[![GitHub issues](https://img.shields.io/github/issues/jabiddle/vec2.svg)](https://github.com/jabiddle/vec2/issues)
[![GitHub license](https://img.shields.io/github/license/jabiddle/vec2.svg)](https://github.com/jabiddle/vec2/blob/master/LICENSE)

## Example usage

```javascript
// Vectors can be instantiated with "new Vec2()" 
let vector = new Vec2(5, 6);

// Or by copying an existing vector
let newVector = vector.copy();

// Chaining is supported for quickly modifying the vectors
newVector.shift(3, 2)
	 .scale(2)
	 .rotate(Math.PI);

// For operations between vectors, any object with x and y members can be passed in
vector.subtract(newVector);
```

## Docs

Docs can be generated with YUIdocs which can be installed via npm and run as follows.

```shell
npm install yuidocsjs
yuidoc .
```