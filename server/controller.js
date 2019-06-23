var _todos = ['go shopping', 'go to the beach', 'brush teeth'];

const controller = {

  get: (req, res) => {
    res.status(200);
    res.send(_todos);
  },
  post: (req, res) => {
    res.status(201);
    _todos.push(req.body.todo);
    res.send('got post');
  },

  update: (req, res) => {
    res.status(200)
    res.send('got put');
  },

  delete: (req, res) => {
    _todos.splice(req.query.index, 1);
    res.status(200);
    res.send('got delete');
  },

  name: (req, res) => {
    res.status(200);
    res.send(req.params.name);
  }

};

module.exports = controller;
