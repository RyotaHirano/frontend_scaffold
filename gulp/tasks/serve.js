import gulp from 'gulp';
import browserSync from 'browser-sync';
import { serve as conf } from '../conf';

gulp.task('serve', done => {
  browserSync(conf);
  done();
});
