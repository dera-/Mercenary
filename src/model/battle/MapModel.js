import MapChipEntityRepository from '../../repository/MapChipEntityRepository';

export default class MapModel {
  constructor(mapChips, obstacles) {
    this.mapChips = mapChips;
    this.obstacles = obstacles;
    this.height = mapChips.length;
    this.width = mapChips[0].length;
  }

  isMovable(place) {
    if (place.x < 0 || width <= place.x || place.y < 0 || height <= place.y) {
      return false
    }
    let mapChipId = this.mapChips[place.y][place.x],
      isExistObstacle = this.obstacles.some(obstacle => obstacle.x <= place.x && place.x < obstacle.x + obstacle.width && obstacle.y <= place.y && place.y < obstacle.y + obstacle.height),
      isMovableMapChip = MapChipEntityRepository.get(mapChipId).isMovable;
    return !isExistObstacle && isMovableMapChip;
  }

  getCost(place) {
    let mapChipId = this.mapChips[place.y][place.x];
    return MapChipEntityRepository.get(mapChipId).cost;
  }
}
