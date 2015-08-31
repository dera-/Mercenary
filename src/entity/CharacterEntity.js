export default class CharacterEntity {
  constructor(data) {
    this.id = data['id'];
    this.fileNamePrefix = data['file_name_prefix'];
    this.name = data['name'];
    this.lv = data['lv'];
    this.exp = data['exp'];
    this.hp = data['hp'];
    this.attack = data['attack'];
    this.defense = data['defense'];
    this.hit = data['hit'];
    this.avoid = data['avoid'];
    this.intelligence = data['intelligence'];
    this.luck = data['luck'];
    this.magicAttack = data['magic_attack'];
    this.magicDefense = data['magic_defense'];
    this.move = data['move'];
    this.brainId = data['brain_id'];
    this.jobIds = data['job_ids'];
  }
}