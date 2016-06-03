import pick from '101/pick';
import {parse as parseTransform} from 'svg-transform-parser';
import {Matrix as TransformMatrixBase} from 'transformation-matrix-js';


class TransformMatrix extends TransformMatrixBase {

  static deserialize(transformString) {
    let matrix = new TransformMatrix();
    let parsed = parseTransform(transformString);

    if ('matrix' in parsed) {
      matrix = matrix.setTransform(
        parsed.matrix.a, parsed.matrix.b, parsed.matrix.c,
        parsed.matrix.d, parsed.matrix.e, parsed.matrix.f
      );
    }

    if ('translate' in parsed) {
      matrix.translate(parsed.translate.tx, parsed.translate.ty);
    }

    return matrix;
  }

  serialize() {
    return this.toCSS();
  }

}
