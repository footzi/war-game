// import { Resources } from '../Resources';
// import { Emmiter } from '../utils/Emmiter';
//
// export class Store {
//   constructor() {
//     this._emitter = new Emmiter();
//     // this._resources = new Resources({
//     //   gold: 100,
//     //   forest: 500,
//     //   food: 300,
//     //   metal: 10,
//     // });
//     this._elements = [];
//     this._persons = [];
//   }
//
//   // getResources() {
//   //   return this._resources.getValues();
//   // }
//   //
//   // increaseResources(values) {
//   //   this._resources.increase(values);
//   // }
//   //
//   // decreaseResources(values) {
//   //   this._resources.decrease(values);
//   // }
//
//   emit(name, args) {
//     this._emitter.emit(name, args);
//   }
//
//   on(name, cb) {
//     this._emitter.on(name, cb);
//   }
//
//   addElement(el) {
//     this._elements.push(el);
//   }
//
//   getElements() {
//     return this._elements;
//   }
//
//   addPerson(el) {
//     this._persons.push(el);
//   }
//
//   getPersons() {
//     return this._persons;
//   }
// }
