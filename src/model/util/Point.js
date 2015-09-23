export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
  isSamePoint(other) {
    return this.x === other.x && this.y === other.y;
  }
}