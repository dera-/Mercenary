import assert from 'power-assert';
import Point from '../../../src/model/util/Point.js';

describe('Pointクラス', () => {
  var point = null;
  beforeEach(done => {
    point = new Point(3, 5);
    done();
  });
  describe('moveメソッド', () => {
    it('座標が移動する', () => {
      let expected = new Point(5, 4);
      point.move(2, -1);
      assert(point.x === expected.x);
      assert(point.y === expected.y);
    });
  });
});