const routes = require("express").Router();
const postsRoutes = require("./posts");

routes.use('/api', postsRoutes);

module.exports = routes;