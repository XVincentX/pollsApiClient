var gulp  = require("gulp");
var git   = require("gulp-git");

gulp.task("deploy",function()
{
   git.checkout('deploy', function (err) {
    if (err) throw err;
     git.merge('master', function (err) {
        if (err) throw err;
            gulp.src('./build.*').pipe(git.add()).pipe(git.commit('Deploy'));
       });
    git.push('origin','deploy',function(err) {
        if (err) throw err;
    });
   });
});