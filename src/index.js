import { Application, Ticker } from 'pixi.js';
import './index.css';

import { Store } from './Store/index.js';
import { ResourcesUIPanel } from './UI/ResourcesPanel';
import { CANVAS } from './constants';
import { BuildingUIPanel } from './UI/BuildingPanel';
import { BuildingManager } from './Buildings/BuildingManager';
import { Map } from './Map';
import { ForestManager } from './Resources/ForestManager.js';
import { GoldManager } from './Resources/GoldManager.js';

class Game {
  constructor() {
    this.app = new Application();
    this.store = new Store();

    this.init();

    // resousrce manager ??
    this.map = new Map({ app: this.app, store: this.store });

    this.buildingManager = new BuildingManager({
      app: this.app,
      store: this.store,
      map: this.map,
    });

    this.buildingUIPanel = new BuildingUIPanel({
      app: this.app,
      store: this.store,
      map: this.map,
    });

    this.resourceUIPanel = new ResourcesUIPanel({
      app: this.app,
      store: this.store,
    });

    new ForestManager({
      map: this.map,
      store: this.store,
    });
    new GoldManager({
      map: this.map,
      store: this.store,
    });

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
      this.resourceUIPanel.update();
    };

    ticker.add(callback);
    ticker.start();
  }
}

new Game();
