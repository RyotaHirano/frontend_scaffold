import gulp from 'gulp';
import { imagemin, rename } from '../plugins';
import { imagemin as conf } from '../conf';

gulp.task('imagemin:build', done => {
  gulp.src(conf.build.src)
    .pipe(imagemin(conf.build.opts))
    .pipe(rename(path => {
      path.dirname = path.dirname.replace('images', '.');
    }))
    .pipe(gulp.dest(conf.build.dst));
  done();
});
