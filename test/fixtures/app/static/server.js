const { Provider, connect } = require('react-redux');


/* global React */


const Hello = ({ name }) => {
  return React.createElement(
    'div',
    {},
    `Hello ${name}`
  );
};


const App = ({ store }) => {
  const C = connect(state => state)(Hello);
  return React.createElement(
    Provider,
    { store },
    React.createElement(C)
  );
};


module.exports = {
  Hello,
  App
};
