export default class MovingRoute {
  constructor(points, cost) {
    this.points = points;
    this.cost = cost;
  }

  // pointsが引数の移動経路と同一かどうか
  isSameRoute(targetRoute) {
    let targetPoints = targetRoute.points;
    if (targetPoints.length !== this.points.length) {
      return false;
    }
    for (let i = 0; i < targetPoints.length; i++) {
      if (targetPoints[i].x !== this.points[i].x || targetPoints[i].y !== this.points[i].y) {
        return false;
      }
    }
    return true;
  }

  // 座標とその座標に辿り着くまでのルートからMovingRouteオブジェクトを生成する
  static createFromRoute(beforeRoute, point, cost) {
    let points = beforeRoute.points.slice();
    points.push(point);
    return new MovingRoute(points, beforeRoute.cost+cost);
  }
}
