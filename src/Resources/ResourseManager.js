import { DEFAULT_RESOURCES } from '../constants.js';

export class ResourcesManager {
  constructor() {
    this._resources = {
      gold: DEFAULT_RESOURCES.gold,
      forest: DEFAULT_RESOURCES.forest,
      food: DEFAULT_RESOURCES.food,
      metal: DEFAULT_RESOURCES.metal,
    };
  }

  get() {
    return this._resources;
  }

  increase(values) {
    Object.keys(values).forEach((key) => {
      this._resources[key] = this._resources[key] + values[key];
    });

    return this._resources;
  }

  decrease(values) {
    Object.keys(values).forEach((key) => {
      const result = this._resources[key] - values[key];

      if (result < 0) {
        throw new Error(`Not enough ${key}`);
      }

      this._resources[key] = result;
    });

    return this._resources;
  }
}
