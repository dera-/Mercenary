import Point from '../../model/util/Point';
import MovingRoute from '../../model/battle/MovingRoute';
import BattleTeamService from './BattleTeamService';

const NEXT_PLACES = [new Point(-1, 0), new Point(1, 0), new Point(0, -1), new Point(0, 1)];

export default class CharacterMovingService {

  static getMovableRoutes(map, mapCharacters, movingCharacter) {
    let firstRoute = new MovingRoute([movingCharacter.place], 0),
      routes = [firstRoute],
      queue = CharacterMovingService.getNextRoutes(
        firstRoute,
        map,
        mapCharacters,
        movingCharacter
      );
    while (queue.length > 0) {
      let nextRoute = queue.shift();
      if (nextRoute.stoppable) {
        routes.push(nextRoute);
      }
      queue.push(...CharacterMovingService.getNextRoutes(nextRoute, map, mapCharacters, movingCharacter));
    }
    return routes;
  }

  static getNextRoutes(beforeRoute, map, mapCharacters, movingCharacter) {
    let basePlace = beforeRoute.getReachPlace();
    return NEXT_PLACES.filter(diff => {
      let place = new Point(basePlace.x + diff.x, basePlace.y + diff.y),
        existEnemy = mapCharacters.some(chara => chara.isSamePlace(place) && !BattleTeamService.isSameTeam(movingCharacter.charaType, chara.charaType)),
        cost = beforeRoute.cost + map.getCost(place);
      return !existEnemy && cost <= movingCharacter.move;
    }).map(diff => {
      let place = new Point(basePlace.x + diff.x, basePlace.y + diff.y),
        existCharacter = mapCharacters.some(chara => chara.isSamePlace(place));
      return MovingRoute.createFromRoute(beforeRoute, place, map.getCost(place), !existCharacter)});
  }
}
