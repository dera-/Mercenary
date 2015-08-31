export default class ObstacleModel {
  constructor(entity) {
    this.id = entity.id;
    this.fileNamePrefix = entity.file_name_prefix;
    this.name = entity.name;   
    this.hp = entity.hp;
    this.x = entity.x;
    this.y = entity.y;
    this.width = entity.width;
    this.height = entity.height;
    this.type = entity.type;
  }
}