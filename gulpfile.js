var gulp  = require("gulp");
var git   = require("gulp-git");
var run   = require('gulp-run');

gulp.task("deploy",function()
{
   git.checkout('deploy', function (err) {
    if (err) throw err;
     git.merge('master', function (err) {
        if (err) throw err;
           run('jspm bundle app/main --minify').exec()
            .pipe(gulp.dest('output'))
            gulp.src('./build.*').pipe(git.add()).pipe(git.commit('Deploy'));
       });
    git.push('origin','deploy',function(err) {
        if (err) throw err;
       git.checkout('master', function (err) {
           if (err) throw err;
       });
    });
   });
});
