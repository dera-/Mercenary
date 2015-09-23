import assert from 'power-assert';
import MapChipModelRepository from '../../src/repository/MapChipModelRepository';

describe('MapChipModelRepositoryクラス', () => {
  var targetId = 1,
    nonTargetId = 2,
    targetValue = 10;
  beforeEach(done => {
    MapChipModelRepository.clear();
    MapChipModelRepository.set(targetId, targetValue);
    done();
  });
  after(done => {
    MapChipModelRepository.clear();
    done();
  });
  describe('getメソッド', () => {
    it('setした値をgetで取り出せる', () => {
      assert(MapChipModelRepository.get(targetId) === targetValue);
    });
    it('setしていない値はgetで取り出せない', () => {
      assert(MapChipModelRepository.get(nonTargetId) === null);
    });
  });
  describe('setメソッド', () => {
    let otherValue = 200;
    it('updateがfalseのとき、登録済みのキーはsetしても上書きできない', () => {
      MapChipModelRepository.set(targetId, otherValue);
      assert(MapChipModelRepository.get(targetId) === targetValue);
    });
    it('updateがtrueのとき、登録済みのキーをsetすると上書きできる', () => {
      MapChipModelRepository.set(targetId, otherValue, true);
      assert(MapChipModelRepository.get(targetId) === otherValue);
    });
  });
});