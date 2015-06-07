var jspm = require('jspm')

if (process.env.NODE_ENV === 'production')
{
  jspm.install(true, {})
    .then(function(){
      jspm.dlLoader()
    })
    .then(function() {
      jspm.bundleSFX('app/main', 'build.js', {sourceMaps: false, inject: false, minify: true})
    })
    .then(function(){
      console.log('Deploy finished')
      process.exit(0)
  })
}
