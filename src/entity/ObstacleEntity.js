export default class ObstacleEntity {
  constructor(data) {
    this.id = data['id'];
    this.fileNamePrefix = data['file_name_prefix'];
    this.name = data['name'];
    this.width = data['width'];
    this.height = data['height'];
  }
}