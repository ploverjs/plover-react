const REGISTRY = Symbol.for('plover-react-registry');


class Registry {
  constructor() {
    this.cache = new Map();
  }

  get(name) {
    return this.cache[name];
  }

  put(name, component) {
    this.cache.set(name, component);
  }
}


if (!global[REGISTRY]) {
  global[REGISTRY] = new Registry();
}


module.exports = global[REGISTRY];
