import { ResourcesGameObjectPanel } from './Panel/ResourcesPanel.js';
import { Forest } from './Forest/Forest.js';

export class ResourcesGameObjects {
  constructor({ app, map, resources }) {
    this.panel = new ResourcesGameObjectPanel({ resources });
    this.forest = new Forest({ map });

    const panelContainer = this.panel.paint();
    const forestContainer = this.forest.paint();

    app.stage.addChild(panelContainer);
    map.addResourceGameObject(forestContainer);
  }

  update() {
    this.panel.update();
  }
}
