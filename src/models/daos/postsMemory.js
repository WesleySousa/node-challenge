const posts = require('./../../../posts.json');
const IdHelper = require('./../../helpers/idHelper');

const PostMemory = {
  async findAll(page, totalPerPage) {
    let offSet = (page - 1);
    offSet = offSet * totalPerPage;
    const limit = offSet + totalPerPage;
    
    const paginated = posts.slice(offSet, limit);
    const total = posts.length;
    
    return {
      page: Number(page),
      totalPerPage: Number(totalPerPage),
      total,
      data: [...paginated]
    };
  },

  async findOne(id) {
    return posts.find(p => p.id == id);
  },

  async save(title, body, tags) {
    const newPost = {
      id: IdHelper.generate(),
      title,
      body,
      tags,
    };
    posts.push(newPost);
    return newPost;
  },

  async update(id, title, body, tags) {
    let postIndex = posts.findIndex(p => p.id == id);
    if (postIndex == -1) {
      throw { notFound: true };
    }
    const post = {
      id,
      title,
      body,
      tags,
    };
    posts[postIndex] = post
    return post;
  },

  async delete(id) {
    let postIndex = posts.findIndex(p => p.id == id);
    if (postIndex == -1) {
      throw { notFound: true };
    }
    posts.splice(postIndex, 1);
  },
}

module.exports = PostMemory;