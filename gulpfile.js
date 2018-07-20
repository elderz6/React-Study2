const gulp = require('gulp');
const git = require('gulp-git');

gulp.task('default', function(done)
{
  console.log('Gulp started...');
  done();
})

gulp.task('init', function(done)
{

})

gulp.task('add', function(done)
{
  gulp.src('./*')
  .pipe(git.add());
  done();
});

gulp.task('commit', function(done)
{
  gulp.src('./*')
  .pipe(git.commit('some message'));
  done();
});

gulp.task('push', function(done)
{
  git.push('origin','master', function(err, done)
  {
    if (err) {
      throw err;
    }
    else {
      console.log('push success');
    }
  })
  done();
})
