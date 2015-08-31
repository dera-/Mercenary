import Point from '../model/util/Point';
import MovingRoute from '../model/battle/MovingRoute';

const NEXT_PLACES = [new Point(-1, 0), new Point(1, 0), new Point(0, -1), new Point(0, 1)];

export default class CharacterMovingService {

  static getMovableRoutes(map, mapCharacters, movingCharacter) {
    let routes = [],
      queue = this.getNextRoutes(
        new MovingRoute([movingCharacter.place], 0),
        map,
        mapCharacters,
        movingCharacter
      );
    while (queue.length > 0) {
      let nextRoute = queue.shift();
      if (routes.some(route => nextRoute.isSameRoute(route))) {
        continue;
      }
      routes.push(nextRoute);
      queue.push(...getNextRoutes(nextRoute, map, mapCharacters, movingCharacter));
    }
    return routes;
  }

  static getNextRoutes(beforeRoute, map, mapCharacters, movingCharacter) {
    return NEXT_PLACES.filter(place => {
      let existCharacter = mapCharacters.some(chara => chara.isSamePlace(place));
      return map.isMovable(place) && !existCharacter && beforeRoute.cost + map.getCost(place) <= move;
    }).map(place => MovingRoute.createFromRoute(beforeRoute, place, beforeRoute.cost + map.getCost(place)));
  }
}
