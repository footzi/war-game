import { BuilderGameObject } from './Builder/BuilderGameObject.js';
import { INITIAL_RESOURCES } from '../constants.js';
import { getRandomCoords } from '../utils/getRandomCoords.js';
import { Container } from 'pixi.js';
import { Emmiter } from '../utils/Emmiter/index.js';

export class PersonsGameObjets {
  constructor({ map }) {
    this.map = map;
    this.emmiter = new Emmiter();

    this.paintInitialBuilders();
  }

  paintInitialBuilders() {
    const container = new Container();
    container.label = 'Builders';

    for (let i = 0; i < INITIAL_RESOURCES.builder; i++) {
      const createdElements = this.map.getAllGameObjects();
      const { x, y } = getRandomCoords(BuilderGameObject.WIDTH, BuilderGameObject.HEIGHT, createdElements);

      const builder = new BuilderGameObject({ x, y });
      const node = builder.paint();

      container.addChild(node);

      builder.onClick(() => {
        this.emmiter.emit('onPersonClick', builder);
      });
    }

    this.map.addBuilderGameObject(container);
  }

  onPersonClick(callback) {
    this.emmiter.on('onPersonClick', callback);
  }
}
