import GameConfig from '../../../conf/GameConfig';
import GameRepository from '../../../repository/GameRepository';
import ImageRepository from '../../../repository/ImageRepository';

export default BattleMapView {
  constructor(mapChipIds) {
    this.map = new Map(GameConfig.MAP_CHIP_WIDTH, GameConfig.MAP_CHIP_HEIGHT);
    this.map.image = GameRepository.get().assets[GameConfig.MAP_CHIPS_IMAGE_PATH];
    this.map.loadData(mapChipIds);
  }
  getMap() {
    return this.map;
  }
  setEvent() {

  }
}