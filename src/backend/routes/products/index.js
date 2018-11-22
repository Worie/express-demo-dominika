const routes = require('express').Router();

// CRUD -> Create, Read, Update, Delete
// fixtures 

const products = new Map([
  [1, {
    id: 1,
    name: 'Jabłko',
    calories: 345678,
  }],
  [2, {
    id: 2,
    name: 'Pomarańcza',
    calories: 345678,
  },
 ],
  [5,  {
    id: 5,
    name: 'Ser',
    calories: 345678,
  }],
]);

/**
 * Zwraca definicje konkretnego produktu
 */
routes.get('/:id', (req, res) => {
  const { id } = req.params;

  if (!products.has(id)) {
    return res.status(404).send('Product not found');
  }

  const requestedProduct = products.get(id);
  return res
    .status(200, {'Content-Type': 'application/json'})
    .json(requestedProduct);
  // return res.send(`Ok, produkt o który poproszono: ${req.params.id}`);
});

/**
 * Tworzy nowe produkty
 */
routes.post('/:id', (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  if (!data.calories || !data.name || !id) {
    return res.status(400).send('Improper payload');
  }

  products.set(id, { ...data, id });

  return res.status(200, {'Content-Type': 'text/event-stream'}).json(`${id}, dane: ${JSON.stringify(data)}`);
});

routes.delete('/:id', (req, res) => {
  // TODO
});

routes.put('/:id', (req, res) => {
  // TODO
});

module.exports = routes;