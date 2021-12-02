const routes = require("express").Router();
const PostController = require('../../controllers/posts');

routes.get('/posts', PostController.findAll);
routes.get('/posts/:id', PostController.findOne);
routes.post('/posts', PostController.save);
routes.put('/posts/:id', PostController.update);
routes.delete('/posts/:id', PostController.delete);

module.exports = routes;
