import { BuildingsGameObjects } from './BuildingsGameObject.js';
import { BuildingsManager } from './BuildingsManager.js';

export class Buildings {
  constructor({ app, map, resources }) {
    this.gameObjects = new BuildingsGameObjects({ app, map });
    this.manager = new BuildingsManager({ map, gameObjects: this.gameObjects, resources });
  }
}
