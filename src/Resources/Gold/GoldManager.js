import { INITIAL_RESOURCES } from '../../constants.js';
import { getRandomCoords } from '../../utils/getRandomCoords.js';
import { GoldUI } from '../../UI/Gold.js';

export class GoldManager {
  constructor({ map, store }) {
    this.map = map;
    this.store = store;
    this.paint();
  }

  paint() {
    INITIAL_RESOURCES.gold.forEach(() => {
      const createdElements = this.store.getElements();
      const { x, y } = getRandomCoords(GoldUI.ITEM_WIDTH, GoldUI.ITEM_HEIGHT, createdElements);

      const item = new GoldUI({ x, y });
      const node = item.paint();

      this.store.addElement(item);
      this.map.addChild(node);
    });
  }
}
