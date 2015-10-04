import * as GameConfig from '../../../conf/GameConfig';
import SpriteFactory from '../../../factory/SpriteFactory';
import GameRepository from '../../../repository/GameRepository';

export default class ObstacleView {
  constructor(obstacleData) {
    let x = GameConfig.MAP_CHIP_WIDTH * obstacleData.x,
      y = GameConfig.MAP_CHIP_HEIGHT * obstacleData.y,
      width = CHARA_DOT_WIDTH,
      height = CHARA_DOT_HEIGHT,
      imagePath = GameConfig.OBSTACLE_DIR + obstacleData.imageFileName + GameConfig.PNG_SUFFIX;
    this.id = obstacleData.modelId;
    this.sprite = SpriteFactory.get(x, y, width, height, imagePath);
  }

  getSprite() {
    return this.sprite;
  }

  setEventInBattleMapScene() {
    this.scene.addEventListener(Event.TOUCH_END, (event)=>{
      //GameRepository.get().pushScene();
    });
  }

  move(dx, dy) {
    this.sprite.x += dx * GameConfig.MAP_CHIP_WIDTH;
    this.sprite.y += dy * GameConfig.MAP_CHIP_HEIGHT;
  }
}