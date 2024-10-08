import { Graphics, Container, Text, TextStyle } from 'pixi.js';
import { RESOURCES, TEXT_STYLES } from '../../constants.js';

export class ResourcesGameObjectPanel {
  constructor({ resources }) {
    this.resources = resources;
  }

  paint() {
    this.container = new Container();
    this.container.label = 'ResourcesUIPanel';

    const wrapper = new Graphics({
      x: 5,
      y: 5,
    })
      .rect(0, 0, 500, 30)
      .fill(0x666666)
      .stroke({ color: 0xffffff, width: 2, alignment: 0 });

    this.textStyles = new TextStyle({
      ...TEXT_STYLES,
    });

    this.container.addChild(wrapper);
    this.texts = this.paintTexts() ?? [];

    return this.container;
  }

  paintTexts() {
    const texts = [];
    const resources = this.resources.getResources();

    RESOURCES.forEach((item, index) => {
      const text = new Text({
        text: `${item} ${resources[item]}`,
        style: this.textStyles,
      });
      text.x = 12 + 80 * index;
      text.y = 12;

      texts.push({ node: text, item });
      this.container.addChild(text);
    });

    return texts;
  }

  update() {
    const resources = this.resources.getResources();

    this.texts.forEach(({ node, item }) => {
      node.text = `${item} ${resources[item]}`;
    });
  }
}
