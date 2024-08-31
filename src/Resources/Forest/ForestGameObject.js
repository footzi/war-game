import { RESOURCES_LIST } from '../../constants.js';
import { Container, Graphics } from 'pixi.js';
import { GameObject } from '../../common/GameObject.js';

export class ForestItem {
  static PADDING = RESOURCES_LIST.FOREST.padding;
  static COLOR = RESOURCES_LIST.FOREST.color;
  static ITEM_WIDTH = RESOURCES_LIST.FOREST.width;
  static ITEM_HEIGHT = RESOURCES_LIST.FOREST.height;

  constructor({ x, y }) {
    this.x = x;
    this.y = y;
  }

  paint() {
    return new Graphics().rect(this.x, this.y, ForestItem.ITEM_WIDTH, ForestItem.ITEM_HEIGHT).fill(ForestItem.COLOR);
  }
}

export class ForestGameObject extends GameObject {
  constructor({ x, y, width, height }) {
    super({ x, y, width, height });
  }

  paint() {
    this.container = new Container({
      x: this.x,
      y: this.y,
    });
    this.container.label = 'Forest';

    return this.container;
  }

  paintItem(x, y) {
    const item = new ForestItem({ x, y });

    return item.paint();
  }
}
