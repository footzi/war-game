import { Application, Ticker } from 'pixi.js';
import { gsap } from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';
import './index.css';

import { CANVAS } from './constants';
import { Map } from './Map/Map.js';
import { Resources } from './Resources/Resources.js';
import { Buildings } from './Buildings/Buildings.js';
import { Persons } from './Persions/Persons.js';

gsap.registerPlugin(PixiPlugin);

class Game {
  constructor() {
    this.app = new Application();

    this.init();

    this.map = new Map({ app: this.app });

    this.resources = new Resources({ app: this.app, map: this.map });
    this.buildings = new Buildings({ app: this.app, map: this.map, resources: this.resources });
    this.persons = new Persons({ app: this.app, map: this.map, resources: this.resources });

    this.update();
  }

  async init() {
    globalThis.__PIXI_APP__ = this.app;

    await this.app.init({
      width: CANVAS.WIDTH,
      height: CANVAS.HEIGHT,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
    });

    document.body.appendChild(this.app.canvas);

    // setTimeout(() => {
    //   this.store.resources.increaseFood(5000);
    // }, 2000);
  }

  update() {
    const ticker = new Ticker();

    const callback = () => {
      this.resources.update();
    };

    ticker.add(callback);
    ticker.start();
  }
}

new Game();
