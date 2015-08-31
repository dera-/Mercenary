export default class MapChipEntity {
  constructor(data) {
    this.id = data['id'];
    this.fileNamePrefix = data['file_name_prefix'];
    this.name = data['name'];
    this.isMovable = data['is_movable'];
    this.cost = data['cost'];
    this.recover = data['recover'];
    this.attack = data['attack'];
    this.defense = data['defense'];
    this.hit = data['hit'];
    this.avoid = data['avoid'];
    this.magicAttack = data['magic_attack'];
    this.magicDefense = data['magic_defense'];
  }
}