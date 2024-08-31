// import { BuildingUI } from './Building.js';
// import { EVENTS } from '../Store/constants.js';

export class BuildingsManager {
  constructor({ map, gameObjects, resources }) {
    this.map = map;
    this.gameObjects = gameObjects;
    this.resources = resources;
    // this.store = store;
    //
    this.buidlingInProgress = null;
    this.bindEvents();
  }

  bindEvents() {
    this.gameObjects.onPanelClick((building) => {
      this.buidlingInProgress = building;
    });

    this.map.onClick((e) => {
      if (this.buidlingInProgress) {
        this.buildHouse(e.client);
      }
    });
  }

  buildHouse(coords) {
    try {
      this.resources.decreaseResources(this.buidlingInProgress.cost);

      this.gameObjects.paintHouse(coords);
      this.gameObjects.onFinishBuilding(this.buidlingInProgress);
    } catch (e) {
      alert(e.message);
      this.gameObjects.onFinishBuilding(this.buidlingInProgress);
    } finally {
      this.buidlingInProgress = null;
    }
  }
}
