const browserSync = require('browser-sync');

const server = browserSync.create();
const reloadServer = server.reload;

function runServer(cb) {
  server.init({
    server: './public',
    logLevel: 'silent',
    open: 'external',
    ui: false,
  });

  cb();
};

module.exports = {
  runServer,
  reloadServer,
};
