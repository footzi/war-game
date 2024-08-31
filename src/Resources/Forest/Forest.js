import { INITIAL_RESOURCES } from '../../constants.js';
import { getRandomCoords } from '../../utils/getRandomCoords.js';
import { ForestGameObject, ForestItem } from './ForestGameObject.js';
import { Container } from 'pixi.js';

export class Forest {
  constructor({ map }) {
    this.map = map;

    this.container = new Container();
    this.container.label = 'Forests';
  }

  paint() {
    INITIAL_RESOURCES.forest.forEach((counts) => {
      const { width, height } = this.calcMaxSize(counts);

      const createdElements = this.map.getAllGameObjects();

      const { x, y } = getRandomCoords(width, height, createdElements);

      const forestObject = new ForestGameObject({ x, y, width, height });
      const nodeBlock = forestObject.paint();

      counts.forEach((count, row) => {
        for (let column = 0; column < count; column++) {
          const x = (ForestItem.PADDING + ForestItem.ITEM_WIDTH) * column;
          const y = (ForestItem.PADDING + ForestItem.ITEM_HEIGHT) * row;

          const item = forestObject.paintItem(x, y);
          nodeBlock.addChild(item);
        }
      });

      this.container.addChild(nodeBlock);
    });

    return this.container;
  }

  calcMaxSize(counts) {
    const maxRows = counts.length;
    const maxColumns = Math.max(...counts);

    return {
      width: maxColumns * (ForestItem.ITEM_WIDTH + ForestItem.PADDING),
      height: maxRows * (ForestItem.ITEM_HEIGHT + ForestItem.PADDING),
    };
  }
}
