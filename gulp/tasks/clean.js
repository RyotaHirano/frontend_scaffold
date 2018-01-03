import gulp from 'gulp';
import del from 'del';
import { clean as conf } from '../conf';

gulp.task('clean:build', cb => {
  del(conf.build.path).then(paths => {
    console.log('Delete:\n', paths.join('\n'));
    cb();
  });
});
