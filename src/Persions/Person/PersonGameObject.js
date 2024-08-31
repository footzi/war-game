import { PERSONS_LIST } from '../../constants.js';
import { GameObject } from '../../common/GameObject.js';
import { Container, Graphics } from 'pixi.js';
import { gsap } from 'gsap';
import { Emmiter } from '../../utils/Emmiter/index.js';

export class PersonGameObject extends GameObject {
  constructor({ x, y, width, height, color, type }) {
    super({ x, y, width, height });
    this.color = color;
    this.type = type;

    this.emmiter = new Emmiter();
    this.container = null;

    this.isMoving = false;
  }

  paint() {
    this.container = new Container({
      x: this.x,
      y: this.y,
    });
    this.container.label = this.type;
    this.container.eventMode = 'static';
    this.container.cursor = 'pointer';

    this.container.on('pointerdown', (event) => {
      event.stopPropagation();
      this.emmiter.emit('onClick', this);
    });

    const graphic = new Graphics().rect(0, 0, this.width, this.height).fill(this.color);
    this.container.addChild(graphic);

    return this.container;
  }

  move({ x, y }) {
    this.isMoving = true;

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
    gsap.to(this.container, {
      duration,
      x,
      y,
      ease: 'none',
      onComplete: () => {
        this.isMoving = false;
      },
    });
  }

  onClick(callback) {
    this.emmiter.on('onClick', callback);
  }
}
