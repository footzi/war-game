import { Graphics, Container, Text, TextStyle } from 'pixi.js';
import { BUILDINGS, CANVAS, TEXT_STYLES } from '../constants';
import { EVENTS } from '../Store/constants.js';

export class BuildingUIPanel {
  constructor({ app, store }) {
    this.store = store;

    this.container = new Container({
      x: 5,
      y: CANVAS.HEIGHT - 35,
    });
    this.container.label = 'BuildingUIPanel';

    this.activeButton = null;
    this.paint();

    app.stage.addChild(this.container);

    this.bindEvents();
  }

  bindEvents() {
    const clear = () => {
      this.activeButton.clear();
      this.activeButton.rect(0, 0, 70, 30).fill(0x666666).stroke({ color: '0xffffff', width: 2, alignment: 0 });
      this.activeButton = null;
    };

    this.store.on(EVENTS.onBuildingFinish, () => clear());
    this.store.on(EVENTS.onBuildingError, () => clear());
  }

  paint() {
    const textStyles = new TextStyle({
      ...TEXT_STYLES,
    });

    BUILDINGS.forEach((building, index) => {
      const panel = new Container({
        x: 12 + 80 * index,
        y: 0,
      });
      panel.label = 'wrapperContainer';

      const button = new Graphics()
        .rect(0, 0, 70, 30)
        .fill(0x666666)
        .stroke({ color: 0xffffff, width: 2, alignment: 0 });

      button.eventMode = 'static';
      button.cursor = 'pointer';

      button.on('pointerdown', () => {
        if (this.activeButton) {
          return;
        }

        button.clear();
        button.rect(0, 0, 70, 30).fill(0x666666).stroke({ color: '#00FF00', width: 2, alignment: 0 });
        this.activeButton = button;
        this.store.emit(EVENTS.onBuildingPanelClick, { building });
      });

      const text = new Text({
        text: building.name,
        style: textStyles,
        x: 5,
      });

      panel.addChild(button);
      panel.addChild(text);

      this.container.addChild(panel);
    });
  }
}
