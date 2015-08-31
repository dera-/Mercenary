import ViewBase from '../ViewBase';
import * as GameConfig from '../../conf/GameConfig';

export default class SceneViewBase extends ViewBase {
  constructor(scene, x = 0, y = 0, width = GameConfig.DEFAULT_SCREEN_WIDTH, height = GameConfig.DEFAULT_SCREEN_HEIGHT) {
    super(x, y, width, height);
    this.scene = scene;
    this.setEvent();
  }
}