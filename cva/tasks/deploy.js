const gh = require('gh-pages');

const { globs } = require('../config/index.js');

function deploy(cb) {
  gh.publish(globs.public, {
    branch: 'build',
    message: 'chore: build project',
  }, cb);
};

module.exports = {
  deploy,
};
