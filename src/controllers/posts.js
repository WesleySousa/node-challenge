const PostsService = require('./../services/posts');

const PostController = {
  async findAll(req, res) {
    let { page, totalPerPage } = req.query;
    const returnData = await PostsService.findAll(page, totalPerPage);
    return res.json(returnData);
  },

  async findOne(req, res) {
    const id = req.params.id;
    const post = await PostsService.findOne(id);
    if (!post) {
      return res.status(404).send();
    }
    return res.json(post);
  },

  async save(req, res) {
    const { title, body, tags = [] } = req.body;
    try {
      const newPost = await PostsService.save(title, body, tags);
      return res.status(201).json(newPost);
    } catch (e) {
      if (e.error) {
        return res.status(400).json(e.error);
      } else {
        console.log(e);
        return res.status(500).send();
      }
    }
  },

  async update(req, res) {
    const id = req.params.id;
    const { title, body, tags = [] } = req.body;
    try {
      const post = await PostsService.update(id, title, body, tags);
      return res.json(post);
    } catch (e) {
      if (e.notFound) {
        return res.status(404).send();
      } else if (e.error) {
        return res.status(400).json(e.error);
      } else {
        console.log(e);
        return res.status(500).send();
      }
    }
  },

  async delete(req, res) {
    const id = req.params.id;
    try {
      await PostsService.delete(id);
      return res.status(204).send();
    } catch (e) {
      if (e.notFound) {
        return res.status(404).send();
      } else if (e.error) {
        return res.status(400).json(e.error);
      } else {
        console.log(e);
        return res.status(500).send();
      }
    }
  },
}


module.exports = PostController;