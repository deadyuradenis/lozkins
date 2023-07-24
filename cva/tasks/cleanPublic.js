const del = require('del');

const { globs } = require('../config/index.js');

function cleanPublic() {
  return del([globs.public]);
};

module.exports = {
  cleanPublic,
};
