const MapChipModelRepository = {
  mapChipModelMap : new Map(),
  get : function(id) {
    let value = this.mapChipModelMap.get(id);
    return typeof value === 'undefined' ? null : value;
  },
  set : function(id, model, update = false) {
    if (!this.mapChipModelMap.has(id) || update) {
      this.mapChipModelMap.set(id, model);
    }
  },
  clear : function() {
    this.mapChipModelMap.clear();
  }
};
export default MapChipModelRepository;
