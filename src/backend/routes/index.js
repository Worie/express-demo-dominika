const routes = require('express').Router();
const productRoutes = require('./products');

routes.get('/hello/:name/:level', (req, res) => {
  console.log(req.query);
  console.log(req.params);

  const { name, level } = req.params;

  res.send(`GET: Przekazany userName: ${name}, przekazany userLevel: ${level}`);
});

routes.post('/hello', (req, res) => {
  const { name: userName, password: userPassword } = req.body;

  res.send(`POST: Przekazany userName: ${userName}, przekazany userPassword: ${userPassword}`);
});

routes.get('/api', (req, res) => {
  res.send(`It's working! :tada:`);
});

routes.use('/api/product', productRoutes);

module.exports = routes;