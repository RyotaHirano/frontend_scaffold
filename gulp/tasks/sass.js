import gulp from 'gulp';
import { sass, postcss, if as IF, cssnano } from '../plugins';
import { sass as conf, AUTOPREFIXER, isProduction } from '../conf';
let minifyCss = false;
let destCssDir = conf.dev.dst;

if(isProduction) {
  destCssDir = conf.build.dst;
  minifyCss = true;
}

const postcssProcessors = [
  require('autoprefixer')({ browsers: AUTOPREFIXER }),
  require('css-mqpacker')({ sort: function (a, b) { return b.localeCompare(a); } }),
  require('postcss-flexbugs-fixes'),
  require('postcss-partial-import')()
];
gulp.task('sass', () => {
  return gulp.src(conf.src)
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(postcss(postcssProcessors))
    .pipe(IF(minifyCss, cssnano({
      minifyFontValues: {
        removeAfterKeyword: false,
        removeDuplicates: false,
        removeQuotes: false
      }
    })))
    .pipe(gulp.dest(destCssDir));
});
