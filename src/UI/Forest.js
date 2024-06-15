import { RESOURCES_LIST } from '../constants.js';
import { Container, Graphics } from 'pixi.js';
import { BaseElement } from './BaseElement.js';

export class ForestItemUI {
  static PADDING = RESOURCES_LIST.FOREST.padding;
  static COLOR = RESOURCES_LIST.FOREST.color;
  static ITEM_WIDTH = RESOURCES_LIST.FOREST.width;
  static ITEM_HEIGHT = RESOURCES_LIST.FOREST.height;

  constructor({ x, y }) {
    this.x = x;
    this.y = y;
  }

  paint() {
    return new Graphics()
      .rect(this.x, this.y, ForestItemUI.ITEM_WIDTH, ForestItemUI.ITEM_HEIGHT)
      .fill(ForestItemUI.COLOR);
  }
}

export class ForestBlockUI extends BaseElement {
  constructor({ x, y, width, height }) {
    super({ x, y, width, height });
    this.items = [];
  }

  paintBlock() {
    this.container = new Container({
      x: this.x,
      y: this.y,
    });
    this.container.label = 'Forest';

    return this.container;
  }

  paintItem(x, y) {
    const item = new ForestItemUI({ x, y });
    const node = item.paint();
    this.items.push(item);

    this.container.addChild(node);
  }
}
