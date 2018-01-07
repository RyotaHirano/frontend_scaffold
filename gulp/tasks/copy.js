import gulp from 'gulp';
import { copy as conf } from '../conf';

gulp.task('copy:img', done => {
  gulp.src(conf.img.src)
    .pipe(gulp.dest(conf.img.dst));
  done();
});

gulp.task('copy:build', done => {
  gulp.src(conf.build.src)
    .pipe(gulp.dest(conf.build.dst));
  done();
});
