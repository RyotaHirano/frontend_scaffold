import gulp from 'gulp';
import del from 'del';
import { clean as conf } from '../conf';

gulp.task('clean:build', done => {
  del(conf.build.path).then(paths => {
    console.log('Deleted:\n', paths.join('\n'));
    done();
  });
});
