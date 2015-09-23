import assert from 'power-assert';
import Point from '../../../src/model/util/Point';
import MovingRoute from '../../../src/model/battle/MovingRoute';

describe( 'MovingRouteクラス', () => {
  let movingRoute = new MovingRoute([new Point(2,1), new Point(3,1), new Point(3,2)], 3);
  describe('isSameRouteメソッド', () => {
    it('全く同じ場合', () => {
      let target = new MovingRoute([new Point(2,1), new Point(3,1), new Point(3,2)], 10);
      assert(movingRoute.isSameRoute(target) === true);
    });
    it('部分的に経路が同じだが長さが異なる場合', () => {
      let target = new MovingRoute([new Point(2,1), new Point(3,1), new Point(3,2), new Point(3,3)], 10);
      assert(movingRoute.isSameRoute(target) === false);
    });
    it('長さが同じだが経路が異なる場合', () => {
      let target = new MovingRoute([new Point(3,2), new Point(3,1), new Point(2,1)], 3);
      assert(movingRoute.isSameRoute(target) === false);
    });
  });

  describe('getReachPlaceメソッド', () => {
    it('要素数が１以上の時はPoint配列の一番後ろの要素を返す', () => {
      let route = new MovingRoute([new Point(2,1), new Point(3,1), new Point(3,2)], 10),
        reachPlace = route.getReachPlace();
      assert(reachPlace.x === 3);
      assert(reachPlace.y === 2);
    });
    it('要素数が0の時はnullを返す', () => {
      let route = new MovingRoute([], 10),
        reachPlace = route.getReachPlace();
      assert(reachPlace === null);
    });
  });

  describe('createFromRouteメソッド(クラスメソッド)', () => {
    it('MovingRouteオブジェクトが生成できる', ()=>{
      let newMovingRoute = MovingRoute.createFromRoute(movingRoute, new Point(4,2), 1.2),
        expected = new MovingRoute([new Point(2,1), new Point(3,1), new Point(3,2), new Point(4,2)], 4.2),
        movingRouteClone = new MovingRoute([new Point(2,1), new Point(3,1), new Point(3,2)], 3);
      assert(newMovingRoute.cost === expected.cost);
      assert(newMovingRoute.isSameRoute(expected) === true);
      assert(movingRoute.cost === movingRouteClone.cost);
      assert(movingRoute.isSameRoute(movingRouteClone) === true);
    });
  });
});