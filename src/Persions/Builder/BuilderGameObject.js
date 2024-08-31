import { PERSONS_LIST } from '../../constants.js';
import { PersonGameObject } from '../Person/PersonGameObject.js';

export class BuilderGameObject extends PersonGameObject {
  static COLOR = PERSONS_LIST.BUILDER.color;
  static WIDTH = PERSONS_LIST.BUILDER.width;
  static HEIGHT = PERSONS_LIST.BUILDER.height;
  static TYPE = PERSONS_LIST.BUILDER.type;

  constructor({ x, y }) {
    super({
      x,
      y,
      width: BuilderGameObject.WIDTH,
      height: BuilderGameObject.HEIGHT,
      color: BuilderGameObject.COLOR,
      type: BuilderGameObject.TYPE,
    });
  }
}
