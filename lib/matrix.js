import pick from '101/pick';
import {parse as parseTransform} from 'svg-transform-parser';
import {Matrix as TransformMatrixBase} from 'transformation-matrix-js';


export default class TransformMatrix extends TransformMatrixBase {

  static deserialize(transformString) {
    let matrix = new TransformMatrix();
    let parsed = parseTransform(transformString);

    if ('matrix' in parsed) {
      matrix = TransformMatrix.fromFlatObject(parsed.matrix);
    }

    if ('translate' in parsed) {
      matrix.translate(parsed.translate.tx, parsed.translate.ty);
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

}
