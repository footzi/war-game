import { BuildingPanelGameObject } from './Panel/BuildingPanel.js';
import { HouseGameObject } from './House/HouseGameObject.js';
import { Emmiter } from '../utils/Emmiter/index.js';

export class BuildingsGameObjects {
  constructor({ app, map }) {
    this.app = app;
    this.map = map;

    this.emmiter = new Emmiter();

    this.buildingPanel = new BuildingPanelGameObject();

    this.buildingPanel.onPanelClick((building) => {
      this.emmiter.emit('onPanelClick', building);
    });

    app.stage.addChild(this.buildingPanel.paint());
  }

  paintHouse({ x, y }) {
    const container = new HouseGameObject({ x, y }).paint();

    this.map.addBuildingGameObject(container);
  }

  onPanelClick(callback) {
    this.emmiter.on('onPanelClick', callback);
  }

  onFinishBuilding() {
    this.buildingPanel.clear();
  }

  onErrorBuilding() {
    this.buildingPanel.clear();
  }
}
