const PostsDao = require('./../models/daos/postsMemory');
const postValidate = require('./../helpers/postValidate');

const PostsService = {
  async findAll(page, totalPerPage) {
    if (!page) page = 1;
    if (!totalPerPage) totalPerPage = 10;

    page = Number(page);
    totalPerPage = Number(totalPerPage);
    
    if (page < 0) page = 1;
    if (totalPerPage < 0) totalPerPage = 10;

    return await PostsDao.findAll(page, totalPerPage);;
  },

  async findOne(id) {
    return await PostsDao.findOne(id);
  },

  async save(title, body, tags) {
    const validation = postValidate({ title, body, tags });
    if (validation.error) {
      throw validation;
    }

    return await PostsDao.save(title, body, tags);
  },

  async update(id, title, body, tags) {
    const validation = postValidate({ title, body, tags });
    if (validation.error) {
      throw validation;
    }
    return await PostsDao.update(id, title, body, tags);
  },

  async delete(id) {
    await PostsDao.delete(id)
  },
}

module.exports = PostsService;