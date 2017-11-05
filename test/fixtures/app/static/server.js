const Hello = ({name}) => {
  return React.createElement(
    'div',
    {},
    `Hello ${name}`
  );
};


module.exports = {
  Hello
};

