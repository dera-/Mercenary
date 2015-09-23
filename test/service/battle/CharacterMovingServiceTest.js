import assert from 'power-assert';
import * as CharacterType from '../../../src/const/CharacterType.js';
import * as MapChipMock from '../../mockdata/MapChip';
import * as ObstacleMock from '../../mockdata/Obstacle';
import Point from '../../../src/model/util/Point.js';
import MapChipModel from '../../../src/model/battle/MapChipModel.js';
import ObstacleModel from '../../../src/model/battle/ObstacleModel';
import MapChipModelRepository from '../../../src/repository/MapChipModelRepository';
import CharacterMovingService from '../../../src/service/battle/CharacterMovingService';
import MapModel from '../../../src/model/battle/MapModel';
import MapCharacterModel from '../../../src/model/battle/MapCharacterModel';
import MovingCharacterModel from '../../../src/model/battle/MovingCharacterModel';
import MovingRoute from '../../../src/model/battle/MovingRoute';

describe('CharacterMovingServiceクラス', () => {
  let road = new MapChipModel(MapChipMock.road),
    forest = new MapChipModel(MapChipMock.forest),
    mapEntities = [
      [1,2,2,2,1,1],
      [1,1,2,2,2,1],
      [1,1,1,2,2,2],
      [1,1,1,1,2,2],
      [1,1,1,1,1,2]
    ],
    obstacleModels = [
      new ObstacleModel(ObstacleMock.wall),
      new ObstacleModel(ObstacleMock.oblongWall),
      new ObstacleModel(ObstacleMock.squareWall)
    ],
    mapModel = new MapModel(mapEntities, obstacleModels),
    isContainInRoutes = (routes, target) => routes.some(route => target.isSameRoute(route));
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
  describe('getMovableRoutesメソッド', () => {
    it('全移動可能ルートの取得が可能', () => {
      let movingChara = new MovingCharacterModel(1, CharacterType.PLAYER, new Point(3, 2), 2),
        routes = CharacterMovingService.getMovableRoutes(mapModel, [], movingChara);
      assert(routes.length === 5);
      assert(isContainInRoutes(routes, new MovingRoute([new Point(3, 2)], 0)));
      assert(isContainInRoutes(routes, new MovingRoute([new Point(3, 2), new Point(3, 1)], 1.5)));
      assert(isContainInRoutes(routes, new MovingRoute([new Point(3, 2), new Point(3, 3)], 1)));
      assert(isContainInRoutes(routes, new MovingRoute([new Point(3, 2), new Point(3, 3), new Point(3, 4)], 2)));
      assert(isContainInRoutes(routes, new MovingRoute([new Point(3, 2), new Point(3, 3), new Point(2, 3)], 2)));
    });
    it('他キャラクターの配置箇所を考慮できる', () => {
      let movingChara = new MovingCharacterModel(1, CharacterType.PLAYER, new Point(3, 0), 3),
        enemy = new MapCharacterModel(2, CharacterType.ENEMY, new Point(2, 0)),
        friend = new MapCharacterModel(3, CharacterType.FRIEND, new Point(3, 1)),
        ally = new MapCharacterModel(4, CharacterType.ALLY, new Point(4, 0)),
        routes = CharacterMovingService.getMovableRoutes(mapModel, [enemy, friend, ally], movingChara);
      assert(routes.length === 9);
      assert(isContainInRoutes(routes, new MovingRoute([new Point(3, 0)], 0)));
      assert(isContainInRoutes(routes, new MovingRoute([new Point(3, 0), new Point(3, 1), new Point(3, 2)], 3)));
      assert(isContainInRoutes(routes, new MovingRoute([new Point(3, 0), new Point(3, 1), new Point(2, 1)], 3)));
      assert(isContainInRoutes(routes, new MovingRoute([new Point(3, 0), new Point(3, 1), new Point(4, 1)], 3)));
      assert(isContainInRoutes(routes, new MovingRoute([new Point(3, 0), new Point(4, 0), new Point(4, 1)], 2.5)));
      assert(isContainInRoutes(routes, new MovingRoute([new Point(3, 0), new Point(4, 0), new Point(5, 0)], 2)));
      assert(isContainInRoutes(routes, new MovingRoute([new Point(3, 0), new Point(4, 0), new Point(5, 0), new Point(5, 1)], 3)));
      // 遠回りのrouteも取得
      assert(isContainInRoutes(routes, new MovingRoute([new Point(3, 0), new Point(3, 1), new Point(3, 0)], 3)));
      assert(isContainInRoutes(routes, new MovingRoute([new Point(3, 0), new Point(4, 0), new Point(3, 0)], 2.5)));
    });
  });
  describe('getNextRoutesメソッド', () => {
    it('次のルート候補をすべて取得可能', () => {
      let movingCharacter = new MovingCharacterModel(1, CharacterType.PLAYER, new Point(5, 1), 3),
        beforeRoute = new MovingRoute([movingCharacter.place], 0),
        nextRoutes = CharacterMovingService.getNextRoutes(beforeRoute, mapModel, [], movingCharacter);
      assert(nextRoutes.length === 2);
      assert(isContainInRoutes(nextRoutes, new MovingRoute([new Point(5, 1), new Point(5, 0)], 1)));
      assert(isContainInRoutes(nextRoutes, new MovingRoute([new Point(5, 1), new Point(4, 1)], 1.5)));
    });
    it('他キャラクターや障害物の配置を考慮できる', () => {
      let movingCharacter = new MovingCharacterModel(1, CharacterType.PLAYER, new Point(3, 0), 3),
        enemy = new MapCharacterModel(2, CharacterType.ENEMY, new Point(2, 0)),
        friend = new MapCharacterModel(3, CharacterType.FRIEND, new Point(3, 1)),
        ally = new MapCharacterModel(4, CharacterType.ALLY, new Point(4, 0)),
        beforeRoute = new MovingRoute([movingCharacter.place], 0),
        nextRoutes = CharacterMovingService.getNextRoutes(beforeRoute, mapModel, [enemy, friend, ally], movingCharacter);
      assert(nextRoutes.length === 2);
      assert(isContainInRoutes(nextRoutes, new MovingRoute([new Point(3, 0), new Point(3, 1)], 1.5, false)));
      assert(isContainInRoutes(nextRoutes, new MovingRoute([new Point(3, 0), new Point(4, 0)], 1, false)));
    });
  });
});