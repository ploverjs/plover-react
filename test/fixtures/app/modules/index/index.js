exports.view = ctx => {
  ctx.layout = false;
  ctx.render({ name: 'hello', state: { name: 'plover-react' } });
};
