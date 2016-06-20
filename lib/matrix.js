const pick = require('101/pick');
const parseTransform = require('svg-transform-parser').parse;
const TransformMatrixBase = require('transformation-matrix-js').Matrix;


class TransformMatrix extends TransformMatrixBase {

  static deserialize(transformString) {
    let matrix = new TransformMatrix();
    let parsed = parseTransform(transformString);

    if ('matrix' in parsed) {
      matrix = TransformMatrix.fromFlatObject(parsed.matrix);
    }

    if ('translate' in parsed) {
      matrix.translate(parsed.translate.tx || 0, parsed.translate.ty || 0);
    }

    return matrix;
  }

  static fromFlatObject(flatObject) {
    return new TransformMatrix().setTransform(
      flatObject.a,
      flatObject.b,
      flatObject.c,
      flatObject.d,
      flatObject.e,
      flatObject.f
    )
  }

  toFlatObject() {
    return pick(this, ['a', 'b', 'c', 'd', 'e', 'f']);
  }

  serialize() {
    return this.toCSS();
  }

  clone() {
    return TransformMatrix.fromFlatObject(this.toFlatObject());
  }

}

module.exports = TransformMatrix;
