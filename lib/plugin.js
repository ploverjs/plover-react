module.exports = function(app) {
  app.addHelper('react', require('./helper')(app));
};

