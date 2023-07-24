const gulp = require('gulp');
const spriteBuilder = require('gulp-svg-sprite');
const svgCleaner = require('gulp-cheerio');

const { globs } = require('../config/index.js');

const mergeSvgBuilder = (mode) => {
  return (cb) => {
    const pipeline = gulp.src(globs.sprite);

    if (mode === 'clean') {
      pipeline.pipe(svgCleaner({
        run: ($) => {
          $('[fill]').removeAttr('fill');
          $('[style]').removeAttr('style');
          $('[stroke]').removeAttr('stroke');
        },
        parserOptions: { xmlMode: true },
      }));
    }

    pipeline
      .pipe(spriteBuilder({
        shape: {
          dimension: {
            maxWidth: 48,
            maxHeight: 48,
          },
        },
        mode: {
          symbol: {
            dest: mode,
            inline: true,
            sprite: './sprite.svg',
          },
        },
      }))
      .pipe(gulp.dest(globs.publicSprites))
      .on('end', cb)
      .on('error', cb);

    return pipeline;
  };
};

function mergeSvgAsClean(cb) {
  return mergeSvgBuilder('clean')(cb);
};

function mergeSvgAsDefault(cb) {
  return mergeSvgBuilder('default')(cb);
};

function mergeSvg() {
  return gulp.parallel(
    mergeSvgAsClean,
    mergeSvgAsDefault,
  );
};

module.exports = {
  mergeSvgBuilder,
  mergeSvgAsDefault,
  mergeSvgAsClean,
  mergeSvg,
};
