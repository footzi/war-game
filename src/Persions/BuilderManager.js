import { INITIAL_RESOURCES, PERSONS_TYPE } from '../constants.js';
import { BuilderUI } from '../UI/Person.js';
import { getRandomCoords } from '../utils/getRandomCoords.js';
import { EVENTS } from '../Store/constants.js';

export class BuilderManager {
  constructor({ map, store }) {
    this.map = map;
    this.store = store;

    this.selected = [];
    this.paint();
    this.bindEvents();
  }

  bindEvents() {
    this.store.on(EVENTS.onPersonClick, (person) => {
      if (person.type === PERSONS_TYPE.BUILDER) {
        this.selected = [person];
      }
    });

    this.store.on(EVENTS.onMapClick, (event) => this.move(event.client));
  }

  paint() {
    for (let i = 0; i < INITIAL_RESOURCES.builder; i++) {
      const createdElements = this.store.getElements();
      const { x, y } = getRandomCoords(BuilderUI.WIDTH, BuilderUI.HEIGHT, createdElements);

      const builder = new BuilderUI({ x, y, store: this.store });
      const node = builder.paint();

      this.store.addPerson(builder);
      this.map.addChild(node);
    }
  }

  move(coords) {
    this.selected.forEach((item) => {
      item.move({ x: coords.x, y: coords.y });
    });
  }
}
