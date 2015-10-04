import assert from 'power-assert';
import Point from '../../src/util/Point.js';

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
  describe('isSamePointメソッド', () => {
    it('同じ座標の場合trueを返す', () => {
      let samePoint = new Point(3, 5);
      assert(point.isSamePoint(samePoint) === true);
    });
    it('同じ座標でない場合falseを返す', () => {
      let anotherPoint = new Point(5, 4);
      assert(point.isSamePoint(anotherPoint) === false);
    });
  });
});