import { Graphics, Container, Text, TextStyle } from 'pixi.js';
import { BUILDINGS, CANVAS, PERSONS_TYPE, TEXT_STYLES } from '../../constants.js';
import { Emmiter } from '../../utils/Emmiter/index.js';

export class BuildingPanelGameObject {
  constructor() {
    this.emmiter = new Emmiter();

    this.activeButton = null;
  }

  paint() {
    this.container = new Container({
      x: 5,
      y: CANVAS.HEIGHT - 35,
    });
    this.container.label = 'BuildingUIPanel';

    this.paintPanel();

    return this.container;
  }

  paintPanel() {
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

        this.emmiter.emit('onPanelClick', building);
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

  clear() {
    this.activeButton.clear();
    this.activeButton.rect(0, 0, 70, 30).fill(0x666666).stroke({ color: '0xffffff', width: 2, alignment: 0 });
    this.activeButton = null;
  }

  onPanelClick(callback) {
    this.emmiter.on('onPanelClick', callback);
  }
}
