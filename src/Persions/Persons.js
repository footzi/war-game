import { PersonsGameObjets } from './PersonsGameObjets.js';
import { PersonsManager } from './PersonsManager.js';

export class Persons {
  constructor({ app, map, resources }) {
    this.gameObjects = new PersonsGameObjets({ app, map });
    this.manager = new PersonsManager({ map, gameObjects: this.gameObjects, resources });

    this.gameObjects.paintInitialBuilders();
  }
}
