const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const createStore = require('redux').createStore;


class Render {
  constructor(app) {
    const settings = app.settings;
    const config = settings.react || {};
    const path = config.path;
    this.cache = new Map();

    global.React = React;

    if (path && fs.existsSync(path)) {
      require(path);
      const map = (global.ploverReactComponents || {}).default || {};
      for (const k in map) {
        this.cache.set(k, map[k]);
      }
    }
  }


  render(name, data) {
    const Component = this.cache.get(name) || nullComponentFor(name);
    const element = React.createElement(Component, data || {});
    return ReactDOMServer.renderToString(element);
  }


  store(data) {
    return createStore(state => state, data);
  }
}


function nullComponentFor(name) {
  return () => {
    return React.createElement(
      'div',
      { className: 'null-component' },
      `can not find component [${name}].`
    );
  };
}


module.exports = function(app) {
  return new Render(app);
};
