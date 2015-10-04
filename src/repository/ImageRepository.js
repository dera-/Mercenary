import GameConfig from '../conf/GameConfig';
import GameRepository from '../repository/GameRepository';

export default const ImageRepository = {
  loadedImagePathSets : new Set(),
  setImage : (imagePath) => {
    GameRepository.get().load(imagePath, () => {
      ImageRepository.loadedImagePathSets.add(imagePath);
    });
  },
  isLoaded : (imagePath) => {
    return ImageRepository.loadedImagePathSets.has(imagePath);
  }
};