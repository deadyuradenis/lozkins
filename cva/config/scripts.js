const scripts = [
  '"gen:block": "npx hygen new block"',
  '"gen:layout": "npx hygen new layout"',
  '"gen:page": "npx hygen new page"',
  '"start": "npx gulp start"',
  '"build": "npx gulp build"',
  '"deploy": "npx gulp deploy"',
  '"lint": "npx eslint src/**/*.js"',
  '"fix": "npx eslint --fix src/**/*.js"',
  '"storybook": "storybook dev -p 6006"',
  '"build-storybook": "storybook build"',
];

module.exports = {
  scripts,
};
