import ViewBase from '../ViewBase';

export default class ObjectViewBase extends ViewBase {
  constructor(x, y, width, height, sprite = null) {
    super(x, y, width, height);
    this.sprite = sprite;
    this.setEvent();
  }

  getSprite() {
    return this.sprite;
  }
}