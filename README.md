# TransformMatrix

ES6 Matrix for transform attribute manipulation

## Install

```js
npm install transform-matrix
```

## Usage

As it's an implementation of the [2D Affine Transformation Matrix](https://github.com/epistemex/transformation-matrix-js). Most of usage [can be read here](https://github.com/epistemex/transformation-matrix-js/blob/master/readme.md).

### deserialize / serialize

```js
import Matrix from 'transform-matrix';

let matrix = Matrix.deserialize('matrix(1,0,0,1,0,0)');

matrix = matrix.translate(88, 99);

console.log(matrix.serialize()); // matrix(1,0,0,1,88,99)
```
