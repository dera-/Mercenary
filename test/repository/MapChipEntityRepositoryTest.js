import assert from 'power-assert';
import MapChipEntityRepository from '../../src/repository/MapChipEntityRepository';

describe('MapChipEntityRepositoryクラス', () => {
  var targetId = 1,
    nonTargetId = 2,
    targetValue = 10;
  beforeEach(done => {
    MapChipEntityRepository.clear();
    MapChipEntityRepository.set(targetId, targetValue);
    done();
  });
  describe('getメソッド', () => {
    it('setした値をgetで取り出せる', () => {
      assert(MapChipEntityRepository.get(targetId) === targetValue);
    });
    it('setしていない値はgetで取り出せない', () => {
      assert(MapChipEntityRepository.get(nonTargetId) === null);
    });
  });
  describe('setメソッド', () => {
    let otherValue = 200;
    it('updateがfalseのとき、登録済みのキーはsetしても上書きできない', () => {
      MapChipEntityRepository.set(targetId, otherValue);
      assert(MapChipEntityRepository.get(targetId) === targetValue);
    });
    it('updateがtrueのとき、登録済みのキーをsetすると上書きできる', () => {
      MapChipEntityRepository.set(targetId, otherValue, true);
      assert(MapChipEntityRepository.get(targetId) === otherValue);
    });
  });
});