const MapChipModelRepository = {
  mapChipModelMap : new Map(),
  get : id => {
    let value = MapChipModelRepository.mapChipModelMap.get(id);
    return typeof value === 'undefined' ? null : value;
  },
  set : (id, model, update = false) => {
    if (!MapChipModelRepository.mapChipModelMap.has(id) || update) {
      MapChipModelRepository.mapChipModelMap.set(id, model);
    }
  },
  clear : () => {
    MapChipModelRepository.mapChipModelMap.clear();
  }
};
export default MapChipModelRepository;
