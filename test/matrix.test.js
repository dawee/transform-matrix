import chai from 'chai';
import pick from '101/pick';
import Matrix from '../lib/matrix';

const assert = chai.assert;

describe('Matrix', () => {
  describe('deserialize', () => {
    it('should parse matrix string', function () {
      assert.deepEqual(
        {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0},
        Matrix
          .deserialize('matrix(1,0,0,1,0,0)')
          .toFlatObject()
      );
    });

    it('should parse translate string', function () {
      assert.deepEqual(
        {a: 1, b: 0, c: 0, d: 1, e: 10, f: 100},
        Matrix
          .deserialize('translate(10,100)')
          .toFlatObject()
      );
    });
  });

  describe('serialize', () => {
    
    it('should serialize the basic matrix', () => {
      assert.equal(
        'matrix(1,0,0,1,0,0)',
        new Matrix().serialize()
      );
    });
  });

  describe('clone', () => {
    
    it('should keep type', () => {
      let matrix = new Matrix();

      matrix.translate(100, 100);

      assert.equal(
        matrix.serialize(),
        matrix.clone().serialize()
      );
    });
  });

});