var jspm = require('jspm')

if (process.env.NODE_ENV === 'production')
{
  jspm.install(true, {})
    .then(function() {
      jspm.bundle('app/main', 'build.js', {sourceMaps: false, inject: true})
    })
    .then(function(){
      console.log('Deploy finished')
  })
}
