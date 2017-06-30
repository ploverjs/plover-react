const registry = require('./registry');


exports.register = function(map) {
  for (const name in map) {
    registry.put(name, map[name]);
  }
}
