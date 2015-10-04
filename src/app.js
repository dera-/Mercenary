import GameRepository from 'repository/GameRepository';

enchant();
window.onload = () => {
  GameRepository.initialize();
}