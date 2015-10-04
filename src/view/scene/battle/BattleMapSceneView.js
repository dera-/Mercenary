import GameConfig from '../../../conf/GameConfig';
import GameRepository from '../../../repository/GameRepository';
import ImageRepository from '../../../repository/ImageRepository';
import Point from '../../../util/Point';

export default class BattleMapSceneView {
  constructor(mapView, characterViews, obstacleViews) {
    this.touchedPoint = new Point(0, 0);  //TODO Pointクラスをutilに移そう
    this.beforeScenePoint = new Point(0, 0);
    mapView.setEvent();
    this.scene.addChild(mapView.getMap());
    characterViews.forEach((view) => {
      view.setEventInBattleMapScene();
      this.scene.addChild(view.getSprite());
    });
    obstacleViews.forEach((view) => {
      view.setEventInBattleMapScene();
      this.scene.addChild(view.getSprite());
    });
    this.setEvent();
  },

  setEvent() {
    this.scene.addEventListener(Event.TOUCH_START, (event)=>{
      this.touchedPoint.x = event.x;
      this.touchedPoint.y = event.y;
    });
    this.scene.addEventListener(Event.TOUCH_MOVE, (event)=>{
      this.scene.x = this.beforeScenePoint.x + (this.touchedPoint.x - event.x);
      this.scene.y = this.beforeScenePoint.y + (this.touchedPoint.y - event.y);
    });
    this.scene.addEventListener(Event.TOUCH_END, (event)=>{
      this.beforeScenePoint = new Point(this.scene.x, this.scene.y);
    });
  }

}