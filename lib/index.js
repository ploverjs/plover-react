const registry = require('./registry');


module.exports = {
  register(name) {
    for (const name in map) {
      registry.put(name, map[name]);
    }
  }
}
