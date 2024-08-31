import { ResourcesManager } from './ResourseManager.js';
import { ResourcesGameObjects } from './ResourcesGameObjects.js';

export class Resources {
  constructor({ app, map }) {
    this.manager = new ResourcesManager();
    this.gameObjects = new ResourcesGameObjects({ app, map, resources: this });
  }

  getResources() {
    return this.manager.get();
  }

  increaseResources(values) {
    return this.manager.increase(values);
  }

  decreaseResources(values) {
    return this.manager.decrease(values);
  }

  update() {
    this.gameObjects.update();
  }
}
