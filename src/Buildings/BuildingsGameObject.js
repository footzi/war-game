import { BuildingPanelGameObject } from './Panel/BuildingPanel.js';
import { HouseGameObject } from './House/HouseGameObject.js';

export class BuildingsGameObjects {
  constructor({ app, map }) {
    this.app = app;
    this.map = map;

    this.buildingPanel = new BuildingPanelGameObject();

    app.stage.addChild(this.buildingPanel.paint());
  }

  paintHouse({ x, y }) {
    const container = new HouseGameObject({ x, y }).paint();

    this.map.addBuildingGameObject(container);
  }

  onPanelClick(callback) {
    this.buildingPanel.onPanelClick(callback);
  }

  onFinishBuilding() {
    this.buildingPanel.clear();
  }

  onErrorBuilding() {
    this.buildingPanel.clear();
  }
}
