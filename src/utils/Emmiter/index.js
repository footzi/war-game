export class Emmiter {
  constructor() {
    this.events = [];
  }

  on(name, callback) {
    if (Array.isArray(this.events[name]) && this.events[name]) {
      this.events[name].push(callback);
    } else {
      this.events[name] = [callback];
    }
  }

  emit(name, args) {
    this.events[name]?.forEach((cb) => cb(args));
  }
}
