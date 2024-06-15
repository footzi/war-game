export class Resources {
  constructor({ food, forest, gold, metal }) {
    this.food = food;
    this.forest = forest;
    this.gold = gold;
    this.metal = metal;
  }

  getValues() {
    return {
      food: this.food,
      forest: this.forest,
      gold: this.gold,
      metal: this.metal,
    };
  }

  increase(values) {
    Object.keys(values).forEach((key) => {
      this[key] = this[key] + values[key];
    });
  }

  decrease(values) {
    Object.keys(values).forEach((key) => {
      const result = this[key] - values[key];

      if (result < 0) {
        throw new Error(`Not enough ${key}`);
      }

      this[key] = result;
    });
  }
}
