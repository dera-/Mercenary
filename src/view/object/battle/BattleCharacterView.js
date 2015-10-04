import * as GameConfig from '../../../conf/GameConfig';
import SpriteFactory from '../../../factory/SpriteFactory';
import GameRepository from '../../../repository/GameRepository';

const CHARA_DOT_WIDTH  = GameConfig.MAP_CHIP_WIDTH;
const CHARA_DOT_HEIGHT = GameConfig.MAP_CHIP_HEIGHT;

export default class BattleCharacterView {
  constructor(charaData) {
    let x = CHARA_DOT_WIDTH * charaData.x,
      y = CHARA_DOT_HEIGHT * charaData.y,
      width = CHARA_DOT_WIDTH,
      height = CHARA_DOT_HEIGHT,
      imagePath = GameConfig.CHARA_DOT_DIR + charaData.imageFileName + GameConfig.PNG_SUFFIX;
    this.id = charaData.id;
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
    this.sprite.x += dx * CHARA_DOT_WIDTH;
    this.sprite.y += dy * CHARA_DOT_HEIGHT;
  }
}