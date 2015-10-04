import assert from 'power-assert';
import * as MapChipMock from '../../mockdata/MapChip';
import * as ObstacleMock from '../../mockdata/Obstacle';
import MapChipModel from '../../../src/model/battle/MapChipModel.js';
import ObstacleModel from '../../../src/model/battle/ObstacleModel';
import Point from '../../../src/util/Point';
import MapChipModelRepository from '../../../src/repository/model/battle/MapChipModelRepository';
import MapModel from '../../../src/model/battle/MapModel';

describe('MapModelクラス', () => {
  let road = new MapChipModel(MapChipMock.road),
    forest = new MapChipModel(MapChipMock.forest),
    mapEntities = [
      [1,2,2,1],
      [1,1,2,2],
      [1,1,1,2],
      [1,1,1,1]
    ],
    obstacleModels = [
      new ObstacleModel(ObstacleMock.wall),
      new ObstacleModel(ObstacleMock.oblongWall)
    ],
    mapModel = new MapModel(mapEntities, obstacleModels);
  before(done => {
    MapChipModelRepository.clear();
    MapChipModelRepository.set(road.id, road);
    MapChipModelRepository.set(forest.id, forest);
    done();
  });
  after(done => {
    MapChipModelRepository.clear();
    done();
  });

  describe('isMovableメソッド', () => {
    it('指定の座標がマップ内でかつ障害物がない場合,trueを返す', () => {
      assert(mapModel.isMovable(new Point(2, 3)) === true);
      assert(mapModel.isMovable(new Point(3, 1)) === true);
    });
    it('指定の座標がマップ外のない場合,falseを返す', () => {
      assert(mapModel.isMovable(new Point(-1, 3)) === false);
      assert(mapModel.isMovable(new Point(3, -2)) === false);
      assert(mapModel.isMovable(new Point(4, 2)) === false);
      assert(mapModel.isMovable(new Point(3, 5)) === false);
    });
    it('指定の座標に障害物がある場合,falseを返す', () => {
      assert(mapModel.isMovable(new Point(1, 1)) === false);
      assert(mapModel.isMovable(new Point(2, 2)) === false);
      assert(mapModel.isMovable(new Point(1, 2)) === false);
    });
  });

  describe('getCostメソッド', () => {
    it('指定された座標上のマップチップの移動コストを返す', () => {
      assert(mapModel.getCost(new Point(2, 3)) === 1.0);
      assert(mapModel.getCost(new Point(3, 1)) === 1.5);
    });
  });
});