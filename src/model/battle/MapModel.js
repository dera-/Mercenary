import MapChipModelRepository from '../../repository/MapChipModelRepository';

export default class MapModel {
  constructor(mapChips, obstacles) {
    this.mapChips = mapChips;
    this.obstacles = obstacles;
    this.height = mapChips.length;
    this.width = mapChips[0].length;
  }

  isMovable(place) {
    if (0 > place.x || place.x >= this.width || 0 > place.y || place.y >= this.height) {
      return false
    }
    return !this.obstacles.some(obstacle => obstacle.point.x <= place.x && place.x < obstacle.point.x + obstacle.width && obstacle.point.y <= place.y && place.y < obstacle.point.y + obstacle.height);
  }

  getCost(place) {
    let mapChipId = this.mapChips[place.y][place.x];
    return MapChipModelRepository.get(mapChipId).cost;
  }

}
