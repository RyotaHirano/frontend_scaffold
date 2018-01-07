import gulp from 'gulp'
import requireDir from 'require-dir'
import { reload } from 'browser-sync'
import { DIR } from './gulp/conf'

requireDir('./gulp/tasks')

gulp.task('predefault',
  gulp.series(
    gulp.parallel('webpack', 'pug', 'sass'),
    'copy:img',
    'serve'
  )
)

gulp.task('default',
  gulp.series(
    'predefault'
  )
)

gulp.watch(
  [`${DIR.SRC}/html/**/*.pug`],
  gulp.series(
    'pug',
    reloadBrowser
  )
)

gulp.watch(
  [`${DIR.SRC}/css/**/*.{scss,sass}`],
  gulp.series(
    'sass',
    reloadBrowser
  )
)

gulp.watch(
  [`${DIR.SRC}/img/**/*.{png,jpg,gif,svg}`],
  gulp.series(
    'copy:img',
    reloadBrowser
  )
)

gulp.watch(
  [`${DIR.SRC}/js/**/*.js`],
  gulp.series(
    'webpack',
    reloadBrowser
  )
)

gulp.task('build',
  gulp.series(
    'clean:build',
    gulp.parallel('pug', 'sass', 'webpack', 'imagemin:build'),
    'copy:build'
  )
)

function reloadBrowser(done) {
  reload();
  done();
}
