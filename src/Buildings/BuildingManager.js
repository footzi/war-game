import { BuildingUI } from '../UI/Building.js';
import { EVENTS } from '../Store/constants.js';

export class BuildingManager {
  constructor({ store, map }) {
    this.map = map;
    this.store = store;

    this.buidlingConstuctions = null;

    this.bindEvents();
  }

  bindEvents() {
    this.store.on(EVENTS.onMapClick, (e) => {
      if (this.buidlingConstuctions) {
        this.build(e.client);
      }
    });

    this.store.on(EVENTS.onBuildingPanelClick, ({ building }) => {
      this.buidlingConstuctions = building;
    });
  }

  build(coords) {
    try {
      this.store.decreaseResources(this.buidlingConstuctions.cost);

      const building = new BuildingUI({ map: this.map });

      building.build(this.buidlingConstuctions, coords);
      this.store.emit(EVENTS.onBuildingFinish);
    } catch (e) {
      alert(e.message);
      this.store.emit(EVENTS.onBuildingError);
    } finally {
      this.buidlingConstuctions = null;
    }
  }
}
