import * as CharacterType from '../../const/CharacterType';

export default class BattleTeamService {
  static isSameTeam(charaType, targetCharaType) {
    switch (charaType) {
      case CharacterType.PLAYER:
      case CharacterType.FRIEND:
      case CharacterType.ALLY:
        return targetCharaType === CharacterType.PLAYER || targetCharaType === CharacterType.FRIEND || targetCharaType === CharacterType.ALLY;
      case CharacterType.ENEMY_LEADER:
      case CharacterType.ENEMY:
        return targetCharaType === CharacterType.ENEMY_LEADER || targetCharaType === CharacterType.ENEMY;
      default:
        return false;
    }
  }
}