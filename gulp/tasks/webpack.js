import path from 'path';
import gulp from 'gulp';
import webpack from 'webpack';
import log from 'fancy-log';
import PluginError from 'plugin-error';
import { DIR, isProduction } from '../conf';

const webpackConfigBase = require('../../webpack.config.babel');
const webpackConfig = Object.create(webpackConfigBase);

if (isProduction) {
  // build
  webpackConfig.output.path = path.resolve('.', `${DIR.BUILD}${DIR.PATH}assets/js`);
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  );
} else {
  webpackConfig.output.path = path.resolve('.', `${DIR.DST}${DIR.PATH}assets/js`);
}
const webpackCompiler = webpack(webpackConfig);

gulp.task('webpack', done => {
  webpackCompiler.run((err, stats) => {
    if (err) { throw new PluginError('webpack', err); }
    log('[webpack]', stats.toString({ colors: true }));
    done();
  });
});
