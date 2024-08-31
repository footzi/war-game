import { PERSONS_LIST } from '../constants.js';
import { GameObject } from '../common/GameObject.js';
import { Container, Graphics } from 'pixi.js';
import { gsap } from 'gsap';
import { EVENTS } from '../Store/constants.js';

class PersonIU extends GameObject {
  constructor({ x, y, width, height, color, type, store }) {
    super({ x, y, width, height });
    this.color = color;
    this.type = type;
    this.store = store;

    this.container = null;
  }

  paint() {
    this.container = new Container({
      x: this.x,
      y: this.y,
    });
    this.container.label = this.type;
    this.container.eventMode = 'static';
    this.container.cursor = 'pointer';

    this.container.on('pointerdown', () => {
      this.store.emit(EVENTS.onPersonClick, this);
    });

    const graphic = new Graphics().rect(0, 0, this.width, this.height).fill(this.color);
    this.container.addChild(graphic);

    return this.container;
  }

  move({ x, y }) {
    const speed = 100;
    const gap = 5;

    const isXGap = x >= this.container.x - gap && x <= this.container.x + this.width + gap;
    const isYGap = y >= this.container.y - gap && y <= this.container.y + this.height + gap;

    if (isXGap && isYGap) {
      return;
    }

    const dx = x - this.container.x;
    const dy = y - this.container.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const duration = distance / speed;
    gsap.to(this.container, { duration, x, y, ease: 'none' });
  }
}

export class BuilderUI extends PersonIU {
  static COLOR = PERSONS_LIST.BUILDER.color;
  static WIDTH = PERSONS_LIST.BUILDER.width;
  static HEIGHT = PERSONS_LIST.BUILDER.height;
  static TYPE = PERSONS_LIST.BUILDER.type;

  constructor({ x, y, store }) {
    super({
      x,
      y,
      width: BuilderUI.WIDTH,
      height: BuilderUI.HEIGHT,
      color: BuilderUI.COLOR,
      type: BuilderUI.TYPE,
      store,
    });
  }

  // move(coords) {
  //   if (this.isSelected) {
  //     console.log(coords);
  //   }
  // }
}
