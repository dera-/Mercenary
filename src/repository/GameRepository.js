import GameConfig from '../conf/GameConfig';

export default const GameRepository = {
  gameObject : null,
  get : () => {
    if (GameRepository.gameObject === null) {
      GameRepository.initialize();
    }
    return GameRepository.gameObject;
  },
  initialize : () => {
    let game = new Game(GameConfig.DEFAULT_SCREEN_WIDTH, GameConfig.DEFAULT_SCREEN_HEIGHT);
    game.onload = function () {
      game.preload(GameConfig.MAP_CHIPS_IMAGE_PATH);
      // TODO 初期化処理
    };
    game.start();
    GameRepository.gameObject = game;
  }
};
