import { Container, Graphics } from 'pixi.js';
import { CANVAS, MAP } from '../constants.js';
import { EVENTS } from '../Store/constants.js';

export class Map {
  constructor({ app, store }) {
    this.store = store;

    this.container = new Container();
    this.container.width = CANVAS.WIDTH;
    this.container.height = CANVAS.HEIGHT;

    this.container.label = 'Map';
    this.container.eventMode = 'static';

    const graphics = new Graphics().rect(MAP.X, MAP.Y, MAP.WIDTH, MAP.HEIGHT).fill(MAP.COLOR);

    this.container.on('pointerdown', (e) => this.store.emit(EVENTS.onMapClick, e));

    this.container.addChild(graphics);
    app.stage.addChild(this.container);
  }

  addChild(child) {
    this.container.addChild(child);
  }
}
