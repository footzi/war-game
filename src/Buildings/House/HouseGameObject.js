import { GameObject } from '../../common/GameObject.js';
import { Container, Graphics } from 'pixi.js';
import { BUILDINGS_LIST } from '../../constants.js';

export class HouseGameObject extends GameObject {
  constructor({ x, y }) {
    const params = BUILDINGS_LIST.HOUSE;

    super({ x, y, width: params.width, height: params.height });
  }

  paint() {
    const container = new Container();
    container.label = 'House';

    const wrapper = new Graphics({
      x: this.x - this.width / 2,
      y: this.y - this.height / 2,
    })
      .rect(0, 0, this.width, this.height)
      .fill('#808080');

    container.addChild(wrapper);

    return container;
  }
}
