const path = require('path');
const normalize = require('normalize-path');

const getWebpackAssetsFilename = ({ filename }) => {
  const assetsDirname = 'assets';
  const assetsHostname = `src/core/${assetsDirname}`;

  const { dir, base } = path.parse(
    path.relative(assetsHostname, filename),
  );

  const result = dir ?
    path.join(assetsDirname, normalize(`${dir}/${base}`))
    : path.join(assetsDirname, base);

  return normalize(result);
};

module.exports = {
  getWebpackAssetsFilename,
};
