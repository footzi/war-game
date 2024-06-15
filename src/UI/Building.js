import { Container, Graphics } from 'pixi.js';

export class BuildingUI {
  constructor({ map }) {
    this.map = map;
    this.container = new Container();
  }

  build(params, coords) {
    const { name, width, height } = params;
    const { x, y } = coords;

    this.container.label = name;

    const wrapper = new Graphics({
      x: x - width / 2,
      y: y - height / 2,
    })
      .rect(0, 0, width, height)
      .fill('#808080');

    this.container.addChild(wrapper);
    this.map.addChild(this.container);
  }
}
