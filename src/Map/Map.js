import { MAP } from '../constants.js';
import { MapGameObject } from './MapGameObject.js';

export class Map {
  constructor({ app }) {
    this.mapGameObject = new MapGameObject({ x: MAP.X, y: MAP.Y, width: MAP.WIDTH, height: MAP.HEIGHT }).paint(app);

    this.gameObjects = {
      buildings: [],
      resources: [],
    };

    app.stage.addChild(this.mapGameObject);
  }

  addResourceGameObject(gameObject) {
    this.mapGameObject.addChild(gameObject);
    this.gameObjects.resources.push(gameObject);
  }

  addBuildingGameObject(gameObject) {
    this.mapGameObject.addChild(gameObject);
    this.gameObjects.buildings.push(gameObject);
  }

  getResourceGameObjects() {
    return this.gameObjects.resources;
  }

  getAllGameObjects() {
    return [...this.gameObjects.resources, ...this.gameObjects.buildings];
  }

  onClick(callback) {
    this.mapGameObject.on('pointerdown', callback);
  }
}
