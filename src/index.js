import { Application, Ticker } from 'pixi.js';
import { gsap } from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';
import './index.css';

// import { Store } from './Store/index.js';
// import { ResourcesUIPanel } from './UI/ResourcesPanel';
import { CANVAS } from './constants';
// import { BuildingUIPanel } from './UI/BuildingPanel';
// import { BuildingManager } from './Buildings/BuildingManager';
import { Map } from './Map/Map.js';
// import { ForestManager } from './Resources/ForestManager.js';
// import { GoldManager } from './Resources/Forest/GoldManager.js';
// import { BuilderManager } from './Persions/BuilderManager.js';
import { ResourcesManager } from './Resources/ResourseManager.js';
import { Resources } from './Resources/Resources.js';
import { Buildings } from './Buildings/Buildings.js';

gsap.registerPlugin(PixiPlugin);

class Game {
  constructor() {
    this.app = new Application();

    this.init();

    this.map = new Map({ app: this.app });

    this.resources = new Resources({ app: this.app, map: this.map });
    this.buildings = new Buildings({ app: this.app, map: this.map, resources: this.resources });

    // this.buildingManager = new BuildingManager({
    //   app: this.app,
    //   store: this.store,
    //   map: this.map,
    // });
    //
    // this.buildingUIPanel = new BuildingUIPanel({
    //   app: this.app,
    //   store: this.store,
    //   map: this.map,
    // });

    // this.resourceUIPanel = new ResourcesUIPanel({ app: this.app,  });

    // new ForestManager({ map: this.map, store: this.store });
    // new GoldManager({ map: this.map, store: this.store });
    // new BuilderManager({ map: this.map, store: this.store });

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
