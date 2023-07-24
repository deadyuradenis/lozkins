function setProductionEnv(cb) {
  process.env.NODE_ENV = 'production';

  cb();
};

module.exports = {
  setProductionEnv,
};
