import GameRepository from '../repository/GameRepository';
import ImageRepository from '../repository/ImageRepository';

export default const SpriteFactory = {
  get: (x, y, width, height, imagePath) => {
    let sprite = new Sprite(width, height);
    if (!ImageRepository.isLoaded(imagePath)) {
      ImageRepository.setImage(imagePath);
      // 画像読み込みが終わるまで待機
      while(!ImageRepository.isLoaded(imagePath));
    }
    sprite.image = GameRepository.get().assets[imagePath];
    sprite.x = x;
    sprite.y = y;
    return sprite;
  }
}