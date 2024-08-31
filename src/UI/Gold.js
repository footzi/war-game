import { Container, Graphics } from 'pixi.js';
import { RESOURCES_LIST } from '../constants.js';
import { GameObject } from '../common/GameObject.js';

export class GoldUI extends GameObject {
  static COLOR = RESOURCES_LIST.GOLD.color;
  static ITEM_WIDTH = RESOURCES_LIST.GOLD.width;
  static ITEM_HEIGHT = RESOURCES_LIST.GOLD.height;

  constructor({ x, y }) {
    super({ x, y, width: GoldUI.ITEM_WIDTH, height: GoldUI.ITEM_HEIGHT });
  }

  paint() {
    const container = new Container({
      x: this.x,
      y: this.y,
    });
    container.label = 'Gold';

    const graphic = new Graphics().rect(0, 0, GoldUI.ITEM_WIDTH, GoldUI.ITEM_HEIGHT).fill(GoldUI.COLOR);
    container.addChild(graphic);

    return container;
  }
}
