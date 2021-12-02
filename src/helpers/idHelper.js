const { v4: uuidv4 } = require('uuid');

const IdHelper = {
  generate() {
    return uuidv4();
  },
}

module.exports = IdHelper;