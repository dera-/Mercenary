const MapChipEntityRepository = {
  mapChipEntityMap : new Map(),
  get : function(id) {
    let value = this.mapChipEntityMap.get(id);
    return typeof value === 'undefined' ? null : value;
  },
  set : function(id, entity, update = false) {
    if (!this.mapChipEntityMap.has(id) || update) {
      this.mapChipEntityMap.set(id, entity);
    }
  },
  clear : function() {
    this.mapChipEntityMap.clear();
  }
};
export default MapChipEntityRepository;
