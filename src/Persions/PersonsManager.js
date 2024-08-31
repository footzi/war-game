export class PersonsManager {
  constructor({ map, gameObjects, resources }) {
    this.map = map;
    this.gameObjects = gameObjects;
    this.resources = resources;

    this.selectedPersons = [];

    this.bindEvents();
  }

  bindEvents() {
    this.gameObjects.onPersonClick((person) => {
      const isSelected = this.selectedPersons.some((item) => person.id === item.id);

      if (!isSelected) {
        this.selectedPersons.push(person);
      }
    });

    this.map.onClick((e) => {
      this.moveSelectedPersons(e.client);
    });
  }

  moveSelectedPersons(coords) {
    this.selectedPersons.forEach((person, index) => {
      if (!person.isMoving) {
        person.move(coords);

        this.selectedPersons[index] = undefined;
      }
    });

    this.selectedPersons = this.selectedPersons.filter((person) => person);
  }
}
