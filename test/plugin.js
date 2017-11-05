const pathUtil = require('path');
const mm = require('plover-test-mate');
const plugin = require('../lib/plugin');


describe('plover-react', function() {
  const applicationRoot = pathUtil.join(__dirname, 'fixtures/app');
  const expectRoot = pathUtil.join(__dirname, 'fixtures/expect');

  const app = mm({
    applicationRoot,
    expectRoot
  });
  app.install('plover-arttemplate');
  app.install(plugin);

  app.it('/index', 'index.html');
});
