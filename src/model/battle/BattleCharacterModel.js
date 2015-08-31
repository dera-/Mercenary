import MovingCharacterModel from 'MovingCharacterModel';
import CharacterMovingService from '../../service/CharacterMovingService';

export default class BattleCharacterModel {
  constructor(entity, jobs, brain, charaType, place) {
    this.id = entity.id;
    this.lv = entity.lv;
    this.exp = entity.exp;
    this.maxHp = entity.hp;
    this.currentHp = entity.hp;
    this.attack = entity.attack;
    this.defense = entity.defense;
    this.hit = entity.hit;
    this.avoid = entity.avoid;
    this.intelligence = entity.intelligence;
    this.luck = entity.luck;
    this.magicAttack = entity.magicAttack;
    this.magicDefense = entity.magicDefense;
    this.move = move;
    this.jobs = jobs;
    this.brain = brain;
    this.charaType = charaType;
    this.place = place;

    this.activeStatus = true;
  }

  damage(value) {
    this.currentHp -= value;
    if (this.currentHp <= 0) {
      this.currentHp = 0;
    }
  }

  recover(value) {
    this.currentHp += value;
    if (this.currentHp >= this.maxHp) {
      this.currentHp = this.maxHp;
    }
  }

  isAlive() {
    return this.currentHp > 0;
  }

  changeActiveStatus(activeStatus) {
    this.activeStatus = activeStatus;
  }

  getMovableRoutes(map, mapCharacters) {
    return CharacterMovingService.getMovableRoutes(
      map,
      mapCharacters,
      new MovingCharacterModel(this.id, this.charaType, this.place, this.move)
    );
  }

}