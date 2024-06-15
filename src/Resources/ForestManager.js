import { INITIAL_RESOURCES } from '../constants.js';
import { getRandomCoords } from '../utils/getRandomCoords.js';
import { ForestBlockUI, ForestItemUI } from '../UI/Forest.js';

export class ForestManager {
  constructor({ map, store }) {
    this.map = map;
    this.store = store;
    this.paint();
  }

  paint() {
    INITIAL_RESOURCES.forest.forEach((counts) => {
      const { width, height } = this.calcMaxSize(counts);
      const createdElements = this.store.getElements();
      const { x, y } = getRandomCoords(width, height, createdElements);

      const block = new ForestBlockUI({ x, y, width, height });
      const nodeBlock = block.paintBlock();

      counts.forEach((count, row) => {
        for (let column = 0; column < count; column++) {
          const x = (ForestItemUI.PADDING + ForestItemUI.ITEM_WIDTH) * column;
          const y = (ForestItemUI.PADDING + ForestItemUI.ITEM_HEIGHT) * row;

          block.paintItem(x, y);
        }
      });

      this.store.addElement(block);
      this.map.addChild(nodeBlock);
    });
  }

  calcMaxSize(counts) {
    const maxRows = counts.length;
    const maxColumns = Math.max(...counts);

    return {
      width: maxColumns * (ForestItemUI.ITEM_WIDTH + ForestItemUI.PADDING),
      height: maxRows * (ForestItemUI.ITEM_HEIGHT + ForestItemUI.PADDING),
    };
  }
}
