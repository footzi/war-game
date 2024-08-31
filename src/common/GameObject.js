import { generateId } from '../utils/generateId.js';

export class GameObject {
  constructor({ x, y, width, height }) {
    this.id = generateId();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  paint() {
    //
  }

  update() {
    //
  }
}
