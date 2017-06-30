const pathUtil = require('path');
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const registry = require('./registry');


module.exports = function(app) {
  return new Render(app);
}


class Render {
  constructor(app) {
    const settings = app.settings;
    const config = settings.react || {};
    const path = config.path;
    if (path && fs.existsSync(path)) {
      require(path);
    }
  }


  render(name) {
    const Component = registry.get(name) || nullComponentFor(name);
    const element = React.createElement(Component, {});
    return ReactDOMServer.renderToString(element);
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
