import { GameObject } from '../common/GameObject.js';
import { Container, Graphics } from 'pixi.js';
import { CANVAS, MAP } from '../constants.js';

export class MapGameObject extends GameObject {
  constructor({ x, y, width, height }) {
    super({ x, y, width, height });
  }

  paint() {
    const graphics = new Graphics().rect(MAP.X, MAP.Y, MAP.WIDTH, MAP.HEIGHT).fill(MAP.COLOR);
    this.container = new Container();
    this.container.width = CANVAS.WIDTH;
    this.container.height = CANVAS.HEIGHT;

    this.container.label = 'Map';
    this.container.eventMode = 'static';

    this.container.addChild(graphics);

    return this.container;
  }

  update() {
    //
  }
}
